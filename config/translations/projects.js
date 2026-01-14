/**
 * Projects Page Translations
 */

export const projects = {
  // Page header section
  header: {
    title: { en: 'Proven Project Experience', ar: 'خبرة مشاريع مثبتة' },
    descriptionPart1: {
      en: 'KASCOOM has successfully supported and delivered projects across Saudi Arabia in the Oil & Gas, petrochemical, and industrial sectors. The company is an approved',
      ar: 'نجحت شركة كاسكوم في دعم وتنفيذ مشاريع في جميع أنحاء المملكة العربية السعودية في قطاعات النفط والغاز والبتروكيماويات والصناعة. الشركة مورد معتمد من'
    },
    descriptionPart2: {
      en: 'vendor (Vendor Code: 10059107), with proven experience on major Aramco and industrial projects, delivering work in line with strict quality and safety requirements.',
      ar: '(كود المورد: 10059107)، مع خبرة مثبتة في مشاريع أرامكو والمشاريع الصناعية الكبرى، وتقديم العمل وفقًا لمتطلبات الجودة والسلامة الصارمة.'
    }
  },

  // Categories for project grid
  categories: {
    civil: { en: 'Civil & Infrastructure Works', ar: 'أعمال البناء والبنية التحتية' },
    mechanical: { en: 'Mechanical', ar: 'ميكانيكي' },
    oilGas: { en: 'Oil & Gas', ar: 'النفط والغاز' },
    manpower: { en: 'Manpower', ar: 'القوى العاملة' }
  },

  // Featured projects for homepage "Our Works" section
  items: [
    {
      id: 'featured-1',
      title: { en: 'VCPD – Voltage Conversion Program Division', ar: 'برنامج تحويل الجهد الكهربائي' },
      company: { en: 'Almeer Saudi Technical Services Company', ar: 'شركة المير السعودية للخدمات التقنية' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      location: { en: 'Dhahran', ar: 'الظهران' },
      image: '/images/projects/vcpd.png',
      featured: true,
      scope: [
        { en: 'Voltage conversion works', ar: 'أعمال تحويل الجهد' },
        { en: 'Electrical system upgrades', ar: 'ترقية الأنظمة الكهربائية' },
        { en: 'Power distribution coordination', ar: 'تنسيق توزيع الطاقة' },
        { en: 'Aramco standards compliance', ar: 'الامتثال لمعايير أرامكو' }
      ]
    },
    {
      id: 'featured-2',
      title: { en: 'Jeddah Central Development Stadium', ar: 'استاد التطوير المركزي بجدة' },
      company: { en: 'CRCC (China Railway Construction Corporation Limited)', ar: 'شركة السكك الحديدية الصينية للإنشاءات المحدودة' },
      client: { en: 'JCDC', ar: 'شركة جدة للتطوير المركزي' },
      location: { en: 'Jeddah', ar: 'جدة' },
      image: '/images/projects/jeddah-stadium.png',
      featured: true,
      scope: [
        { en: 'Stadium civil & structural works', ar: 'الأعمال المدنية والإنشائية للاستاد' },
        { en: 'Large-scale infrastructure support', ar: 'دعم البنية التحتية الضخمة' },
        { en: 'Construction coordination activities', ar: 'أنشطة تنسيق البناء' },
        { en: 'Quality & safety compliance', ar: 'الامتثال للجودة والسلامة' }
      ]
    },
    {
      id: 'featured-3',
      title: { en: 'Basmat Jeddah Garden', ar: 'حديقة بصمة جدة' },
      company: { en: 'Rabya General Contractor', ar: 'مقاولات ربيع العامة' },
      client: { en: 'AECOM', ar: 'إيكوم' },
      location: { en: 'Jeddah', ar: 'جدة' },
      image: '/images/projects/basmat-jeddah.png',
      featured: true,
      scope: [
        { en: 'Landscaping & urban development', ar: 'تنسيق الحدائق والتطوير الحضري' },
        { en: 'Civil and architectural works', ar: 'الأعمال المدنية والمعمارية' },
        { en: 'Public space enhancement', ar: 'تحسين المساحات العامة' },
        { en: 'Design coordination support', ar: 'دعم تنسيق التصميم' }
      ]
    },
    {
      id: 'featured-4',
      title: { en: 'USF – Upgrade Security Facilities (Dhahran & Northern Areas)', ar: 'ترقية المرافق الأمنية (الظهران والمناطق الشمالية)' },
      company: { en: 'CRCC (China Railway Construction Corporation Limited)', ar: 'شركة السكك الحديدية الصينية للإنشاءات المحدودة' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      location: { en: 'Ras Tanura', ar: 'رأس تنورة' },
      image: '/images/projects/usf-security.png',
      featured: true,
      scope: [
        { en: 'Security facilities upgrade works', ar: 'أعمال ترقية المرافق الأمنية' },
        { en: 'Infrastructure modernization', ar: 'تحديث البنية التحتية' },
        { en: 'Multi-location project execution', ar: 'تنفيذ مشاريع متعددة المواقع' },
        { en: 'High-security standards compliance', ar: 'الامتثال لمعايير الأمان العالية' }
      ]
    }
  ],

  // Civil Projects
  civil: [
    {
      id: 1,
      title: { en: 'KAUST – General Construction Services', ar: 'كاوست – خدمات البناء العامة' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'BAYTUR', ar: 'بايتور' },
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/civil-cards/kaust.png',
      scope: [
        { en: 'Aramco-approved Civil, Electrical & Mechanical Supervisors', ar: 'مشرفون معتمدون من أرامكو في المجالات المدنية والكهربائية والميكانيكية' },
        { en: 'Site supervision and inspection', ar: 'الإشراف والتفتيش الميداني' },
        { en: 'Quality & safety compliance', ar: 'الامتثال للجودة والسلامة' }
      ]
    },
    {
      id: 2,
      title: { en: 'National Guard Family Compound (NGFC)', ar: 'مجمع عائلات الحرس الوطني' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'Azmeel Contracting', ar: 'أزميل للمقاولات' },
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/civil-cards/ngfc.png',
      scope: [
        { en: 'Civil, Electrical & Mechanical supervision', ar: 'الإشراف المدني والكهربائي والميكانيكي' },
        { en: 'Engineers, Inspectors & HSE officers', ar: 'مهندسون ومفتشون ومسؤولو الصحة والسلامة' },
        { en: 'Residential infrastructure development', ar: 'تطوير البنية التحتية السكنية' }
      ]
    },
    {
      id: 3,
      title: { en: 'Jizan Integrated Gasification (IGCC)', ar: 'محطة جازان للتحويل الغازي المتكامل' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'China Harbour Engineering (CHEC)', ar: 'شركة الصين لهندسة الموانئ' },
      location: { en: 'Jizan, KSA', ar: 'جازان، المملكة العربية السعودية' },
      image: '/images/civil-cards/jizan-igcc.png',
      scope: [
        { en: 'Civil Inspectors & QC Manager supply', ar: 'توفير مفتشين مدنيين ومدير ضمان الجودة' },
        { en: 'Quality assurance services', ar: 'خدمات ضمان الجودة' },
        { en: 'Support for mega infrastructure project', ar: 'دعم مشروع البنية التحتية الضخم' }
      ]
    },
    {
      id: 4,
      title: { en: 'Dhahran Residential Community Expansion', ar: 'توسعة المجمع السكني بالظهران' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'Emirates Falcon Electromechanical (EFECO)', ar: 'إيفيكو الكهروميكانيكية' },
      location: { en: 'Dhahran, KSA', ar: 'الظهران، المملكة العربية السعودية' },
      image: '/images/civil-cards/dhahran-expansion.png',
      scope: [
        { en: 'Electrical & plumbing inspection', ar: 'فحص الكهرباء والسباكة' },
        { en: 'Residential villas supervision', ar: 'الإشراف على الفلل السكنية' },
        { en: 'QA/QC & compliance', ar: 'ضمان الجودة والامتثال' }
      ]
    },
    {
      id: 5,
      title: { en: 'South Dhahran Home Ownership Project', ar: 'مشروع تملك المساكن بجنوب الظهران' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'Sinohydro', ar: 'سينوهايدرو' },
      location: { en: 'Dhahran, KSA', ar: 'الظهران، المملكة العربية السعودية' },
      image: '/images/civil-cards/south-dhahran.png',
      scope: [
        { en: 'Electrical (low current) inspections', ar: 'فحوصات الكهرباء (التيار الخفيف)' },
        { en: 'Plumbing & piping inspection', ar: 'فحص السباكة والأنابيب' },
        { en: 'Aramco-approved manpower', ar: 'قوى عاملة معتمدة من أرامكو' }
      ]
    },
    {
      id: 6,
      title: { en: 'Jeddah Storm Water Drainage Program', ar: 'برنامج تصريف مياه الأمطار بجدة' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Jeddah, KSA', ar: 'جدة، المملكة العربية السعودية' },
      image: '/images/civil-cards/jeddah-drainage.png',
      scope: [
        { en: 'Managers, Engineers & Inspectors supply', ar: 'توفير مديرين ومهندسين ومفتشين' },
        { en: 'Civil infrastructure supervision', ar: 'الإشراف على البنية التحتية المدنية' },
        { en: 'HSE & QA/QC services', ar: 'خدمات الصحة والسلامة وضمان الجودة' }
      ]
    },
    {
      id: 7,
      title: { en: 'Royal Commission Civil Works – Jubail', ar: 'أعمال الهيئة الملكية المدنية – الجبيل' },
      client: { en: 'Royal Commission Jubail', ar: 'الهيئة الملكية بالجبيل' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/civil-cards/jubail-royal-commission.png',
      scope: [
        { en: 'Curb stone & building construction', ar: 'بناء الأرصفة والمباني' },
        { en: 'Civil finishing works', ar: 'أعمال التشطيب المدني' },
        { en: 'Installation & site execution', ar: 'التركيب والتنفيذ الميداني' }
      ]
    },
    {
      id: 8,
      title: { en: 'SADAF Petrochemical – Civil Works', ar: 'سادف البتروكيماوية – أعمال مدنية' },
      client: { en: 'SADAF (SABIC)', ar: 'سادف (سابك)' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/civil-cards/sadaf-civil.png',
      scope: [
        { en: 'Building construction', ar: 'بناء المباني' },
        { en: 'Equipment foundations', ar: 'أساسات المعدات' },
        { en: 'Civil finishing works', ar: 'أعمال التشطيب المدني' }
      ]
    }
  ],

  // Mechanical Projects
  mechanical: [
    {
      id: 1,
      title: { en: 'Heat Exchanger Replacement – Ibn Zahr', ar: 'استبدال المبادل الحراري – ابن زهر' },
      client: { en: 'SABIC', ar: 'سابك' },
      mainContractor: null,
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/mechanical-cards/ibn-zahr-heat-exchanger.png',
      scope: [
        { en: 'Replacement of aluminum heat exchanger', ar: 'استبدال المبادل الحراري الألومنيوم' },
        { en: 'Mechanical installation works', ar: 'أعمال التركيب الميكانيكي' },
        { en: 'Shutdown & turnaround support', ar: 'دعم الإغلاق والتوقفات' }
      ]
    },
    {
      id: 2,
      title: { en: 'SADAF Turnaround Piping Project', ar: 'مشروع أنابيب التوقف – سادف' },
      client: { en: 'SADAF (SABIC)', ar: 'سادف (سابك)' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/mechanical-cards/sadaf-turnaround-piping.png',
      scope: [
        { en: 'Fabrication & replacement of piping (1.5"–32")', ar: 'تصنيع واستبدال الأنابيب (1.5" – 32")' },
        { en: 'Turnaround execution', ar: 'تنفيذ التوقفات' },
        { en: 'Welding, testing & QA/QC', ar: 'اللحام والاختبار وضمان الجودة' }
      ]
    },
    {
      id: 3,
      title: { en: 'SATROP Piping Fabrication Works', ar: 'أعمال تصنيع الأنابيب – ساترب' },
      client: { en: 'SATROP', ar: 'ساترب' },
      mainContractor: null,
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/mechanical-cards/satrop-piping-fabrication.png',
      scope: [
        { en: 'Fabrication of piping (2"–24")', ar: 'تصنيع الأنابيب (2" – 24")' },
        { en: 'Carbon steel & alloy materials', ar: 'مواد الصلب الكربوني والسبائك' },
        { en: 'Industrial mechanical installation', ar: 'التركيب الميكانيكي الصناعي' }
      ]
    },
    {
      id: 4,
      title: { en: 'Khursaniyah Plant – Vessel Modification', ar: 'محطة خرسانية – تعديل الأوعية' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Khursaniyah, KSA', ar: 'خرسانية، المملكة العربية السعودية' },
      image: '/images/mechanical-cards/khursaniyah-vessel-modification.png',
      scope: [
        { en: 'Installation of weir plate inside vessel', ar: 'تركيب لوحة السد داخل الوعاء' },
        { en: 'Mechanical modification works', ar: 'أعمال التعديل الميكانيكي' },
        { en: 'Aramco safety & quality compliance', ar: 'الامتثال لمعايير أرامكو للسلامة والجودة' }
      ]
    },
    {
      id: 5,
      title: { en: 'Manifa Project – Oil Filtration Services', ar: 'مشروع منيفة – خدمات تصفية الزيت' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Manifa, KSA', ar: 'منيفة، المملكة العربية السعودية' },
      image: '/images/mechanical-cards/manifa-oil-filtration.png',
      scope: [
        { en: 'Transformer oil filtration services', ar: 'خدمات تصفية زيت المحولات' },
        { en: 'Vacuum pump & oil storage system supply', ar: 'توريد مضخات التفريغ ونظام تخزين الزيت' },
        { en: 'Commissioning & operational support', ar: 'التشغيل والدعم التشغيلي' }
      ]
    },
    {
      id: 6,
      title: { en: 'Sharq Petrochemical – Mechanical Works', ar: 'شرق البتروكيماوية – أعمال ميكانيكية' },
      client: { en: 'SARAQ', ar: 'سارق' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/mechanical-cards/sharq-mechanical.png',
      scope: [
        { en: 'Fabrication & replacement of nozzles', ar: 'تصنيع واستبدال الفوهات' },
        { en: 'Internal mechanical works', ar: 'الأعمال الميكانيكية الداخلية' },
        { en: 'Petrochemical plant support', ar: 'دعم المصنع البتروكيماوي' }
      ]
    }
  ],

  // Oil & Gas Projects
  oilGas: [
    {
      id: 1,
      title: { en: 'Jizan Integrated Gasification (IGCC) Project', ar: 'مشروع محطة جازان للتحويل الغازي المتكامل' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: { en: 'China Harbour Engineering (CHEC)', ar: 'شركة الصين لهندسة الموانئ' },
      location: { en: 'Jizan, KSA', ar: 'جازان، المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/jizan-igcc.png',
      scope: [
        { en: 'Supply of Aramco-approved QC Manager', ar: 'توفير مدير ضمان جودة معتمد من أرامكو' },
        { en: 'Civil inspection & quality assurance', ar: 'الفحص المدني وضمان الجودة' },
        { en: 'Support for mega oil & gas power facility', ar: 'دعم منشأة طاقة النفط والغاز الضخمة' }
      ]
    },
    {
      id: 2,
      title: { en: 'Khursaniyah Oil Processing Plant', ar: 'محطة معالجة النفط بخرسانية' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Khursaniyah, KSA', ar: 'خرسانية، المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/khursaniyah-oil-plant.png',
      scope: [
        { en: 'Vessel internal modification', ar: 'تعديل الأوعية الداخلية' },
        { en: 'Installation of weir plate', ar: 'تركيب لوحة السد' },
        { en: 'Mechanical works under Aramco standards', ar: 'أعمال ميكانيكية وفق معايير أرامكو' }
      ]
    },
    {
      id: 3,
      title: { en: 'Manifa Offshore Oil Field Project', ar: 'مشروع حقل منيفة النفطي البحري' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Manifa, KSA', ar: 'منيفة، المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/manifa-offshore.png',
      scope: [
        { en: 'Transformer oil filtration services', ar: 'خدمات تصفية زيت المحولات' },
        { en: 'Vacuum pump & oil storage system supply', ar: 'توريد مضخات التفريغ ونظام تخزين الزيت' },
        { en: 'Commissioning & operational support', ar: 'التشغيل والدعم التشغيلي' }
      ]
    },
    {
      id: 4,
      title: { en: 'SADAF Petrochemical Facility', ar: 'منشأة سادف البتروكيماوية' },
      client: { en: 'SADAF (SABIC)', ar: 'سادف (سابك)' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/sadaf-petrochemical.png',
      scope: [
        { en: 'Fabrication & replacement of process piping', ar: 'تصنيع واستبدال أنابيب العمليات' },
        { en: 'Turnaround mechanical support', ar: 'الدعم الميكانيكي للتوقفات' },
        { en: 'QA/QC & safety compliance', ar: 'ضمان الجودة والامتثال للسلامة' }
      ]
    },
    {
      id: 5,
      title: { en: 'Sharq Petrochemical Complex', ar: 'مجمع شرق البتروكيماوي' },
      client: { en: 'SARAQ', ar: 'سارق' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/sharq-petrochemical.png',
      scope: [
        { en: 'Mechanical & civil support works', ar: 'أعمال الدعم الميكانيكي والمدني' },
        { en: 'Nozzle fabrication & replacement', ar: 'تصنيع واستبدال الفوهات' },
        { en: 'Internal plant maintenance activities', ar: 'أنشطة صيانة المصنع الداخلية' }
      ]
    },
    {
      id: 6,
      title: { en: 'SATROP Refinery Piping Works', ar: 'أعمال أنابيب مصفاة ساترب' },
      client: { en: 'SATROP', ar: 'ساترب' },
      mainContractor: null,
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/oil-gas-cards/satrop-refinery.png',
      scope: [
        { en: 'Fabrication of process piping (2"–24")', ar: 'تصنيع أنابيب العمليات (2" – 24")' },
        { en: 'Carbon steel & alloy materials', ar: 'مواد الصلب الكربوني والسبائك' },
        { en: 'Refinery mechanical support', ar: 'الدعم الميكانيكي للمصفاة' }
      ]
    }
  ],

  // Manpower Projects
  manpower: [
    {
      id: 1,
      title: { en: 'KAUST Projects – Aramco Approved Staffing', ar: 'مشاريع كاوست – توظيف معتمد من أرامكو' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/manpower-cards/kaust-staffing.png',
      scope: [
        { en: 'Aramco-approved Civil, Electrical & Mechanical Inspectors', ar: 'مفتشون معتمدون من أرامكو في المجالات المدنية والكهربائية والميكانيكية' },
        { en: 'Supervisors & site support staff', ar: 'مشرفون وموظفو دعم ميداني' },
        { en: 'Long-term project deployment', ar: 'نشر طويل الأمد للمشاريع' }
      ]
    },
    {
      id: 2,
      title: { en: 'Jeddah Storm Water Drainage Program', ar: 'برنامج تصريف مياه الأمطار بجدة' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Jeddah, KSA', ar: 'جدة، المملكة العربية السعودية' },
      image: '/images/manpower-cards/jeddah-drainage-manpower.png',
      scope: [
        { en: 'Managers, Engineers & Inspectors supply', ar: 'توفير مديرين ومهندسين ومفتشين' },
        { en: 'Civil infrastructure supervision', ar: 'الإشراف على البنية التحتية المدنية' },
        { en: 'HSE & QA/QC support', ar: 'دعم الصحة والسلامة وضمان الجودة' }
      ]
    },
    {
      id: 3,
      title: { en: 'Jizan IGCC Project Staffing', ar: 'توظيف مشروع جازان للتحويل الغازي' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Jizan, KSA', ar: 'جازان، المملكة العربية السعودية' },
      image: '/images/manpower-cards/jizan-igcc-staffing.png',
      scope: [
        { en: 'QC Managers & Civil Inspectors', ar: 'مديرو ضمان الجودة والمفتشون المدنيون' },
        { en: 'Quality assurance manpower', ar: 'قوى عاملة لضمان الجودة' },
        { en: 'Mega oil & gas project support', ar: 'دعم مشاريع النفط والغاز الضخمة' }
      ]
    },
    {
      id: 4,
      title: { en: 'JSDP Projects – Jeddah', ar: 'مشاريع برنامج تطوير جدة' },
      client: { en: 'Aramco / CCCC / Moody', ar: 'أرامكو / CCCC / مودي' },
      mainContractor: null,
      location: { en: 'Jeddah, KSA', ar: 'جدة، المملكة العربية السعودية' },
      image: '/images/manpower-cards/jsdp-jeddah.png',
      scope: [
        { en: 'Aramco-approved Inspectors & Supervisors', ar: 'مفتشون ومشرفون معتمدون من أرامكو' },
        { en: 'Multi-contractor manpower supply', ar: 'توريد قوى عاملة لعدة مقاولين' },
        { en: 'QA/QC & site supervision', ar: 'ضمان الجودة والإشراف الميداني' }
      ]
    },
    {
      id: 5,
      title: { en: 'Petro Kemya Cold Box Installation', ar: 'تركيب الصندوق البارد – بتروكيميا' },
      client: { en: 'LINDE / SABIC', ar: 'ليندي / سابك' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/manpower-cards/petro-kemya-safety.png',
      scope: [
        { en: 'Qualified safety team supply', ar: 'توفير فريق سلامة مؤهل' },
        { en: 'HSE supervision & compliance', ar: 'الإشراف على الصحة والسلامة والامتثال' },
        { en: 'Petrochemical installation support', ar: 'دعم التركيب البتروكيماوي' }
      ]
    },
    {
      id: 6,
      title: { en: 'WASEA Project – Civil Inspection', ar: 'مشروع واسع – الفحص المدني' },
      client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
      mainContractor: null,
      location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      image: '/images/manpower-cards/wasea-civil-inspection.png',
      scope: [
        { en: 'Aramco-approved Civil Inspectors', ar: 'مفتشون مدنيون معتمدون من أرامكو' },
        { en: 'Site quality inspection', ar: 'فحص جودة الموقع' },
        { en: 'Infrastructure project support', ar: 'دعم مشاريع البنية التحتية' }
      ]
    },
    {
      id: 7,
      title: { en: 'Jubail PMT & Safety Staffing', ar: 'توظيف فريق إدارة المشاريع والسلامة – الجبيل' },
      client: { en: 'LINDE / SABIC', ar: 'ليندي / سابك' },
      mainContractor: null,
      location: { en: 'Jubail, KSA', ar: 'الجبيل، المملكة العربية السعودية' },
      image: '/images/manpower-cards/jubail-pmt-safety.png',
      scope: [
        { en: 'PMT (Project Management Team) supply', ar: 'توفير فريق إدارة المشاريع' },
        { en: 'Safety & QA personnel', ar: 'موظفو السلامة وضمان الجودة' },
        { en: 'Industrial expansion projects', ar: 'مشاريع التوسع الصناعي' }
      ]
    }
  ]
};

export default projects;
