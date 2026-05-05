/* BINA+ — interactions */
(function(){
  'use strict';

  // ---------- Lenis smooth scroll (desktop only, respects reduced motion) ----------
  // Continuously interpolates the scroll position so wheel ticks become a fluid glide.
  // Every scroll-driven animation downstream (vhero scrub, horizontal gallery, header
  // state, reveals) inherits this smoothness for free.
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = matchMedia('(pointer: coarse)').matches;
  let lenis = null;
  if (window.Lenis && !prefersReduced && !isCoarse) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out — same as Katimas
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    window.__lenis = lenis;
  }

  // Header scroll state
  const header = document.querySelector('.header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile drawer
  const toggle = document.querySelector('.nav__toggle');
  const drawer = document.querySelector('.drawer');
  const closeBtn = document.querySelector('.drawer__close');
  const openDrawer = () => { drawer?.classList.add('is-open'); document.body.style.overflow='hidden'; };
  const closeDrawer = () => { drawer?.classList.remove('is-open'); document.body.style.overflow=''; };
  toggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // Case studies filter
  const filterBtns = document.querySelectorAll('.filter button');
  const cases = document.querySelectorAll('.case');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter;
      cases.forEach(c => {
        const show = f === 'all' || c.dataset.category === f;
        c.style.display = show ? '' : 'none';
      });
    });
  });

  // Catalog carousel (simple horizontal scroll)
  const grid = document.querySelector('[data-catalog]');
  document.querySelectorAll('[data-catalog-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!grid) return;
      const dir = btn.dataset.catalogNav === 'next' ? 1 : -1;
      grid.scrollBy({ left: dir * (grid.clientWidth * 0.6), behavior: 'smooth' });
    });
  });

  // Year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Scroll-scrubbed video hero ----------
  (function vheroScrub(){
    const section = document.getElementById('vhero');
    const video   = document.getElementById('vheroVideo');
    const bar     = document.getElementById('vheroBar');
    if (!section || !video) return;

    // Pick lighter source on mobile / small viewports before first load
    const src = document.getElementById('vheroSrc');
    if (src && window.innerWidth <= 820) {
      src.src = 'assets/video/hero-720.mp4';
      video.load();
    }

    const reveals = section.querySelectorAll('.vhero__reveal');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      reveals.forEach(el => el.classList.add('is-in'));
      video.setAttribute('autoplay','');
      video.setAttribute('loop','');
      video.play?.().catch(()=>{});
      return;
    }

    let duration = 0;
    let targetTime = 0;
    let currentTime = 0;
    let ticking = false;
    let lastProgress = -1;
    let ready = false;

    const setReady = () => {
      duration = video.duration || 0;
      ready = duration > 0;
      // Paint the first frame immediately
      try { video.currentTime = 0.02; } catch(e){}
      // Run an update so the headline reveals + bar reflect current scroll
      onScrollVH();
    };

    if (video.readyState >= 2) setReady();
    else {
      video.addEventListener('loadeddata', setReady, { once:true });
      video.addEventListener('canplay',    setReady, { once:true });
    }

    // Nudge iOS/Safari to decode the first frames (required for scrubbing on mobile Safari)
    const primeIOS = () => {
      const p = video.play();
      if (p && p.then) p.then(() => video.pause()).catch(()=>{});
    };
    document.addEventListener('touchstart', primeIOS, { once:true, passive:true });
    document.addEventListener('click', primeIOS, { once:true });

    function onScrollVH(){
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    function update(){
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      if (ready && Math.abs(progress - lastProgress) > 0.0005) {
        lastProgress = progress;
        targetTime = Math.max(0.02, Math.min(0.98, progress)) * duration;
        smoothSeek();
      }

      if (bar) bar.style.width = (progress * 100).toFixed(2) + '%';

      reveals.forEach(el => {
        const step = parseInt(el.dataset.step || '0', 10);
        const trigger = 0.02 + step * 0.10;
        el.classList.toggle('is-in', progress >= trigger);
      });
    }

    let rafSmooth = 0;
    const smoothSeek = () => {
      cancelAnimationFrame(rafSmooth);
      const step = () => {
        const diff = targetTime - currentTime;
        if (Math.abs(diff) < 0.005) {
          currentTime = targetTime;
          try { video.currentTime = currentTime; } catch(e){}
          return;
        }
        currentTime += diff * 0.18; // easing
        try { video.currentTime = currentTime; } catch(e){}
        rafSmooth = requestAnimationFrame(step);
      };
      rafSmooth = requestAnimationFrame(step);
    };

    document.addEventListener('scroll', onScrollVH, { passive:true });
    window.addEventListener('resize', onScrollVH);
    onScrollVH();
  })();

  // ---------- Horizontal scroll-scrub gallery (desktop only — mobile uses native swipe) ----------
  // Use a CSS media query match so GSAP is NEVER registered, initialised, or
  // given a chance to pin anything on mobile. A simple innerWidth check at
  // script-execution time can still fire if layout hasn't settled yet, or if
  // the browser reports the wrong width briefly on first paint — using
  // matchMedia with addListener instead guarantees it is strictly desktop-only.
  (function hscrollGallery(){
    const section = document.getElementById('catalog');
    const track   = document.getElementById('hscrollTrack');
    const bar     = document.getElementById('hscrollBar');
    if (!section || !track) return;

    const reduced     = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Strict media query — matches only when viewport is wider than 880 px.
    // This is evaluated by the browser layout engine, not JS, so it can never
    // fire a false positive on a narrow screen.
    const desktopMQ   = matchMedia('(min-width: 881px)');

    if (reduced || !desktopMQ.matches) return; // mobile: purely CSS snap carousel, no JS needed

    // Need GSAP + ScrollTrigger — they're loaded via CDN before this script
    if (!window.gsap || !window.ScrollTrigger) {
      console.warn('[hscroll] GSAP/ScrollTrigger not loaded; skipping pinned scroll.');
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    let stInstance = null; // holds the ScrollTrigger instance for resize/MQ cleanup

    // Kill GSAP pin the instant the viewport shrinks to mobile width.
    // This handles device rotation and devtools responsive mode.
    const onMQChange = (e) => {
      if (!e.matches && stInstance) {
        stInstance.kill();
        stInstance = null;
        gsap.set(track, { clearProps: 'transform,x' });
      }
    };
    // Use addEventListener for modern browsers; fall back to deprecated addListener.
    if (desktopMQ.addEventListener) {
      desktopMQ.addEventListener('change', onMQChange);
    } else {
      desktopMQ.addListener(onMQChange); // Safari < 14 fallback
    }

    const init = () => {
      // Distance the track must travel left so its right edge meets viewport's right edge
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          start: 'top top',
          end: () => '+=' + Math.abs(getScrollAmount()),
          scrub: 1,
          invalidateOnRefresh: true,
          onInit: self => { stInstance = self; },
          onUpdate: bar ? (self) => { bar.style.width = (self.progress * 100).toFixed(2) + '%'; } : undefined,
        },
      });

      // Re-measure once everything settles (fonts, late images, font-swap reflow)
      ScrollTrigger.refresh();
    };

    // Wait for ALL images in the track to decode before measuring scrollWidth.
    const imgs = Array.from(track.querySelectorAll('img'));
    if (imgs.length === 0) {
      init();
    } else {
      Promise.all(
        imgs.map(img => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise(res => {
            img.addEventListener('load',  res, { once:true });
            img.addEventListener('error', res, { once:true });
          });
        })
      ).then(init);
    }
    // Also refresh on window load as a final safety net
    window.addEventListener('load', () => ScrollTrigger.refresh());
  })();
})();
