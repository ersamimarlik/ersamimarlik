/* =============================================
   HERO SLİDER
   ============================================= */

function initHeroSlider() {
  const slides    = document.querySelectorAll('.slide');
  const dots      = document.querySelectorAll('.slider-dot');
  const prevBtn   = document.getElementById('sliderPrev');
  const nextBtn   = document.getElementById('sliderNext');
  if (!slides.length) return;

  let current   = 0;
  let autoTimer = null;
  const INTERVAL = 5500;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  /* Dot'lar */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
  });

  /* Oklar */
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  /* Touch / swipe desteği */
  let touchStartX = 0;
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener('touchend',   e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
    }, { passive: true });
  }

  /* Klavye */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); startAuto(); }
  });

  goTo(0);
  startAuto();
}

/* =============================================
   UYGULAMA GALERİ SLİDERİ
   ============================================= */
function initAppSlider() {
  const track    = document.getElementById('appSlides');
  const prevBtn  = document.getElementById('appPrev');
  const nextBtn  = document.getElementById('appNext');
  const dotsWrap = document.getElementById('appDots');
  if (!track) return;

  /* Kaç slayt görüneceğini viewport'a göre belirle */
  function getVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  const items     = track.querySelectorAll('.app-slide');
  const total     = items.length;
  let current     = 0;
  let autoTimer   = null;
  const INTERVAL  = 4000;

  /* Dot oluştur */
  if (dotsWrap) {
    const pages = Math.ceil(total / getVisible());
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('button');
      d.className = 'app-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => { goTo(i); startAuto(); });
      dotsWrap.appendChild(d);
    }
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.app-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    const vis   = getVisible();
    const pages = Math.ceil(total / vis);
    current = (index + pages) % pages;
    const itemW = track.parentElement.offsetWidth / vis;
    track.style.transform = `translateX(-${current * vis * itemW}px)`;
    updateDots();
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
  }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  /* Resize */
  window.addEventListener('resize', () => goTo(0), { passive: true });

  /* Touch */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  }, { passive: true });

  goTo(0);
  startAuto();
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initAppSlider();
});
