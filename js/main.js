/* =============================================
   MAIN.JS — Genel Fonksiyonlar
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- SAYFA LOADER ---------- */
  const loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 500);
    });
    /* Yavaş yükleme için güvenlik */
    setTimeout(() => loader && loader.classList.add('hidden'), 3000);
  }

  /* Header scroll ve hamburger → components.js/initHeaderBehavior() tarafından yönetilir */

  /* ---------- GERİ DÖN BUTONU ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- FADE-IN ANİMASYONLARI ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ---------- SAYAÇ ANİMASYONU ---------- */
  const counters = document.querySelectorAll('.count-up');
  if (counters.length) {
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cObserver.observe(el));
  }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const step     = target / (duration / 16);
    let current    = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  }

});
