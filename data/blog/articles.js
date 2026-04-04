/* =============================================
   BLOG MAKALELERİ VERİ DOSYASI
   =============================================

   YENİ MAKALE EKLEMEK İÇİN:
   Aşağıdaki BLOG_ARTICLES dizisine yeni bir obje ekleyin.
   Tüm alanları doldurun. content alanına HTML girebilirsiniz.
   Resim için images/placeholders/ klasörüne yeni bir görsel ekleyip
   image alanına yolunu yazın.
   ============================================= */

const BLOG_ARTICLES = [

  /* ---- MAKALE 1 ---- */
  {
    id:       'cam-balkon-sistemleri',
    /* MAKALE GÖRSELİ: Değiştirmek için images/placeholders/ klasörüne görsel ekleyin */
    image:    'images/placeholders/blog-1.svg',
    date:     '2024-03-15',
    readTime: { tr: '6 dk okuma', en: '6 min read', ar: '٦ دقائق قراءة' },
    category: { tr: 'Cam Sistemleri', en: 'Glass Systems', ar: 'أنظمة الزجاج' },

    title: {
      tr: 'Cam Balkon Sistemleri: Avantajlar, Modeller ve Doğru Seçim Rehberi',
      en: 'Glass Balcony Systems: Advantages, Models and the Right Selection Guide',
      ar: 'أنظمة البلكون الزجاجي: المزايا والنماذج ودليل الاختيار الصحيح'
    },

    excerpt: {
      tr: 'Balkonunuzu dört mevsim kullanılabilir bir yaşam alanına dönüştürmek ister misiniz? Cam balkon sistemleri hakkında bilmeniz gereken her şey bu rehberde.',
      en: 'Want to turn your balcony into a living space usable all four seasons? Everything you need to know about glass balcony systems is in this guide.',
      ar: 'هل تريد تحويل شرفتك إلى مساحة معيشة صالحة للاستخدام طوال الفصول الأربعة؟ كل ما تحتاج معرفته عن أنظمة البلكون الزجاجي في هذا الدليل.'
    },

    content: {
      tr: `
        <p>Cam balkon sistemleri, modern konutların vazgeçilmez unsurları arasına girmiştir. Hem estetik görünümü hem de pratik kullanımı ile balkonunuzu dört mevsim konforlu bir yaşam alanına dönüştüren bu sistemler, günümüzde çok farklı model ve özelliklerde sunulmaktadır.</p>

        <h2>Cam Balkon Sistemlerinin Avantajları</h2>
        <p>Cam balkon yaptırmanın pek çok avantajı bulunmaktadır:</p>
        <ul>
          <li><strong>Dört Mevsim Kullanım:</strong> Kış aylarında soğuk ve yağmurdan koruyan cam balkonlar, yazın havalandırma özelliği sayesinde serinliğini korur.</li>
          <li><strong>Isı ve Ses Yalıtımı:</strong> Kaliteli cam balkon sistemleri, evin ısı kaybını azaltır ve dış gürültüyü önemli ölçüde engeller.</li>
          <li><strong>Temizlik Kolaylığı:</strong> Düz cam yüzeyler, toz ve kiri tutmaz ve kolayca temizlenebilir.</li>
          <li><strong>Estetik Görünüm:</strong> Şeffaf cam yapısı sayesinde balkonunuz daha geniş ve aydınlık görünür.</li>
          <li><strong>Değer Artışı:</strong> Cam balkon uygulaması, mülkünüzün değerini artırır.</li>
        </ul>

        <h2>Cam Balkon Türleri</h2>
        <p>Piyasada birkaç farklı cam balkon sistemi bulunmaktadır:</p>

        <h3>1. Isıcam (Çift Cam) Sistemler</h3>
        <p>İki katmanlı camdan oluşan bu sistemler, üstün ısı ve ses yalıtımı sağlar. Soğuk iklimlerde yaşayanlar için ideal seçenektir. Aynı zamanda yoğuşma sorununu da büyük ölçüde giderir.</p>

        <h3>2. Tek Cam Sistemler</h3>
        <p>Daha ekonomik olan tek cam sistemler, ılıman iklimlerde ya da sadece rüzgar ve yağmurdan korunmak isteyen kullanıcılar için uygundur. Bakım ve montaj kolaylığı avantaj sağlar.</p>

        <h3>3. Sürgülü Cam Balkon Sistemleri</h3>
        <p>Sürgülü sistemler, camların tamamen açılabilmesi sayesinde yazın tam açık alan keyfi sunar. Kompakt yapısı nedeniyle az yer kaplar ve modern bir görünüm sağlar.</p>

        <h2>Doğru Cam Balkon Seçimi Nasıl Yapılır?</h2>
        <p>Cam balkon seçiminde dikkat etmeniz gereken birkaç temel kriter vardır:</p>
        <ol>
          <li><strong>Balkon ölçülerinizi alın:</strong> Doğru ölçüm, maliyeti ve zamanı optimize eder.</li>
          <li><strong>İklim koşullarını göz önünde bulundurun:</strong> Soğuk iklimlerde ısıcam tercih edilmelidir.</li>
          <li><strong>Profil kalitesine dikkat edin:</strong> Alüminyum profiller uzun ömürlü ve korozyona dayanıklıdır.</li>
          <li><strong>Uzman firmayla çalışın:</strong> Montaj kalitesi, sistemin ömrünü doğrudan etkiler.</li>
        </ol>

        <blockquote>
          Ersa Mimarlık olarak, her müşterimizin ihtiyacına özel cam balkon çözümleri sunuyoruz. 30 yılı aşkın deneyimimizle güvenilir ve estetik uygulamalar gerçekleştiriyoruz.
        </blockquote>

        <h2>Cam Balkon Bakımı ve Uzun Ömür İpuçları</h2>
        <p>Cam balkonunuzun ömrünü uzatmak için düzenli bakım şarttır. Ayda bir kez cam yüzeylerini yumuşak deterjanla silin, profil kanallarını temizleyin ve hareketli parçalara yılda bir kez yağlama uygulayın. Bu basit adımlar, sisteminizin yıllarca sorunsuz çalışmasını sağlayacaktır.</p>
      `,
      en: `
        <p>Glass balcony systems have become an indispensable element of modern homes. With both their aesthetic appearance and practical use transforming your balcony into a comfortable living space usable all four seasons, these systems are available in many different models and features today.</p>

        <h2>Advantages of Glass Balcony Systems</h2>
        <p>There are many advantages to having a glass balcony installed:</p>
        <ul>
          <li><strong>Year-round Use:</strong> Glass balconies protect against cold and rain in winter while maintaining freshness thanks to ventilation in summer.</li>
          <li><strong>Thermal and Sound Insulation:</strong> Quality glass balcony systems reduce the heat loss of the home and significantly block outside noise.</li>
          <li><strong>Easy Cleaning:</strong> Flat glass surfaces do not hold dust and dirt and can be easily cleaned.</li>
          <li><strong>Aesthetic Appearance:</strong> Thanks to its transparent glass structure, your balcony appears larger and brighter.</li>
          <li><strong>Value Increase:</strong> A glass balcony application increases the value of your property.</li>
        </ul>

        <h2>Types of Glass Balconies</h2>
        <p>There are several different glass balcony systems on the market. Double-glazed systems offer superior thermal and sound insulation. Single-glazed systems are more economical and suitable for mild climates. Sliding systems provide full open-air comfort in summer since the panels can be fully opened.</p>

        <h2>How to Choose the Right Glass Balcony?</h2>
        <p>There are a few key criteria to consider when choosing a glass balcony: measure your balcony dimensions, consider the climate, pay attention to profile quality and work with an expert firm. At Ersa Architecture, we offer custom glass balcony solutions tailored to each client's needs with over 30 years of experience.</p>
      `,
      ar: `
        <p>أصبحت أنظمة البلكون الزجاجي عنصرًا لا غنى عنه في المنازل الحديثة. فبمظهرها الجمالي واستخدامها العملي تحوّل شرفتك إلى مساحة معيشة مريحة صالحة للاستخدام طوال الفصول الأربعة.</p>

        <h2>مزايا أنظمة البلكون الزجاجي</h2>
        <ul>
          <li><strong>الاستخدام طوال العام:</strong> توفر حماية من البرد والأمطار شتاءً مع الحفاظ على التهوية صيفًا.</li>
          <li><strong>العزل الحراري والصوتي:</strong> تقلل أنظمة البلكون الزجاجي الجودة من فقدان الحرارة وتحجب الضوضاء الخارجية.</li>
          <li><strong>سهولة التنظيف:</strong> الأسطح الزجاجية الملساء لا تحتجز الغبار ويسهل تنظيفها.</li>
          <li><strong>المظهر الجمالي:</strong> البنية الزجاجية الشفافة تجعل شرفتك تبدو أكبر وأكثر إضاءة.</li>
        </ul>

        <h2>كيفية اختيار البلكون الزجاجي المناسب</h2>
        <p>في إيرسا للعمارة، نقدم حلول بلكون زجاجي مخصصة تلبي احتياجات كل عميل بخبرة تزيد على 30 عامًا. الجودة والثقة والجمال في كل مشروع.</p>
      `
    }
  },

  /* ---- MAKALE 2 ---- */
  {
    id:       'giyotin-cam-sistemi',
    /* MAKALE GÖRSELİ: Değiştirmek için images/placeholders/ klasörüne görsel ekleyin */
    image:    'images/placeholders/blog-2.svg',
    date:     '2024-02-20',
    readTime: { tr: '5 dk okuma', en: '5 min read', ar: '٥ دقائق قراءة' },
    category: { tr: 'Cam Sistemleri', en: 'Glass Systems', ar: 'أنظمة الزجاج' },

    title: {
      tr: 'Giyotin Cam Sistemi Nedir? Özellikleri, Avantajları ve Kullanım Alanları',
      en: 'What Is a Guillotine Glass System? Features, Advantages and Areas of Use',
      ar: 'ما هو نظام الزجاج الجيوتيني؟ خصائصه ومزاياه ومجالات استخدامه'
    },

    excerpt: {
      tr: 'Giyotin cam sistemleri, balkon ve teraskların modern çözümüdür. Dikeyde hareket eden camları ve estetik görünümüyle öne çıkan bu sistem hakkında her şeyi öğrenin.',
      en: 'Guillotine glass systems are the modern solution for balconies and terraces. Learn everything about this system that stands out with its vertically moving panels and aesthetic appearance.',
      ar: 'أنظمة الزجاج الجيوتيني هي الحل الحديث للشرفات والتراسات. تعرف على كل شيء عن هذا النظام المتميز بألواحه المتحركة عموديًا ومظهره الجمالي.'
    },

    content: {
      tr: `
        <p>Giyotin cam sistemi, balkon ve teraskları kapatmak için kullanılan modern bir cam çözümüdür. Adını, camların dikey yönde yukarı-aşağı hareket etmesinden almaktadır; tıpkı giyotin bıçağı gibi. Bu sistem, son yıllarda hem estetik görünümü hem de pratikliği nedeniyle büyük ilgi görmektedir.</p>

        <h2>Giyotin Cam Sisteminin Özellikleri</h2>
        <p>Giyotin cam sistemleri, diğer balkon kapatma sistemlerinden bazı önemli özelliklerle ayrılır:</p>
        <ul>
          <li><strong>Dikey Hareketli Camlar:</strong> Camlar yukarı doğru kayarak üst boşlukta istiflenir. Bu sayede istediğinizde balkonunuzu tamamen açabilirsiniz.</li>
          <li><strong>Çerçevesiz Görünüm:</strong> Özellikle çerçevesiz giyotin cam sistemleri, manzara önünde hiçbir engel bırakmaz.</li>
          <li><strong>Güçlü Cam Kalınlığı:</strong> Genellikle 10-12 mm temperli güvenlik camı kullanılır.</li>
          <li><strong>Hava Sızdırmazlık:</strong> Özel conta ve profil sistemleri sayesinde rüzgar ve yağmura karşı etkili koruma sağlar.</li>
        </ul>

        <h2>Hangi Alanlarda Kullanılır?</h2>
        <p>Giyotin cam sistemleri pek çok farklı alanda kullanım bulmaktadır:</p>
        <ul>
          <li>Konut balkonları ve terasları</li>
          <li>Restoran ve kafe teraskları</li>
          <li>Otel havuz kenarları ve dış alanları</li>
          <li>Alışveriş merkezi dış cepheleri</li>
          <li>Yüzme havuzu çevreleri</li>
        </ul>

        <h2>Giyotin Cam vs. Cam Balkon: Fark Ne?</h2>
        <p>Cam balkon sistemlerinde camlar genellikle yatay kayar ya da katlanır. Giyotin camda ise hareket dikey yöndedir. Bu fark, kullanım alanına ve estetiğe göre tercih yapar. Giyotin cam daha modern ve minimalist görünüm sunarken, cam balkon daha fazla ısı yalıtımı sağlayabilir.</p>

        <blockquote>
          Ersa Mimarlık, Başakşehir ve İstanbul genelinde giyotin cam uygulamalarında uzman kadrosuyla kaliteli ve hızlı hizmet vermektedir.
        </blockquote>

        <h2>Bakım ve Temizlik</h2>
        <p>Giyotin cam sistemlerinin bakımı oldukça kolaydır. Cam yüzeyler için cam temizleyici kullanılması yeterlidir. Profil kanallarının düzenli temizlenmesi ve raylara yapılacak periyodik yağlama, sistemin uzun yıllar sorunsuz çalışmasını sağlayacaktır.</p>

        <p>Projeniz için ücretsiz keşif ve fiyat teklifi almak için bize ulaşabilirsiniz.</p>
      `,
      en: `
        <p>The guillotine glass system is a modern glass solution used for enclosing balconies and terraces. It takes its name from the vertical up-and-down movement of the glass panels — just like a guillotine blade. This system has attracted great interest in recent years due to both its aesthetic appearance and practicality.</p>

        <h2>Features of the Guillotine Glass System</h2>
        <p>Guillotine glass systems stand apart from other balcony enclosure systems in several important ways. The glass panels slide upwards and stack in the upper space, allowing you to fully open your balcony. Frameless systems leave no obstruction in front of the view. Typically 10-12 mm tempered safety glass is used, and special gaskets and profiles provide effective protection against wind and rain.</p>

        <h2>Guillotine Glass vs. Glass Balcony: What's the Difference?</h2>
        <p>In glass balcony systems, panels typically slide horizontally or fold. In a guillotine system, movement is vertical. Guillotine glass offers a more modern and minimalist appearance while a glass balcony may provide more thermal insulation. The choice depends on the use case and aesthetic preference.</p>

        <p>Contact Ersa Architecture for a free inspection and price quote for your project.</p>
      `,
      ar: `
        <p>نظام الزجاج الجيوتيني هو حل زجاجي حديث يُستخدم لإغلاق الشرفات والتراسات. يأخذ اسمه من حركة الألواح الزجاجية عموديًا لأعلى ولأسفل - تمامًا مثل نصل المقصلة.</p>

        <h2>خصائص نظام الزجاج الجيوتيني</h2>
        <ul>
          <li><strong>ألواح متحركة عموديًا:</strong> تنزلق الألواح للأعلى وتتراص في الفراغ العلوي، مما يتيح فتح الشرفة بالكامل.</li>
          <li><strong>مظهر بلا إطار:</strong> الأنظمة بلا إطار لا تترك أي عائق أمام المنظر.</li>
          <li><strong>زجاج أمان مقسّى:</strong> يُستخدم عادةً زجاج مقسّى بسماكة 10-12 ملم.</li>
          <li><strong>حماية من الرياح والأمطار:</strong> حشيات ملفات خاصة توفر حماية فعالة.</li>
        </ul>

        <p>تواصل مع إيرسا للعمارة للحصول على معاينة مجانية وعرض سعر لمشروعك.</p>
      `
    }
  },

  /* ---- MAKALE 3 ---- */
  {
    id:       'mimari-proje-surecler',
    /* MAKALE GÖRSELİ: Değiştirmek için images/placeholders/ klasörüne görsel ekleyin */
    image:    'images/placeholders/blog-3.svg',
    date:     '2024-01-10',
    readTime: { tr: '7 dk okuma', en: '7 min read', ar: '٧ دقائق قراءة' },
    category: { tr: 'Mimari', en: 'Architecture', ar: 'عمارة' },

    title: {
      tr: 'Mimari Proje Aşamaları: Fikir Aşamasından Ruhsata Kapsamlı Rehber',
      en: 'Architectural Project Phases: A Comprehensive Guide from Concept to Building Permit',
      ar: 'مراحل المشروع المعماري: دليل شامل من الفكرة إلى الترخيص'
    },

    excerpt: {
      tr: 'Bir yapı inşa ettirmek istiyorsunuz ama süreç hakkında hiçbir fikriniz yok mu? Mimari proje aşamalarından ruhsat sürecine kadar bilmeniz gerekenleri anlattık.',
      en: 'Want to have a building constructed but have no idea about the process? We explain everything you need to know from architectural project phases to the permit process.',
      ar: 'هل تريد بناء مبنى لكن ليس لديك أي فكرة عن العملية؟ شرحنا كل ما تحتاج معرفته من مراحل المشروع المعماري إلى عملية الترخيص.'
    },

    content: {
      tr: `
        <p>Bir yapı inşa ettirmek, milyonlarca liralık bir yatırım demektir. Bu sürecin en önemli aşamalarından biri de mimari projedir. Doğru yapılmış bir mimari proje; ruhsat sürecini hızlandırır, maliyetleri optimize eder ve hayalinizdeki yapıyı gerçeğe dönüştürür.</p>

        <h2>1. Ön Fizibilite ve Arazi Analizi</h2>
        <p>Her şey, inşaat yapılacak arsanın analizi ile başlar. Mimarınız şu konuları değerlendirir:</p>
        <ul>
          <li>İmar durumu ve yapı koşulları</li>
          <li>TAKS ve KAKS değerleri</li>
          <li>Komşu yapılar ve manzara yönü</li>
          <li>Zemin özellikleri (sondaj raporu gerekebilir)</li>
          <li>Erişim yolları ve altyapı</li>
        </ul>

        <h2>2. Ön Proje (Konsept Tasarım)</h2>
        <p>Arazi analizi tamamlandıktan sonra mimarınız, ihtiyaçlarınızı dinleyerek bir konsept tasarım hazırlar. Bu aşamada genellikle birkaç farklı alternatif sunulur. Kat planları, görünüşler ve basit kesitler hazırlanır. Günümüzde 3D modelleme programları sayesinde yapının gerçekçi görselleri oluşturulabilmektedir.</p>

        <h2>3. Kesin Proje</h2>
        <p>Onaylanan konsept tasarım, detaylandırılarak kesin projeye dönüştürülür. Bu aşamada:</p>
        <ul>
          <li>Tüm kat planları ölçekli olarak çizilir</li>
          <li>Cephe görünüşleri hazırlanır</li>
          <li>Kesitler ve detaylar tamamlanır</li>
          <li>Statik, mekanik ve elektrik projeleri için zemin hazırlanır</li>
        </ul>

        <h2>4. Ruhsat Projesi ve İzin Süreci</h2>
        <p>Türkiye'de inşaat ruhsatı almak için belediyeye veya ilgili idareye başvurulması gerekmektedir. Ruhsat başvurusunda sunulması gereken belgeler şunlardır:</p>
        <ol>
          <li>Mimari proje (bilgisayar ortamında hazırlanmış)</li>
          <li>Statik proje</li>
          <li>Zemin etüdü raporu</li>
          <li>Mekanik tesisat projesi</li>
          <li>Elektrik tesisat projesi</li>
          <li>İskan belgesi (eski yapılar için)</li>
          <li>Tapu fotokopisi ve vekaletname (gerekirse)</li>
        </ol>

        <blockquote>
          Ersa Mimarlık olarak, ruhsat süreçlerini başından sonuna kadar takip ediyor; müşterilerimizin zaman ve enerji harcamaması için gerekli tüm koordinasyonu sağlıyoruz.
        </blockquote>

        <h2>5. Uygulama Projesi</h2>
        <p>İnşaat aşamasında kullanılacak uygulama projeleri, ruhsat projesinden daha detaylıdır. Yüklenici firma bu projelere göre çalışır. Ersa Mimarlık, uygulama projesinin inşaatta bire bir hayata geçirilmesini kontrol eder.</p>

        <h2>Doğru Mimarı Seçmenin Önemi</h2>
        <p>Mimari proje; sadece çizim değil, bir mühendislik ve sanat eseridir. Deneyimli bir mimarla çalışmak, uzun vadede hem zaman hem de para tasarrufu sağlar. Ersa Mimarlık, 30 yılı aşkın sektör tecrübesiyle İstanbul ve çevresinde güvenilir mimari hizmetler sunmaktadır. İletişime geçin, projeniz için ücretsiz ön görüşme yapalım.</p>
      `,
      en: `
        <p>Constructing a building is a multi-million investment. One of the most important stages of this process is the architectural project. A correctly prepared architectural project accelerates the permit process, optimises costs and brings your dream structure to life.</p>

        <h2>1. Pre-Feasibility and Site Analysis</h2>
        <p>Everything begins with an analysis of the construction site. Your architect evaluates zoning status, floor area ratios, neighbouring buildings, soil characteristics, access roads and infrastructure.</p>

        <h2>2. Concept Design</h2>
        <p>After the site analysis, your architect listens to your needs and prepares a concept design. Typically a few alternatives are presented. With today's 3D modelling software, realistic visuals of the building can be created.</p>

        <h2>3. Building Permit Project and Process</h2>
        <p>In Turkey, an application must be submitted to the municipality to obtain a building permit. The required documents include the architectural project, structural project, soil survey report, mechanical and electrical installation projects.</p>

        <blockquote>
          At Ersa Architecture, we follow permit processes from start to finish, coordinating everything so our clients don't need to spend time and energy on it.
        </blockquote>

        <p>Contact Ersa Architecture for a free initial consultation for your project.</p>
      `,
      ar: `
        <p>بناء مبنى يمثل استثمارًا بملايين الليرات. أحد أهم مراحل هذه العملية هو المشروع المعماري. المشروع المعماري المُعدّ بشكل صحيح يُسرّع عملية الترخيص ويُحسّن التكاليف ويُجسّد المبنى الذي تحلم به.</p>

        <h2>١. تحليل الموقع والجدوى المبدئية</h2>
        <p>يبدأ كل شيء بتحليل الأرض المراد البناء عليها. يُقيّم المهندس المعماري وضع التخطيط، ونسب البناء، والمباني المجاورة، وخصائص التربة، والطرق وشبكات البنية التحتية.</p>

        <h2>٢. مراحل المشروع المعماري</h2>
        <p>تشمل المراحل: التصميم المفاهيمي، المشروع النهائي، مشروع الترخيص، ومشروع التطبيق. في إيرسا للعمارة نتابع عمليات الترخيص من البداية إلى النهاية لتوفير وقت وجهد عملائنا.</p>

        <p>تواصل مع إيرسا للعمارة للحصول على مشاورة أولية مجانية لمشروعك.</p>
      `
    }
  },

  /* ---- MAKALE 4 ---- */
  {
    id:       'aluminyum-dograma-rehberi',
    /* MAKALE GÖRSELİ: Değiştirmek için images/placeholders/ klasörüne görsel ekleyin */
    image:    'images/placeholders/blog-4.svg',
    date:     '2023-12-05',
    readTime: { tr: '5 dk okuma', en: '5 min read', ar: '٥ دقائق قراءة' },
    category: { tr: 'Doğrama Sistemleri', en: 'Joinery Systems', ar: 'أنظمة النجارة' },

    title: {
      tr: 'Alüminyum Doğrama Seçerken Dikkat Edilmesi Gereken 7 Önemli Nokta',
      en: '7 Important Points to Consider When Choosing Aluminium Joinery',
      ar: '٧ نقاط مهمة يجب مراعاتها عند اختيار نجارة الألومنيوم'
    },

    excerpt: {
      tr: 'Alüminyum doğrama seçimi, evinizin enerji verimliliğini ve konforunu doğrudan etkiler. Doğru seçim için bilmeniz gereken 7 kritik faktörü derledik.',
      en: 'The choice of aluminium joinery directly affects the energy efficiency and comfort of your home. We have compiled the 7 critical factors you need to know for the right choice.',
      ar: 'اختيار نجارة الألومنيوم يؤثر مباشرة على كفاءة الطاقة وراحة منزلك. جمعنا ٧ عوامل حاسمة تحتاج معرفتها لاتخاذ الاختيار الصحيح.'
    },

    content: {
      tr: `
        <p>Alüminyum doğrama, modern yapıların kapı ve pencere sistemlerinde en çok tercih edilen malzemelerden biridir. Uzun ömürlü, bakımsız ve estetik yapısıyla PVC'ye güçlü bir alternatif sunan alüminyum, doğru seçildiğinde onlarca yıl sorunsuz hizmet verir. Peki doğru alüminyum doğramayı nasıl seçersiniz?</p>

        <h2>1. Isı Yalıtım Değerini Kontrol Edin (U-Değeri)</h2>
        <p>Kapı ve pencerelerin ısı yalıtımı, "U-değeri" ile ölçülür. Bu değer ne kadar düşükse ısı yalıtımı o kadar iyidir. Isı köprülü (termal break) alüminyum sistemler, özellikle soğuk iklimlerde tercih edilmelidir. Isı köprüsüz sistemlere göre çok daha iyi yalıtım sağlarlar.</p>

        <h2>2. Cam Seçimine Önem Verin</h2>
        <p>Doğrama kadar önemli olan cam seçimidir. Isıcam (çift cam) minimum standart olmalıdır. Üçlü cam sistemler daha yüksek enerji tasarrufu sağlar. Low-E kaplı camlar, ısı geçişini minimize ederek enerji faturanızı düşürür.</p>

        <h2>3. Profil Kalınlığı ve Kalitesi</h2>
        <p>Profil et kalınlığı, sistemin dayanıklılığını doğrudan etkiler. Kaliteli alüminyum profiller EN 755 standardına uygun olmalıdır. Profil yüzeyindeki kaplama (anodizasyon veya toz boya) da uzun ömür için kritiktir.</p>

        <h2>4. Conta ve Sızdırmazlık Sistemi</h2>
        <p>Hava ve su sızdırmazlığı için kaliteli EPDM contalar şarttır. Çok noktalı kilit mekanizmaları, hem güvenlik hem de sızdırmazlık açısından avantaj sağlar.</p>

        <h2>5. Menteşe ve Donanım Kalitesi</h2>
        <p>Alüminyum doğramada kullanılan tüm donanımlar (menteşe, kol, kilit) paslanmaz çelik veya yüksek kaliteli alaşımdan üretilmiş olmalıdır. Düşük kaliteli donanım, kısa sürede arıza verir ve bakım maliyetini artırır.</p>

        <h2>6. Ses Yalıtımı</h2>
        <p>Şehir merkezlerinde ya da yoğun trafik olan bölgelerde ses yalıtımı kritik önem taşır. Akustik özellikli camlar ve iyi sızdırmazlık sistemleri, dış gürültüyü 40 dB'e kadar azaltabilir.</p>

        <h2>7. Garanti ve Servis</h2>
        <p>Kaliteli bir alüminyum doğrama firması, ürünleri için en az 5-10 yıl garanti sunmalıdır. Montaj sonrası servis desteği de çok önemlidir. Ersa Mimarlık, tüm alüminyum doğrama uygulamalarında kapsamlı garanti ve satış sonrası hizmet sunmaktadır.</p>

        <blockquote>
          Enerji verimli, uzun ömürlü ve estetik alüminyum doğrama için Ersa Mimarlık'ı tercih edin. Ücretsiz keşif ve danışmanlık hizmetimizden yararlanın.
        </blockquote>
      `,
      en: `
        <p>Aluminium joinery is one of the most preferred materials for door and window systems in modern buildings. When chosen correctly, it provides decades of trouble-free service.</p>

        <h2>Key Selection Criteria</h2>
        <ol>
          <li><strong>Thermal Insulation (U-value):</strong> The lower the U-value, the better the insulation. Thermal break systems are recommended for cold climates.</li>
          <li><strong>Glass Selection:</strong> Double glazing should be the minimum standard. Low-E coated glass minimises heat transfer.</li>
          <li><strong>Profile Thickness and Quality:</strong> Should conform to EN 755 standard. Anodisation or powder coating extends service life.</li>
          <li><strong>Sealing System:</strong> Quality EPDM gaskets and multi-point locking mechanisms ensure air and water tightness.</li>
          <li><strong>Hardware Quality:</strong> All hardware should be made of stainless steel or high-quality alloys.</li>
          <li><strong>Sound Insulation:</strong> Acoustic glass can reduce external noise by up to 40 dB.</li>
          <li><strong>Warranty and Service:</strong> A quality firm should offer at least 5-10 years warranty.</li>
        </ol>

        <p>Choose Ersa Architecture for energy-efficient, long-lasting and aesthetic aluminium joinery.</p>
      `,
      ar: `
        <p>نجارة الألومنيوم هي أحد أكثر المواد استخدامًا في أنظمة الأبواب والنوافذ في المباني الحديثة. عند اختيارها بشكل صحيح تقدم خدمة دون متاعب لعقود.</p>

        <h2>معايير الاختيار الرئيسية</h2>
        <ol>
          <li><strong>العزل الحراري (قيمة U):</strong> كلما انخفضت القيمة U كلما كان العزل أفضل. أنظمة الكسر الحراري موصى بها للمناخات الباردة.</li>
          <li><strong>اختيار الزجاج:</strong> الزجاج المزدوج يجب أن يكون الحد الأدنى. الزجاج المطلي Low-E يقلل انتقال الحرارة.</li>
          <li><strong>جودة الحشوات:</strong> حشيات EPDM الجيدة وآليات القفل متعددة النقاط تضمن إحكام الغلق ضد الهواء والماء.</li>
          <li><strong>الضمان والخدمة:</strong> الشركة الجيدة يجب أن تقدم ضمانًا لا يقل عن 5-10 سنوات.</li>
        </ol>

        <p>اختر إيرسا للعمارة لنجارة ألومنيوم موفرة للطاقة وطويلة الأمد وجميلة.</p>
      `
    }
  }

  /* ---- YENİ MAKALE EKLEMEK İÇİN BURAYA VİRGÜL KOYUP YENİ OBJEYİ EKLEYİN ---- */

];
