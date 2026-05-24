export type ProjectSpec = { k: string; v: string };
export type ProjectShot = { img: string; cap: string };
export type ProjectHighlight = { n: string; t: string; d: string };

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  location: string;
  year: string;
  hero: string;
  lead: string;
  specs: ProjectSpec[];
  plan: { img: string; caption: string };
  intent: string;
  materials: string[];
  gallery: ProjectShot[];
  highlights: ProjectHighlight[];
};

export const PROJECTS: Record<string, Project> = {
  saujana: {
    id: "saujana",
    eyebrow: "Design & Build · BINA MAX",
    title: "Linear Grey House",
    location: "Batu Muda, Gombak",
    year: "2023",
    hero: "/assets/assets/house 1.jpg",
    lead:
      "A double-storey home in Batu Muda built around a linear concrete aesthetic — strong geometry, grey palette, and a continuous indoor-outdoor edge.",
    specs: [
      { k: "Package", v: "BINA MAX" },
      { k: "Built-up", v: "2,000 sqft" },
      { k: "Type", v: "Double-storey" },
      { k: "Bedrooms", v: "4 bed · 3 bath" },
      { k: "Duration", v: "8 months" },
      { k: "Price", v: "from RM430,000" },
    ],
    plan: {
      img: "/assets/assets/inear grey house 1.png",
      caption: "Street facade — white volume meets charcoal feature mass",
    },
    intent:
      'This house carries a modern tropical-minimalist language with a strong emphasis on clean geometry, privacy, and contrast. The architecture feels calm yet bold — using simple forms to create a premium street presence without excessive ornamentation.\n\nContrast as Identity\n\nThe combination of crisp white walls, charcoal textured feature mass, and slim black steel framing creates a strong monochrome identity. The dark side volume acts like a "protective shell" wrapping the private spaces, while the white surfaces soften the composition and reflect natural daylight.',
    materials: [
      "Crisp white plaster walls",
      "Charcoal textured feature mass",
      "Slim black steel framing",
      "Powder-coated aluminium windows",
      "Exposed concrete soffit",
    ],
    gallery: [
      { img: "/assets/assets/inear grey house 4.png", cap: "Side elevation — charcoal shell wrapping private wing" },
      { img: "/assets/assets/inear grey house 6.png", cap: "Exterior detail — black steel framing against white wall" },
      { img: "/assets/assets/inear grey house 3.png", cap: "Rear view — clean geometry, minimal ornamentation" },
    ],
    highlights: [
      { n: "01", t: "Monochrome identity", d: "White walls + charcoal mass + black steel framing — a single coordinated palette end to end." },
      { n: "02", t: "Protective shell volume", d: "The dark side mass wraps private spaces, shielding them from street and west sun." },
      { n: "03", t: "Tropical-minimalist form", d: "Clean geometry with no ornament — premium street presence through proportion alone." },
    ],
  },
  subang: {
    id: "subang",
    eyebrow: "Design & Build · BINA START",
    title: "Sawah & Teduh, Makngah Tiny House",
    location: "Sekinchan, Selangor",
    year: "2024",
    hero: "/assets/assets/sekinchan.png",
    lead:
      "A contemporary tropical retreat conceived to sit gently within the rural landscape of Sekinchan — compact in footprint, generous in experience, and intentionally designed for slow living.",
    specs: [
      { k: "Package", v: "BINA START" },
      { k: "Built-up", v: "1,200 sqft" },
      { k: "Type", v: "Bungalow 1 storey" },
      { k: "Bedrooms", v: "3 bed · 2 bath" },
      { k: "Duration", v: "3 months" },
      { k: "Price", v: "RM180,000" },
    ],
    plan: { img: "/assets/assets/sekinchan 1.png", caption: "Minimal massing — pitched roof silhouette, calm rural frontage" },
    intent:
      "The house is conceived as a contemporary tropical retreat that responds sensitively to the rural landscape of Sekinchan. The design adopts a minimal massing with a distinctive pitched roof silhouette — inspired by traditional agricultural forms — reinterpreted through a modern architectural language of clean lines, restrained materials, and balanced solid-to-void composition. Large framed openings maximise natural daylight, cross ventilation, and panoramic views toward the paddy fields, while deep overhangs and shaded transitional spaces temper the tropical climate throughout the day. Material selection focuses on warm, tactile finishes and muted tones so the architecture sits gently within its environment — calm, grounded, and timeless — exploring the idea of slow living: minimal yet emotionally warm, and designed to encourage rest, reflection, and reconnection with nature.",
    materials: [
      "Minimal pitched roof form",
      "Warm tactile wall finishes",
      "Large framed panoramic openings",
      "Deep tropical overhangs",
      "Muted-tone material palette",
    ],
    gallery: [
      { img: "/assets/assets/sekinchan 4.png", cap: "Garden court — pavilion form with full-height glazing" },
      { img: "/assets/assets/sekinchan 2.png", cap: "Living wing toward garden court" },
      { img: "/assets/assets/sekinchan 3.png", cap: "Upper bedroom wing, screened balcony" },
    ],
    highlights: [
      { n: "01", t: "Tropical form reinterpreted", d: "Pitched roof silhouette drawn from local agricultural vernacular, rendered in a modern architectural language." },
      { n: "02", t: "Paddy field views", d: "Large framed openings capture panoramic views and maximise natural light and cross ventilation." },
      { n: "03", t: "Slow living by design", d: "Compact footprint, deep overhangs, and muted materials — built for rest, reflection, and reconnection with nature." },
    ],
  },
  klang: {
    id: "klang",
    eyebrow: "Renovation",
    title: "Modern Courtyard Renewal",
    location: "Klang, Selangor",
    year: "2024",
    hero: "/assets/assets/courtyard renewal.png",
    lead:
      "A 1990s terrace stripped back to its shell and rebuilt around a central courtyard — open living, lush greenery at the core, and a full re-roof.",
    specs: [
      { k: "Scope", v: "Whole-home renovation" },
      { k: "Built-up", v: "1,800 sqft" },
      { k: "Original year", v: "1996" },
      { k: "Bedrooms", v: "4 bed · 3 bath" },
      { k: "Duration", v: "4 months" },
      { k: "Price", v: "RM300,000" },
    ],
    plan: {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop",
      caption: "New layout — kitchen pulled forward, living opened to rear extension",
    },
    intent:
      "The clients had outgrown the layout but loved the neighbourhood. We removed three internal walls, rebuilt the kitchen as the social heart, and added a 200 sqft rear pavilion that reads as part of the original — not an afterthought.",
    materials: ["Reclaimed cengal floor", "Microcement walls", "Quartz worktop", "Matte-black fixtures", "New zincalume roof"],
    gallery: [
      { img: "/assets/assets/courtyard 2.png", cap: "Skylit inner courtyard — polycarbonate roof, pebble garden border and sliding glass to the open-plan kitchen" },
      { img: "/assets/assets/courtyard 1.png", cap: "Renovated front porch at dusk — flat canopy, floor-to-ceiling sliding glass entry and matte-black sconce lighting" },
      { img: "/assets/assets/courtyard 7.png", cap: "Dry kitchen — timber-veneer cabinetry, white quartz worktop and matte-black fixtures throughout" },
      { img: "/assets/assets/courtyard 6.png", cap: "Open-plan living — engineered timber floor, ceiling fans and courtyard sliding glass at the rear" },
      { img: "/assets/assets/courtyard 5.png", cap: "Living zone — recessed downlights, matte-black wall sconces and clean white rendered walls" },
      { img: "/assets/assets/courtyard 4.png", cap: "Renovated front façade — white rendered finish, flat roof canopy and black vertical-slat main door" },
      { img: "/assets/assets/courtyard 3.png", cap: "Open-plan dining and kitchen in view — wide-span ceiling fans over warm engineered timber floor" },
    ],
    highlights: [
      { n: "01", t: "Re-piped & re-wired", d: "Full M&E replacement — 25-year warranty." },
      { n: "02", t: "Insulated ceiling", d: "Rockwool batts cut upstairs heat by 40%." },
      { n: "03", t: "Rebuilt rear façade", d: "New 3.6m sliding door floods the kitchen with light." },
    ],
  },
  pj: {
    id: "pj",
    eyebrow: "Renovation",
    title: "Ervina",
    location: "Petaling Jaya, Selangor",
    year: "2025",
    hero: "/assets/assets/ervina 6.png",
    lead:
      "A kitchen and adjoining living-room reset for a young couple who cook every night — better workflow, better light, the same footprint.",
    specs: [
      { k: "Scope", v: "Kitchen + living" },
      { k: "Area", v: "420 sqft combined" },
      { k: "Property", v: "PJ link house" },
      { k: "Cabinetry", v: "Custom carcass" },
      { k: "Duration", v: "6 weeks" },
      { k: "Price", v: "RM200,000" },
    ],
    plan: { img: "/assets/assets/ervina 7.png", caption: "Island workflow — kitchen opened to living" },
    intent:
      "The original galley kitchen forced two cooks past each other. We removed the dividing wall, replaced it with a 2.4m island, and pushed the appliance run to the back wall so the workflow flows in one direction.",
    materials: ["Birch-ply cabinet carcass", "Sintered stone island top", "Hand-glazed splashback tile", "Brass tap fittings", "Oak engineered floor"],
    gallery: [
      { img: "/assets/assets/ervina 5.png", cap: "Kitchen island, finished" },
      { img: "/assets/assets/ervina 4.png", cap: "Appliance run + tall pantry" },
      { img: "/assets/assets/ervina 8.png", cap: "Living room, new joinery" },
      { img: "/assets/assets/ervina 14.png", cap: "Open-plan living, kitchen in view" },
      { img: "/assets/assets/ervina 18.png", cap: "Bifold divide — dry & wet kitchen" },
      { img: "/assets/assets/ervina 17.png", cap: "Master bedroom, cove-lit headboard" },
      { img: "/assets/assets/ervina 16.png", cap: "Full kitchen overview, island + wet run" },
      { img: "/assets/assets/ervina 15.png", cap: "TV feature wall + bespoke joinery" },
      { img: "/assets/assets/ervina 19.png", cap: "Master bathroom, double vanity + pendant lights" },
    ],
    highlights: [
      { n: "01", t: "Soft-close everything", d: "Blum runners and hinges, lifetime warranty." },
      { n: "02", t: "Two-cook geometry", d: "Triangle kept under 2.1m at all stations." },
      { n: "03", t: "Hidden appliances", d: "Integrated fridge, dishwasher and microwave." },
    ],
  },
  usj: {
    id: "usj",
    eyebrow: "Interior · 9-in-1",
    title: "Ummi Maktum, Usim",
    location: "USIM, Negeri Sembilan",
    year: "2025",
    hero: "/assets/assets/usim 1.png",
    lead:
      "A complete interior package for a young family moving into a new build — flooring, ceiling, curtains, kitchen, wardrobes, paint, lighting, TV console and dining set, all in one contract.",
    specs: [
      { k: "Package", v: "Interior 9-in-1" },
      { k: "Coverage", v: "Full home" },
      { k: "Bedrooms", v: "4 bed · 3 bath" },
      { k: "Items delivered", v: "9 categories" },
      { k: "Duration", v: "5 weeks" },
      { k: "Price", v: "RM59,999" },
    ],
    plan: {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=80&auto=format&fit=crop",
      caption: "Mood plan · neutral base, warm timber accents",
    },
    intent:
      "The clients wanted a coordinated home delivered in one go — no chasing five vendors, no tonal mismatches. We sequenced the install so they moved in on day 35 with everything in place, including art and styling.",
    materials: ["SPC vinyl flooring", "Plaster cornice ceiling", "Day-and-night roller blinds", "Quartz kitchen top", "Natural-rattan accents"],
    gallery: [
      { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&auto=format&fit=crop", cap: "Living room, finished" },
      { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80&auto=format&fit=crop", cap: "Master bedroom" },
      { img: "https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=900&q=80&auto=format&fit=crop", cap: "Kitchen + dining" },
    ],
    highlights: [
      { n: "01", t: "One contract", d: "One PIC, one timeline, one warranty card." },
      { n: "02", t: "Move-in ready", d: "Linen, cookware and lightbulbs included." },
      { n: "03", t: "After-care year", d: "12-month touch-up visit included." },
    ],
  },
  kajang: {
    id: "kajang",
    eyebrow: "Design & Build · BINA MAX",
    title: "The Kajang Courtyard House",
    location: "Kajang, Selangor",
    year: "2025",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format&fit=crop",
    lead:
      "A contemporary courtyard home on a corner lot — the courtyard does double-duty as light well, ventilation chimney and family hangout.",
    specs: [
      { k: "Package", v: "BINA MAX" },
      { k: "Built-up", v: "2,200 sqft" },
      { k: "Type", v: "Double-storey (corner lot)" },
      { k: "Bedrooms", v: "4 bed · 4 bath" },
      { k: "Duration", v: "9 months" },
      { k: "Price", v: "from RM520,000" },
    ],
    plan: {
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d0a?w=1400&q=80&auto=format&fit=crop",
      caption: "C-shaped plan wrapping a 4×4m planted courtyard",
    },
    intent:
      "On a corner lot the obvious move is to fill the boundary. We did the opposite — pulled the building back and wrapped it in a C around an open courtyard, gaining cross-ventilation and giving every room a green outlook.",
    materials: ["Off-form concrete soffit", "Limewash exterior", "Travertine paving", "Black-steel windows", "Burma teak doors"],
    gallery: [
      { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop", cap: "Courtyard from living" },
      { img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80&auto=format&fit=crop", cap: "Façade detail at corner" },
      { img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80&auto=format&fit=crop", cap: "Master ensuite" },
    ],
    highlights: [
      { n: "01", t: "Passive cooling", d: "Courtyard chimney pulls air through living all day." },
      { n: "02", t: "Rainwater harvest", d: "1,500L tank feeds garden and outdoor wash." },
      { n: "03", t: "Acoustic glazing", d: "Double-glazed corners against road noise." },
    ],
  },
  cyber: {
    id: "cyber",
    eyebrow: "Interior · 7-in-1",
    title: "The Cyber Loft",
    location: "Cyberjaya, Selangor",
    year: "2024",
    hero: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1800&q=80&auto=format&fit=crop",
    lead:
      "A serviced-apartment fit-out for a remote-first young professional — flexible work zone, calm sleep zone, generous kitchen for a one-bedder.",
    specs: [
      { k: "Package", v: "Interior 7-in-1" },
      { k: "Built-up", v: "1,100 sqft" },
      { k: "Layout", v: "1 bed · 1 study · 1 bath" },
      { k: "Items delivered", v: "7 categories" },
      { k: "Duration", v: "3 weeks" },
      { k: "Price", v: "RM49,999" },
    ],
    plan: {
      img: "https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=1400&q=80&auto=format&fit=crop",
      caption: "Open-plan core · sleep zone behind sliding partition",
    },
    intent:
      "Loft living without the loft compromises. A sliding timber partition turns one open volume into either a spacious studio for entertaining, or a separated bedroom + study at night.",
    materials: ["Engineered oak floor", "Linen-look acoustic panels", "Brushed-steel kitchen", "Marble-look quartz top", "Black sheer curtains"],
    gallery: [
      { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80&auto=format&fit=crop", cap: "Open living, partition open" },
      { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&auto=format&fit=crop", cap: "Sleep zone, partition closed" },
      { img: "https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=900&q=80&auto=format&fit=crop", cap: "Compact kitchen run" },
    ],
    highlights: [
      { n: "01", t: "Sliding partition", d: "Reconfigure the home in 3 seconds." },
      { n: "02", t: "Cable-free desk", d: "In-desk power and USB-C, no visible wires." },
      { n: "03", t: "Hotel-grade lighting", d: "Three scenes — work, relax, sleep." },
    ],
  },
  ampang: {
    id: "ampang",
    eyebrow: "Renovation",
    title: "The Ampang Refit",
    location: "Ampang, Selangor",
    year: "2024",
    hero: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1800&q=80&auto=format&fit=crop",
    lead:
      "A focused two-area refit — kitchen and master bathroom — for a couple who wanted impact without a full-house rebuild.",
    specs: [
      { k: "Scope", v: "2 areas" },
      { k: "Areas", v: "Kitchen + master bath" },
      { k: "Property", v: "Ampang condo" },
      { k: "Disruption", v: "Lived-in renovation" },
      { k: "Duration", v: "4 weeks" },
      { k: "Price", v: "RM100,000" },
    ],
    plan: {
      img: "https://images.unsplash.com/photo-1600566753051-31bd3d63bb04?w=1400&q=80&auto=format&fit=crop",
      caption: "Wet-zone replan — relocated WC, new walk-in shower",
    },
    intent:
      "Two intense weeks per zone, sequenced so the client never lost both. We protected adjacent rooms with full dust barriers and ran the works to a strict daily schedule — no surprises.",
    materials: ["Microcement floor + walls", "Frameless glass screen", "Matte-black brassware", "Quartz vanity top", "Walnut cabinet fronts"],
    gallery: [
      { img: "https://images.unsplash.com/photo-1600573472556-e636c2acda88?w=900&q=80&auto=format&fit=crop", cap: "New kitchen run" },
      { img: "https://images.unsplash.com/photo-1600566753051-31bd3d63bb04?w=900&q=80&auto=format&fit=crop", cap: "Walk-in shower" },
      { img: "https://images.unsplash.com/photo-1600210491969-aab3a3a8b4a6?w=900&q=80&auto=format&fit=crop", cap: "Vanity, double-bowl" },
    ],
    highlights: [
      { n: "01", t: "Lived-in protocol", d: "Daily 5pm clean-down, dust barriers, shoe covers." },
      { n: "02", t: "Zero leaks", d: "Pressure-tested plumbing, 10-year wet warranty." },
      { n: "03", t: "Strata-friendly", d: "All work within JMB hours and material-list rules." },
    ],
  },
};
