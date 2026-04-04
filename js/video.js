/* =============================================
   YOUTUBE VİDEO — Ekranda Görününce Oynat,
   Kaydırınca Durdur (Intersection Observer)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('ytWrapper');
  if (!wrapper) return;

  /* YouTube URL: ?enablejsapi=1&autoplay=1&mute=1 eklendi */
  /* VIDEO LİNKİ: Aşağıdaki videoId'yi değiştirerek farklı video kullanabilirsiniz */
  const videoId  = 'ltX3qzFeJb0';
  const baseSrc  = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&rel=0&modestbranding=1`;

  let iframe = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* İframe yoksa oluştur (lazy load) */
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.src          = baseSrc;
          iframe.title        = 'Ersa Mimarlık Tanıtım Videosu';
          iframe.allow        = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
          iframe.allowFullscreen = true;
          wrapper.appendChild(iframe);
        } else {
          /* Zaten varsa, YouTube API ile oynat */
          try {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
              '*'
            );
          } catch (e) { /* Güvenli başarısız */ }
        }
      } else {
        /* Görünümden çıkınca durdur */
        if (iframe) {
          try {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
              '*'
            );
          } catch (e) { /* Güvenli başarısız */ }
        }
      }
    });
  }, { threshold: 0.4 });

  observer.observe(wrapper);
});
