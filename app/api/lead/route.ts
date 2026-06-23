/**
 * Lead capture endpoint.
 *
 * The Contact form POSTs here. We validate + screen for spam, then forward the
 * lead to the Google Apps Script web app (which appends a row to the BINA+ Leads
 * sheet). The Apps Script URL + shared secret live in env vars so they never
 * ship in the client bundle.
 *
 * If the webhook isn't configured yet, or Google is unreachable, we return
 * { ok: false, fallback: true } so the form can fall back to WhatsApp — a lead
 * is never silently lost.
 */

const WEBHOOK_URL = process.env.LEAD_SHEET_WEBHOOK_URL;
const SECRET = process.env.LEAD_SHEET_SECRET;

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  area?: string;
  message?: string;
  source?: string;
  page?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot — real users never fill this hidden field. Pretend success.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const interest = (body.interest || "").trim();

  if (!name || !phone || !interest) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  // Not configured yet → tell the form to fall back to WhatsApp.
  if (!WEBHOOK_URL || !SECRET) {
    return Response.json({ ok: false, fallback: true });
  }

  const row = {
    token: SECRET,
    name,
    phone,
    email: (body.email || "").trim(),
    interest,
    area: (body.area || "").trim(),
    message: (body.message || "").trim(),
    source: (body.source || "").trim(),
    page: (body.page || "").trim(),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      // Apps Script answers a POST with a 302 to googleusercontent; fetch
      // follows it to retrieve the JSON body. The row is appended on the POST.
      redirect: "follow",
    });

    // Try to read the script's JSON verdict; tolerate non-JSON responses.
    let ok = res.ok;
    try {
      const data = await res.json();
      ok = data?.ok === true;
    } catch {
      // Apps Script sometimes serves HTML on the redirected GET — a 2xx is
      // enough to trust the append went through.
    }

    if (!ok) return Response.json({ ok: false, fallback: true });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, fallback: true });
  }
}
