/* =============================================
   BLOG YÖNETİMİ
   Yeni makale eklemek için data/blog/articles.js
   dosyasındaki BLOG_ARTICLES dizisine yeni obje ekleyin.
   ============================================= */

/* Mevcut dil için "Devamını Oku" metnini döndürür */
function readMoreText() {
  const lang = localStorage.getItem('ersa_lang') || 'tr';
  if (typeof LANG !== 'undefined' && LANG[lang] && LANG[lang].btn_read_more) {
    return LANG[lang].btn_read_more;
  }
  return 'Devamını Oku';
}

/* Tek kart HTML'i oluşturur */
function buildCard(article, lang) {
  return `
    <article class="blog-card">
      <a href="blog-goruntule.html?id=${article.id}">
        <div class="blog-card-img-wrap">
          <img class="blog-card-img"
               src="${article.image}"
               alt="${article.title[lang] || article.title.tr}"
               loading="lazy">
        </div>
      </a>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-tag">${article.category[lang] || article.category.tr}</span>
          <span class="blog-date">${formatDate(article.date, lang)}</span>
        </div>
        <h3>
          <a href="blog-goruntule.html?id=${article.id}">
            ${article.title[lang] || article.title.tr}
          </a>
        </h3>
        <p>${article.excerpt[lang] || article.excerpt.tr}</p>
        <a href="blog-goruntule.html?id=${article.id}" class="read-more">
          ${readMoreText()} <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `;
}

/* ---------- BLOG LİSTE SAYFASI ---------- */
function renderBlogList(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof BLOG_ARTICLES === 'undefined') return;

  const lang = localStorage.getItem('ersa_lang') || 'tr';
  container.innerHTML = BLOG_ARTICLES.map(a => buildCard(a, lang)).join('');
}

/* ---------- BLOG ÖNİZLEME (Anasayfa — İlk 3) ---------- */
function renderBlogPreview(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof BLOG_ARTICLES === 'undefined') return;

  const lang = localStorage.getItem('ersa_lang') || 'tr';
  container.innerHTML = BLOG_ARTICLES.slice(0, 3).map(a => buildCard(a, lang)).join('');
}

/* ---------- BLOG MAKALE GÖRÜNTÜLEME ---------- */
function renderBlogArticle() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  if (!id || typeof BLOG_ARTICLES === 'undefined') return;

  const lang    = localStorage.getItem('ersa_lang') || 'tr';
  const article = BLOG_ARTICLES.find(a => a.id === id);
  if (!article) {
    const el = document.getElementById('articleContent');
    if (el) el.innerHTML = '<p>Makale bulunamadı.</p>';
    return;
  }

  /* Sayfa başlığı & meta */
  document.title = `${article.title[lang] || article.title.tr} — Ersa Mimarlık`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = article.excerpt[lang] || article.excerpt.tr;

  /* Page-header küçük başlık */
  const bc = document.getElementById('articleBreadcrumb');
  if (bc) bc.textContent = article.title[lang] || article.title.tr;

  /* Makale başlığı + meta */
  const headerEl = document.getElementById('articleHeader');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="blog-article-meta">
        <span class="blog-tag">${article.category[lang] || article.category.tr}</span>
        <span class="blog-date">${formatDate(article.date, lang)}</span>
        <span class="blog-date"><i class="fas fa-clock"></i> ${article.readTime[lang] || article.readTime.tr}</span>
      </div>
      <h1>${article.title[lang] || article.title.tr}</h1>
    `;
  }

  /* Kapak görseli */
  const imgEl = document.getElementById('articleImg');
  if (imgEl) { imgEl.src = article.image; imgEl.alt = article.title[lang] || article.title.tr; }

  /* İçerik */
  const contentEl = document.getElementById('articleContent');
  if (contentEl) contentEl.innerHTML = article.content[lang] || article.content.tr;
}

/* ---------- Tarih Biçimlendirme ---------- */
function formatDate(dateStr, lang) {
  const date    = new Date(dateStr);
  const locales = { tr: 'tr-TR', en: 'en-US', ar: 'ar-SA' };
  return date.toLocaleDateString(locales[lang] || 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
}

/* ---------- Dil Değişiminde Yenile ----------
   Lang butonları header'a enjekte edildikten sonra
   components.js'nin initLang() çağrısı bu dinleyicileri ekler.
   Dil değişince blog içeriği de yeniden render edilir. */
function initBlogLangListeners() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        renderBlogList('blogListContainer');
        renderBlogPreview('blogPreviewContainer');
        renderBlogArticle();
      }, 30);
    });
  });
}
