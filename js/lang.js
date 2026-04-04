/* =============================================
   DİL YÖNETİMİ — Türkçe / İngilizce / Arapça
   Yeni çeviriler için ilgili dil nesnesine
   aynı key ile çeviriyi ekleyin.
   ============================================= */

const LANG = {

  /* ---- TÜRKÇE ---- */
  tr: {
    dir: 'ltr',
    lang: 'tr',

    /* Navigasyon */
    nav_home:     'Ana Sayfa',
    nav_about:    'Hakkımızda',
    nav_services: 'Hizmetler',
    nav_blog:     'Blog',
    nav_contact:  'İletişim',

    /* Footer */
    footer_desc:   'Ersa Mimarlık; tasarımdan uygulamaya tüm mimari süreçleri tek elden, güvenilir ve kaliteli biçimde yürütmektedir.',
    footer_links:  'Hızlı Bağlantılar',
    footer_contact:'İletişim',
    footer_rights: '© 2024 Ersa Mimarlık. Tüm hakları saklıdır.',

    /* Ana Sayfa - Hero */
    hero1_label:   'Ersa Mimarlık',
    hero1_title:   'Tasarımdan Uygulamaya Tek Elden Mimarlık',
    hero1_slogan:  'Tasarımdan uygulamaya tüm süreçleri tek elden yönetiyoruz.',
    hero2_label:   'Uygulama Hizmetleri',
    hero2_title:   'Cam, Alüminyum ve Cephe Sistemlerinde Uzman Kadro',
    hero2_slogan:  'Giyotin cam, cam balkon, alüminyum doğrama ve cam cephe sistemlerinde profesyonel çözümler.',
    hero3_label:   'Mimari Projeler',
    hero3_title:   'Hayal Ettiğiniz Yapıyı Birlikte İnşa Edelim',
    hero3_slogan:  '3D modelleme, ruhsat projeleri ve mimari danışmanlık hizmetleriyle yanınızdayız.',
    hero4_label:   '30+ Yıl Deneyim',
    hero4_title:   'Baba-Kız Ekibin Güven Veren Hizmet Anlayışı',
    hero4_slogan:  '1990\'lı yıllardan bu yana sektörde köklü bir geçmiş, günümüzde modern mimari çözümler.',
    btn_projects:  'Projelerimiz',
    btn_contact:   'İletişime Geç',
    btn_services:  'Hizmetlerimiz',
    btn_about:     'Hakkımızda',
    btn_all_blog:  'Tüm Yazılar',
    btn_read_more: 'Devamını Oku',

    /* Stats */
    stat1_num: '30+', stat1_lbl: 'Yıl Deneyim',
    stat2_num: '500+', stat2_lbl: 'Tamamlanan Proje',
    stat3_num: '2',    stat3_lbl: 'Uzman Mimar',
    stat4_num: '100%', stat4_lbl: 'Müşteri Memnuniyeti',

    /* Hakkımızda Tanıtım */
    about_title: 'Ersa Mimarlık Hakkında',
    about_lead:  'Baba-kız ekibiyle 30 yılı aşkın deneyim',
    about_p1:    'Ersa Mimarlık, 1990\'lı yıllarda Pimapen ile sektöre başlayan Adem Demir tarafından kurulmuştur. İlk olarak PVC doğrama ile başlayan çalışmalar, zamanla cam, alüminyum ve cephe sistemlerine genişlemiştir.',
    about_p2:    'Bugün firma, baba-kız ekibi olarak yüksek mimar İmren Demir ile birlikte hem uygulama hem de proje hizmetlerini bir arada sunmaktadır.',
    about_badge: 'Yıl\nDeneyim',
    feat1: 'Plan & Proje Çizimi',
    feat2: 'Ruhsat Projeleri',
    feat3: 'Giyotin Cam Sistemleri',
    feat4: 'Cam Balkon',
    feat5: 'Alüminyum Doğrama',
    feat6: '3D Modelleme',

    /* Hizmetler genel bakış */
    services_title:   'Hizmetlerimiz',
    services_desc:    'Mimari tasarımdan uygulamaya her aşamada yanınızdayız.',
    svc1_title: 'Mimari Proje & Tasarım',
    svc1_desc:  'Plan & proje çizimi, ruhsat projeleri, 3D modelleme ve mimari danışmanlık hizmetleri.',
    svc2_title: 'Cam & Alüminyum Sistemleri',
    svc2_desc:  'Giyotin cam, cam balkon, alüminyum doğrama ve modern cam cephe sistemleri uygulamaları.',
    svc3_title: 'Ofis & İç Mekan',
    svc3_desc:  'Ofis bölme sistemleri, kış bahçesi tasarımı ve özel kapı-pencere çözümleri.',

    /* Projeler */
    projects_title: 'Tamamlanan Projelerden',
    projects_desc:  'Gerçekleştirdiğimiz uygulamalardan seçkiler.',
    proj_all:       'Tüm Uygulamaları Gör',

    /* Video */
    video_title: 'Ersa Mimarlık Tanıtım Videosu',
    video_desc:  'Gerçekleştirdiğimiz projeler ve sunduğumuz hizmetler hakkında detaylı bilgi alın.',

    /* Blog */
    blog_title: 'Blog & Makaleler',
    blog_desc:  'Mimarlık, cam sistemleri ve uygulama hizmetleri hakkında faydalı yazılar.',

    /* CTA */
    cta_title: 'Projenizi Birlikte Hayata Geçirelim',
    cta_desc:  'Mimari tasarımdan uygulamaya tek elden hizmet için bizimle iletişime geçin.',

    /* Hakkımızda sayfası */
    about_story_title:   'Firmamızın Hikayesi',
    about_story_p1:      'Ersa Mimarlık, 1990\'lı yıllarda Pimapen ile sektöre başlayan Adem Demir tarafından kurulmuştur. İlk olarak PVC doğrama ile başlayan çalışmalar, zamanla cam, alüminyum ve cephe sistemlerine genişlemiştir.',
    about_story_p2:      'Bugün firma, baba-kız ekibi olarak yüksek mimar İmren Demir ile birlikte hem uygulama hem de proje hizmetlerini bir arada sunmaktadır.',
    about_story_p3:      'Uygulama alanında; giyotin cam, cam balkon, alüminyum doğrama, cam cephe sistemleri, ofis bölmeleri, kapı ve pencere ile kış bahçesi işleri yapılmaktadır.',
    about_story_p4:      'Mimari hizmetler kapsamında; plan, proje ve ruhsat çizimleri ile birlikte 3D modelleme hizmetleri sunulmaktadır.',
    about_story_quote:   'Ersa Mimarlık, projeleri tasarımdan uygulamaya kadar tek elden, düzenli ve güvenilir şekilde hayata geçirir.',
    team_title:          'Ekibimiz',
    team_imren_role:     'Yüksek Mimar',
    team_adem_role:      'Kurucu',
    values_title:        'Değerlerimiz',
    val1_title: 'Güvenilirlik',  val1_desc: '30 yılı aşkın deneyimle sektörde güven inşa ettik.',
    val2_title: 'Kalite',        val2_desc: 'Her projede en yüksek kalite standartlarını uygularız.',
    val3_title: 'Yenilikçilik',  val3_desc: 'Modern mimari çözümler ve güncel teknolojilerle hizmet.',
    val4_title: 'Tek Elden',     val4_desc: 'Tasarımdan uygulamaya tüm süreçleri eksiksiz yönetiriz.',

    /* Hizmetler sayfası */
    services_page_title: 'Hizmetler & Uygulamalar',
    mimari_cat_title: 'Mimari Proje & Tasarım',
    mimari_cat_desc:  'Yüksek mimar İmren Demir öncülüğünde kapsamlı mimari çizim ve danışmanlık hizmetleri.',
    uygulama_cat_title: 'Uygulama Hizmetleri',
    uygulama_cat_desc:  'Cam, alüminyum ve cephe sistemlerinde 30+ yıllık deneyimle profesyonel uygulama.',
    app_gallery_title: 'Uygulama Galerimiz',
    app_gallery_desc:  'Gerçekleştirdiğimiz uygulamalardan fotoğraflar.',

    svc_proje_title: 'Plan & Proje Çizimi',
    svc_proje_desc:  'Konut, ticari ve endüstriyel yapılar için detaylı mimari plan ve proje çizimleri hazırlıyoruz.',
    svc_ruhsat_title: 'Ruhsat Projeleri',
    svc_ruhsat_desc:  'İmar mevzuatına uygun ruhsat projeleri hazırlayarak resmi onay süreçlerini yönetiyoruz.',
    svc_3d_title: '3D Modelleme',
    svc_3d_desc:  'Projenizin gerçekçi üç boyutlu görselleştirmesi ile tasarımı hayata geçirmeden önce deneyimleyin.',
    svc_danismanlik_title: 'Mimari Danışmanlık',
    svc_danismanlik_desc:  'Yapı projenizin her aşamasında uzman mimari danışmanlık ve yönlendirme hizmeti sunuyoruz.',
    svc_giyotin_title: 'Giyotin Cam Sistemleri',
    svc_giyotin_desc:  'Balkon ve teraslarınız için yüksek kaliteli, estetik ve pratik giyotin cam sistemleri uyguluyoruz.',
    svc_cambalkon_title: 'Cam Balkon',
    svc_cambalkon_desc:  'Balkonlarınızı dört mevsim kullanılabilir konforlu yaşam alanlarına dönüştürüyoruz.',
    svc_aluminyum_title: 'Alüminyum Doğrama',
    svc_aluminyum_desc:  'Isı ve ses yalıtımı üstün, uzun ömürlü alüminyum kapı, pencere ve doğrama sistemleri.',
    svc_cephe_title: 'Cam Cephe Sistemleri',
    svc_cephe_desc:  'Modern binaların yüzünü şekillendiren estetik ve fonksiyonel cam cephe uygulamaları.',
    svc_ofis_title: 'Ofis Bölme Sistemleri',
    svc_ofis_desc:  'Kurumsal ofis mekanlarını optimize eden şık ve pratik cam bölme sistemleri.',
    svc_kapipencere_title: 'Kapı & Pencere',
    svc_kapipencere_desc:  'Özel tasarım alüminyum kapı ve pencere sistemleri ile güvenlik ve estetiği bir arada sunuyoruz.',
    svc_kisbahce_title: 'Kış Bahçesi',
    svc_kisbahce_desc:  'Dört mevsim keyifle kullanabileceğiniz, doğal ışık dolu özel kış bahçesi tasarımları.',

    /* Blog sayfası */
    blog_page_title: 'Blog',
    blog_page_desc:  'Mimarlık, cam sistemleri ve uygulama hizmetleri hakkında bilgilendirici makaleler.',

    /* İletişim sayfası */
    contact_title: 'İletişim',
    contact_subtitle: 'Bizimle İletişime Geçin',
    contact_address_lbl: 'Adres',
    contact_address_val: 'Kayabaşı Mah. Adnan Menderes Bulvarı, Kuzey Yakası Ofisleri, A-2 Blok No:46, Başakşehir / İstanbul',
    contact_persons_title: 'Ekibimizle İletişim',
    map_title: 'Bizi Haritada Bulun',
  },

  /* ---- İNGİLİZCE ---- */
  en: {
    dir: 'ltr',
    lang: 'en',
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services', nav_blog: 'Blog', nav_contact: 'Contact',
    footer_desc:   'Ersa Architecture delivers all architectural processes from design to implementation under one roof, reliably and with the highest quality.',
    footer_links:  'Quick Links', footer_contact: 'Contact',
    footer_rights: '© 2024 Ersa Architecture. All rights reserved.',
    hero1_label: 'Ersa Architecture', hero1_title: 'Architecture From Design to Application Under One Roof',
    hero1_slogan: 'We manage all processes from design to implementation under one roof.',
    hero2_label: 'Application Services', hero2_title: 'Expert Team in Glass, Aluminium & Façade Systems',
    hero2_slogan: 'Professional solutions in guillotine glass, glass balcony, aluminium joinery and glass façade systems.',
    hero3_label: 'Architectural Projects', hero3_title: 'Let\'s Build the Structure You Envision Together',
    hero3_slogan: 'We are with you with 3D modelling, building permit projects and architectural consultancy services.',
    hero4_label: '30+ Years Experience', hero4_title: 'Trusted Service by a Father-Daughter Team',
    hero4_slogan: 'A deep-rooted background since the 1990s, delivering modern architectural solutions today.',
    btn_projects: 'Our Projects', btn_contact: 'Contact Us', btn_services: 'Our Services', btn_about: 'About Us', btn_all_blog: 'All Articles', btn_read_more: 'Read More',
    stat1_num:'30+', stat1_lbl:'Years Experience', stat2_num:'500+', stat2_lbl:'Completed Projects', stat3_num:'2', stat3_lbl:'Expert Architects', stat4_num:'100%', stat4_lbl:'Client Satisfaction',
    about_title:'About Ersa Architecture', about_lead:'30+ years of experience as a father-daughter team',
    about_p1:'Ersa Architecture was founded by Adem Demir, who entered the sector in the 1990s with Pimapen. Starting with PVC joinery, the work expanded over time to glass, aluminium and façade systems.',
    about_p2:'Today the firm offers both application and project services together as a father-daughter team with senior architect İmren Demir.',
    about_badge:'Years\nExperience',
    feat1:'Plan & Project Drawing', feat2:'Building Permit Projects', feat3:'Guillotine Glass Systems', feat4:'Glass Balcony', feat5:'Aluminium Joinery', feat6:'3D Modelling',
    services_title:'Our Services', services_desc:'We are with you at every stage from architectural design to implementation.',
    svc1_title:'Architectural Project & Design', svc1_desc:'Plan & project drawing, building permit projects, 3D modelling and architectural consultancy services.',
    svc2_title:'Glass & Aluminium Systems', svc2_desc:'Guillotine glass, glass balcony, aluminium joinery and modern glass façade system applications.',
    svc3_title:'Office & Interior', svc3_desc:'Office partition systems, winter garden design and custom door-window solutions.',
    projects_title:'From Completed Projects', projects_desc:'A selection from our completed applications.', proj_all:'See All Applications',
    video_title:'Ersa Architecture Promotional Video', video_desc:'Learn more about our projects and services.',
    blog_title:'Blog & Articles', blog_desc:'Useful articles about architecture, glass systems and application services.',
    cta_title:'Let\'s Bring Your Project to Life Together', cta_desc:'Contact us for end-to-end service from architectural design to implementation.',
    about_story_title:'Our Story', about_story_p1:'Ersa Architecture was founded by Adem Demir, who entered the sector in the 1990s with Pimapen.',
    about_story_p2:'Today the firm offers both application and project services as a father-daughter team with senior architect İmren Demir.',
    about_story_p3:'Applications include guillotine glass, glass balcony, aluminium joinery, glass façade systems, office partitions, doors & windows and winter gardens.',
    about_story_p4:'Architectural services include plan, project and permit drawings as well as 3D modelling services.',
    about_story_quote:'Ersa Architecture brings projects from design to implementation in an orderly, reliable manner under one roof.',
    team_title:'Our Team', team_imren_role:'Senior Architect', team_adem_role:'Founder',
    values_title:'Our Values',
    val1_title:'Reliability', val1_desc:'We have built trust in the sector for over 30 years.',
    val2_title:'Quality', val2_desc:'We apply the highest quality standards on every project.',
    val3_title:'Innovation', val3_desc:'Serving with modern architectural solutions and current technologies.',
    val4_title:'One Stop', val4_desc:'We manage all processes from design to implementation without gaps.',
    services_page_title:'Services & Applications',
    mimari_cat_title:'Architectural Project & Design', mimari_cat_desc:'Comprehensive architectural drawing and consultancy services led by senior architect İmren Demir.',
    uygulama_cat_title:'Application Services', uygulama_cat_desc:'Professional applications in glass, aluminium and façade systems with 30+ years of experience.',
    app_gallery_title:'Application Gallery', app_gallery_desc:'Photos from our completed applications.',
    svc_proje_title:'Plan & Project Drawing', svc_proje_desc:'Detailed architectural plans and project drawings for residential, commercial and industrial buildings.',
    svc_ruhsat_title:'Building Permit Projects', svc_ruhsat_desc:'We prepare building permit projects in compliance with zoning regulations and manage official approval processes.',
    svc_3d_title:'3D Modelling', svc_3d_desc:'Experience your project with realistic 3D visualisation before it comes to life.',
    svc_danismanlik_title:'Architectural Consultancy', svc_danismanlik_desc:'Expert architectural consultancy and guidance at every stage of your building project.',
    svc_giyotin_title:'Guillotine Glass Systems', svc_giyotin_desc:'High-quality, aesthetic and practical guillotine glass systems for balconies and terraces.',
    svc_cambalkon_title:'Glass Balcony', svc_cambalkon_desc:'We transform your balconies into comfortable living spaces usable all year round.',
    svc_aluminyum_title:'Aluminium Joinery', svc_aluminyum_desc:'Long-lasting aluminium door, window and joinery systems with superior thermal and sound insulation.',
    svc_cephe_title:'Glass Façade Systems', svc_cephe_desc:'Aesthetic and functional glass façade applications shaping the face of modern buildings.',
    svc_ofis_title:'Office Partition Systems', svc_ofis_desc:'Elegant and practical glass partition systems that optimise corporate office spaces.',
    svc_kapipencere_title:'Door & Window', svc_kapipencere_desc:'Custom aluminium door and window systems combining security and aesthetics.',
    svc_kisbahce_title:'Winter Garden', svc_kisbahce_desc:'Special winter garden designs filled with natural light that you can enjoy all four seasons.',
    blog_page_title:'Blog', blog_page_desc:'Informative articles about architecture, glass systems and application services.',
    contact_title:'Contact', contact_subtitle:'Get In Touch With Us',
    contact_address_lbl:'Address', contact_address_val:'Kayabaşı Mah. Adnan Menderes Boulevard, Kuzey Yakası Offices, A-2 Block No:46, Başakşehir / Istanbul',
    contact_persons_title:'Contact Our Team', map_title:'Find Us on the Map',
  },

  /* ---- ARAPÇA ---- */
  ar: {
    dir: 'rtl',
    lang: 'ar',
    nav_home:'الرئيسية', nav_about:'من نحن', nav_services:'الخدمات', nav_blog:'المدونة', nav_contact:'اتصل بنا',
    footer_desc:'إيرسا للعمارة تُقدّم جميع العمليات المعمارية من التصميم إلى التطبيق تحت سقف واحد بشكل موثوق وعالي الجودة.',
    footer_links:'روابط سريعة', footer_contact:'اتصل بنا',
    footer_rights:'© 2024 إيرسا للعمارة. جميع الحقوق محفوظة.',
    hero1_label:'إيرسا للعمارة', hero1_title:'هندسة معمارية من التصميم إلى التطبيق تحت سقف واحد',
    hero1_slogan:'ندير جميع العمليات من التصميم إلى التطبيق تحت سقف واحد.',
    hero2_label:'خدمات التطبيق', hero2_title:'فريق متخصص في أنظمة الزجاج والألومنيوم والواجهات',
    hero2_slogan:'حلول احترافية في أنظمة الزجاج الجيوتيني وبلكون الزجاج والألومنيوم وأنظمة الواجهات الزجاجية.',
    hero3_label:'المشاريع المعمارية', hero3_title:'دعونا نبني معاً المنشأة التي تتخيلها',
    hero3_slogan:'نحن بجانبك مع خدمات النمذجة ثلاثية الأبعاد ومشاريع الترخيص والاستشارات المعمارية.',
    hero4_label:'+30 سنة خبرة', hero4_title:'خدمة موثوقة من فريق الأب والابنة',
    hero4_slogan:'خلفية راسخة منذ التسعينيات مع تقديم حلول معمارية حديثة اليوم.',
    btn_projects:'مشاريعنا', btn_contact:'تواصل معنا', btn_services:'خدماتنا', btn_about:'من نحن', btn_all_blog:'جميع المقالات', btn_read_more:'اقرأ المزيد',
    stat1_num:'+30', stat1_lbl:'سنة خبرة', stat2_num:'+500', stat2_lbl:'مشروع مكتمل', stat3_num:'2', stat3_lbl:'مهندس معماري', stat4_num:'%100', stat4_lbl:'رضا العملاء',
    about_title:'عن إيرسا للعمارة', about_lead:'أكثر من 30 عامًا من الخبرة كفريق أب وابنة',
    about_p1:'تأسست إيرسا للعمارة على يد آدم ديمير الذي دخل القطاع في التسعينيات مع Pimapen. بدأت الأعمال بالنجارة PVC وتوسعت تدريجياً لتشمل أنظمة الزجاج والألومنيوم والواجهات.',
    about_p2:'تقدم الشركة اليوم خدمات التطبيق والمشاريع معاً كفريق من الأب والابنة مع المهندسة المعمارية العليا إيمرين ديمير.',
    about_badge:'سنة\nخبرة',
    feat1:'رسم الخطط والمشاريع', feat2:'مشاريع الترخيص', feat3:'أنظمة الزجاج الجيوتيني', feat4:'بلكون زجاجي', feat5:'نجارة ألومنيوم', feat6:'نمذجة ثلاثية الأبعاد',
    services_title:'خدماتنا', services_desc:'نحن معك في كل مرحلة من التصميم المعماري إلى التطبيق.',
    svc1_title:'المشاريع المعمارية والتصميم', svc1_desc:'رسم الخطط والمشاريع، مشاريع الترخيص، النمذجة ثلاثية الأبعاد وخدمات الاستشارات المعمارية.',
    svc2_title:'أنظمة الزجاج والألومنيوم', svc2_desc:'تطبيقات الزجاج الجيوتيني والبلكون الزجاجي والألومنيوم وأنظمة الواجهات الزجاجية الحديثة.',
    svc3_title:'المكاتب والداخلية', svc3_desc:'أنظمة تقسيم المكاتب وتصميم الحديقة الشتوية وحلول الأبواب والنوافذ المخصصة.',
    projects_title:'من المشاريع المنجزة', projects_desc:'مختارات من تطبيقاتنا المنجزة.', proj_all:'عرض جميع التطبيقات',
    video_title:'فيديو تعريفي لإيرسا للعمارة', video_desc:'تعرف على مشاريعنا وخدماتنا بشكل مفصّل.',
    blog_title:'المدونة والمقالات', blog_desc:'مقالات مفيدة حول العمارة وأنظمة الزجاج وخدمات التطبيق.',
    cta_title:'لنُحيي مشروعك معاً', cta_desc:'تواصل معنا للحصول على خدمة متكاملة من التصميم المعماري إلى التطبيق.',
    about_story_title:'قصة شركتنا', about_story_p1:'تأسست إيرسا للعمارة على يد آدم ديمير الذي دخل القطاع في التسعينيات مع Pimapen.',
    about_story_p2:'تقدم الشركة اليوم خدمات التطبيق والمشاريع معاً كفريق من الأب والابنة مع المهندسة المعمارية العليا إيمرين ديمير.',
    about_story_p3:'تشمل التطبيقات: الزجاج الجيوتيني، البلكون الزجاجي، نجارة الألومنيوم، أنظمة الواجهات الزجاجية، تقسيمات المكاتب، الأبواب والنوافذ والحدائق الشتوية.',
    about_story_p4:'تشمل الخدمات المعمارية: رسم الخطط ومشاريع الترخيص والنمذجة ثلاثية الأبعاد.',
    about_story_quote:'تُنجز إيرسا للعمارة المشاريع من التصميم إلى التطبيق تحت سقف واحد بشكل منظم وموثوق.',
    team_title:'فريقنا', team_imren_role:'مهندسة معمارية عليا', team_adem_role:'المؤسس',
    values_title:'قيمنا',
    val1_title:'الموثوقية', val1_desc:'بنينا الثقة في القطاع على مدى أكثر من 30 عامًا.',
    val2_title:'الجودة', val2_desc:'نطبق أعلى معايير الجودة في كل مشروع.',
    val3_title:'الابتكار', val3_desc:'نخدم بحلول معمارية حديثة وتقنيات راهنة.',
    val4_title:'تحت سقف واحد', val4_desc:'ندير جميع العمليات من التصميم إلى التطبيق دون ثغرات.',
    services_page_title:'الخدمات والتطبيقات',
    mimari_cat_title:'المشاريع المعمارية والتصميم', mimari_cat_desc:'خدمات رسم وإستشارات معمارية شاملة بقيادة المهندسة المعمارية العليا إيمرين ديمير.',
    uygulama_cat_title:'خدمات التطبيق', uygulama_cat_desc:'تطبيقات احترافية في الزجاج والألومنيوم وأنظمة الواجهات بخبرة تزيد على 30 عامًا.',
    app_gallery_title:'معرض التطبيقات', app_gallery_desc:'صور من تطبيقاتنا المنجزة.',
    svc_proje_title:'رسم الخطط والمشاريع', svc_proje_desc:'خطط معمارية مفصلة ورسومات مشاريع للمباني السكنية والتجارية والصناعية.',
    svc_ruhsat_title:'مشاريع الترخيص', svc_ruhsat_desc:'نُعدّ مشاريع الترخيص وفق لوائح التخطيط العمراني وندير عمليات الموافقة الرسمية.',
    svc_3d_title:'النمذجة ثلاثية الأبعاد', svc_3d_desc:'جرّب مشروعك برؤية واقعية ثلاثية الأبعاد قبل التنفيذ.',
    svc_danismanlik_title:'الاستشارات المعمارية', svc_danismanlik_desc:'استشارات وتوجيهات معمارية متخصصة في كل مرحلة من مشروعك الإنشائي.',
    svc_giyotin_title:'أنظمة الزجاج الجيوتيني', svc_giyotin_desc:'أنظمة زجاج جيوتيني عالية الجودة وجمالية وعملية للشرفات والتراسات.',
    svc_cambalkon_title:'الشرفة الزجاجية', svc_cambalkon_desc:'نحوّل شرفاتك إلى مساحات معيشة مريحة قابلة للاستخدام طوال العام.',
    svc_aluminyum_title:'نجارة الألومنيوم', svc_aluminyum_desc:'أنظمة أبواب ونوافذ ونجارة ألومنيوم طويلة الأمد بعزل حراري وصوتي متميز.',
    svc_cephe_title:'أنظمة الواجهات الزجاجية', svc_cephe_desc:'تطبيقات واجهات زجاجية جمالية ووظيفية تُشكّل وجه المباني الحديثة.',
    svc_ofis_title:'أنظمة تقسيم المكاتب', svc_ofis_desc:'أنظمة تقسيم زجاجية أنيقة وعملية تُحسّن مساحات المكاتب المؤسسية.',
    svc_kapipencere_title:'الأبواب والنوافذ', svc_kapipencere_desc:'أنظمة أبواب ونوافذ ألومنيوم مخصصة تجمع بين الأمان والجماليات.',
    svc_kisbahce_title:'الحديقة الشتوية', svc_kisbahce_desc:'تصاميم حدائق شتوية خاصة مليئة بالضوء الطبيعي يمكن الاستمتاع بها طوال الفصول الأربعة.',
    blog_page_title:'المدونة', blog_page_desc:'مقالات إرشادية حول العمارة وأنظمة الزجاج وخدمات التطبيق.',
    contact_title:'اتصل بنا', contact_subtitle:'تواصل معنا',
    contact_address_lbl:'العنوان', contact_address_val:'حي قايه باشي، شارع عدنان مندريس، مكاتب الضفة الشمالية، بلوك A-2 رقم 46، باشاك شهير / إسطنبول',
    contact_persons_title:'تواصل مع فريقنا', map_title:'ابحث عنا على الخريطة',
  }
};

/* ---------- Dil Uygulama Motoru ---------- */
let currentLang = localStorage.getItem('ersa_lang') || 'tr';

function applyLang(lang) {
  const t = LANG[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('ersa_lang', lang);

  /* Yön (RTL/LTR) */
  document.documentElement.lang = t.lang;
  document.body.dir = t.dir;

  /* data-i18n attr ile çeviri */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  /* Aktif dil butonu */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  applyLang(currentLang);
  /* Tüm dil butonlarına (header + mobile menu) event listener ekle */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* initLang her sayfanın inline script'inde initComponents'dan sonra çağrılır */
