/* =============================================
   HEADER & FOOTER BİLEŞENLERİ
   Her sayfada ortak kullanılır.
   Sosyal medya ve iletişim linklerini buradan güncelleyin.
   ============================================= */

/* ---------- SOSYAL MEDYA LİNKLERİ ----------
   Yeni hesap eklemek veya linkı değiştirmek için buradan güncelleyin */
const SOCIAL = {
  instagram: 'https://www.instagram.com/ersamimarlik/',
  linkedin:  'https://www.linkedin.com/in/imren-demir',
  youtube:   'https://www.youtube.com/channel/UCO8PTYkFHhSlKXVBCp771zQ',
  whatsapp:  'https://wa.me/905323517791'   /* WhatsApp: 0532 351 77 91 */
};

/* ---------- HEADER ---------- */
function renderHeader(activePage) {
  const pages = [
    { key: 'home',     href: 'index.html',     i18n: 'nav_home'     },
    { key: 'about',    href: 'hakkimizda.html', i18n: 'nav_about'    },
    { key: 'services', href: 'hizmetler.html',  i18n: 'nav_services' },
    { key: 'blog',     href: 'blog.html',       i18n: 'nav_blog'     },
    { key: 'contact',  href: 'iletisim.html',   i18n: 'nav_contact'  },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="nav-link${activePage === p.key ? ' active' : ''}" data-i18n="${p.i18n}"></a>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="nav-link${activePage === p.key ? ' active' : ''}" data-i18n="${p.i18n}"></a>`
  ).join('');

  document.getElementById('header-placeholder').innerHTML = `
    <header class="header ${activePage === 'home' ? 'hero-page' : 'no-hero'}" id="mainHeader">
      <nav class="nav">
        <!-- LOGO: images/logo-nav.png dosyasını değiştirebilirsiniz -->
        <a href="index.html" class="nav-logo">
          <img src="images/logo-nav.png" alt="Ersa Mimarlık Logo">
        </a>

        <div class="nav-menu">${navLinks}</div>

        <div class="nav-right">
          <!-- Sosyal medya ikonları -->
          <div class="nav-social">
            <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="${SOCIAL.youtube}" target="_blank" rel="noopener" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="${SOCIAL.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
          <!-- Dil seçici -->
          <div class="lang-switcher">
            <button class="lang-btn" data-lang="tr">TR</button>
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="ar">AR</button>
          </div>
        </div>

        <!-- Hamburger (mobil) -->
        <button class="hamburger" id="hamburger" aria-label="Menü">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>

    <!-- Mobil menü -->
    <div class="mobile-menu" id="mobileMenu">
      ${mobileLinks}
      <div class="mobile-social">
        <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${SOCIAL.linkedin}"  target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="${SOCIAL.youtube}"   target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="${SOCIAL.whatsapp}"  target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
      <div class="mobile-lang">
        <button class="lang-btn" data-lang="tr">TR</button>
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="ar">AR</button>
      </div>
    </div>
  `;
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">

          <!-- Marka sütunu -->
          <div class="footer-brand">
            <!-- LOGO: images/logo-nav.png -->
            <img src="images/logo-nav.png" alt="Ersa Mimarlık">
            <p data-i18n="footer_desc"></p>
            <div class="footer-social">
              <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="${SOCIAL.linkedin}"  target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="${SOCIAL.youtube}"   target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              <a href="${SOCIAL.whatsapp}"  target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <!-- Hızlı bağlantılar -->
          <div class="footer-col">
            <h5 data-i18n="footer_links"></h5>
            <div class="footer-links">
              <a href="index.html"     data-i18n="nav_home"></a>
              <a href="hakkimizda.html" data-i18n="nav_about"></a>
              <a href="hizmetler.html" data-i18n="nav_services"></a>
              <a href="blog.html"      data-i18n="nav_blog"></a>
              <a href="iletisim.html"  data-i18n="nav_contact"></a>
            </div>
          </div>

          <!-- Hizmetler -->
          <div class="footer-col">
            <h5 data-i18n="nav_services"></h5>
            <div class="footer-links">
              <a href="hizmetler.html" data-i18n="svc_proje_title"></a>
              <a href="hizmetler.html" data-i18n="svc_giyotin_title"></a>
              <a href="hizmetler.html" data-i18n="svc_cambalkon_title"></a>
              <a href="hizmetler.html" data-i18n="svc_aluminyum_title"></a>
              <a href="hizmetler.html" data-i18n="svc_kisbahce_title"></a>
            </div>
          </div>

          <!-- İletişim -->
          <div class="footer-col">
            <h5 data-i18n="footer_contact"></h5>
            <div class="footer-contact-items">
              <div class="footer-contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <!-- ADRES: Değiştirmek için burayı güncelleyin -->
                <span>Kayabaşı Mah. Adnan Menderes Bulvarı, Kuzey Yakası Ofisleri A-2/46, Başakşehir / İstanbul</span>
              </div>
              <!-- TELEFON: Yeni numara eklemek için aynı yapıyı tekrarlayın -->
              <div class="footer-contact-item">
                <i class="fas fa-phone"></i>
                <a href="tel:+905323517791">0532 351 77 91</a>
              </div>
              <div class="footer-contact-item">
                <i class="fas fa-phone"></i>
                <a href="tel:+905398537970">0539 853 79 70</a>
              </div>
              <!-- E-POSTA -->
              <div class="footer-contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:ersacephe@gmail.com">ersacephe@gmail.com</a>
              </div>
            </div>
          </div>

        </div><!-- /footer-grid -->
      </div><!-- /container -->

      <div class="footer-bottom">
        <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <span data-i18n="footer_rights"></span>
          <span>Tasarım ile <i class="fas fa-heart" style="color:var(--gold)"></i></span>
        </div>
      </div>
    </footer>
  `;
}

/* ---------- Sabit Elemanlar ---------- */
function renderFixed() {
  /* WhatsApp yüzen butonu */
  document.getElementById('wa-placeholder').innerHTML = `
    <a class="whatsapp-float" href="${SOCIAL.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ile İletişime Geç">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;
}

/* ---------- Header Davranışları (inject sonrası çalışır) ---------- */
function initHeaderBehavior() {
  const header   = document.getElementById('mainHeader');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  /* Scroll → header arka planı */
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Hamburger aç/kapat */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    /* Bir linke tıklanınca menüyü kapat */
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ---------- Ana Init ---------- */
function initComponents(activePage) {
  renderHeader(activePage);
  renderFooter();
  renderFixed();
  initHeaderBehavior(); /* header inject edildikten hemen sonra çalışır */
}
