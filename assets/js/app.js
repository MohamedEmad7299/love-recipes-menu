/**
 * ==========================================================================
 * LOVE RECIPES (LR) - DIGITAL MENU & ORDERING SYSTEM
 * High-Performance Digital Menu & WhatsApp Ordering Platform
 * Designed & Developed by Mohamed Emad (+201020766525)
 * ==========================================================================
 */

// Deployment URL for QR Code & Sharing
const GITHUB_PAGES_URL = "https://mohamedemad7299.github.io/love-recipes-menu/";

// Primary Contact & WhatsApp Numbers
const RESTAURANT_HOTLINES = ["01032638741"];
const PRIMARY_WHATSAPP = "01032638741";
const COMPLAINTS_HOTLINE = "01032638741";

// Developer Portfolio & Contact Info
const DEVELOPER_INFO = {
  name: "Mohamed Emad",
  phone: "+201020766525",
  whatsapp: "201020766525",
  facebook: "https://www.facebook.com/mohamedemad199912",
  instagram: "https://www.instagram.com/ma7amed_3emad/",
  linkedin: "https://www.linkedin.com/feed/foryou/",
  github: "https://github.com/MohamedEmad7299"
};

// Bilingual Translations Dictionary
const I18N = {
  ar: {
    brandName: "Love Recipes",
    brandSubtitle: "LR • Tropical Holiday & Dessert",
    brandTagline: "لاف ريسبيز • أشهى آيس كريم صنداي • مشروبات بوبا تايوانية • كريب وبراونيز • كيكة دبي وقشطوطة",
    navMenu: "المنيو",
    navBranches: "الفروع والطلب",
    navQR: "رمز QR",
    navCall: "اتصل بنا",
    navCart: "طلبك",
    heroBadge: "أشهى آيس كريم صنداي، بوبا، كريب براونيز، كيكة دبي، وقشطوطة في 6 أكتوبر والشيخ زايد 🍧",
    heroTitle: "Love Recipes",
    heroSubtitle: "استمتع بألذ لحظات السعادة والانتعاش مع لاف ريسبيز (Love Recipes)! تشكيلة استثنائية من آيس كريم الصنداي الفاخر، مشروبات البوبا التايوانية المنعشة، كريب البراونيز وفوتوتشيني كريب، كيكة دبي بالكنافة، ديسباسيتو، قشطوطة، والميلك شيك الطبيعي المحضر بأعلى معايير الجودة.",
    hotlineLabel: "الطلب السريع والواتساب:",
    complaintsLabel: "للشكاوى والمقترحات:",
    ctaMenu: "تصفح المنيو اللذيذ",
    ctaBranches: "الفروع ومناطق التوصيل",
    searchPlaceholder: "ابحث في الصنداي، البوبا، كريب البراونيز، كيكة دبي، القشطوطة، الميلك شيك...",
    tabAll: "الكل ✨",
    tabSundae: "آيس كريم صنداي 🍨",
    tabBoba: "مشروبات البوبا 🧋",
    tabIcedCoffee: "أيس كوفي وماتشا ☕",
    tabBrownieCrepe: "براوني كريب 🍫",
    tabFettuccineCrepe: "فوتوتشيني كريب 🥞",
    tabDubaiCake: "كيكة دبي بالكنافة 👑",
    tabFrappe: "فرابتشينو وفرابيه 🥤",
    tabMilkshake: "ميلك شيك طبيعي 🍓",
    tabQashtoota: "قشطوطة فاخرة 🍮",
    tabDespacito: "ديسباسيتو 🎂",
    tabBrownies: "براونيز كيك وبايتس 🍫",
    tabTajen: "طاجن السعادة 🍯",
    tabCheesecake: "تشيز كيك 🍰",
    tabSmoothieMojito: "سموزي ومخيتو 🍋",
    tabHotDrinks: "مشروبات ساخنة ☕",
    tabAddOns: "إضافات وصوصات 🧁",
    single: "سنجل",
    double: "دبل",
    medium: "وسط (M)",
    large: "كبير (L)",
    regular: "عادي",
    egp: "ج.م",
    addToOrder: "أضف للطلب",
    tagSpicy: "سبايسي 🌶️",
    tagPopular: "الأكثر طلباً ⭐",
    tagSpecial: "سبيشال LR 💖",
    tagNew: "جديد ⚡",
    tagSignature: "سيجنتشر 👑",
    branchesSectionTitle: "فرع Love Recipes وخدمة التوصيل السريع",
    branchesSectionSubtitle: "نصلك أينما كنت في 6 أكتوبر والشيخ زايد بأسرع وقت وأعلى درجات الانتعاش",
    orderModalTitle: "سلة الطلب السريع عبر واتساب",
    emptyCartTitle: "سلتك فارغة حتى الآن",
    emptyCartDesc: "تصفح القائمة واختر أشهى الحلويات والمشروبات من لاف ريسبيز!",
    orderTypeLabel: "طريقة الاستلام:",
    orderTypeDelivery: "توصيل للمنزل / دليفري 🛵",
    orderTypePickup: "استلام من المطعم (تيك أواي) 🛍️",
    orderTypeDineIn: "تناول داخل الصالة (خدمة 12%) 🍨",
    customerName: "الاسم الكريم:",
    customerPhone: "رقم الموبايل للتواصل:",
    customerBranch: "اختر الفرع أو منطقة التوصيل:",
    customerAddressOrTable: "العنوان بالتفصيل أو رقم الطاولة:",
    customerNotes: "ملاحظات إضافية (إكسترا صوص / سكر خفيف / بدون كريمة...):",
    placeholderName: "مثال: أحمد محمود",
    placeholderPhone: "مثال: 01032638741",
    placeholderAddress: "مثال: 6 أكتوبر - الحي المتميز - عمارة 15 - شقة 3",
    placeholderTable: "مثال: طاولة رقم 4 داخل الصالة",
    placeholderNotes: "مثال: زيادة صوص لوتس / بوبا إضافية / بدون سكر",
    totalPrice: "الإجمالي:",
    sendWhatsAppBtn: "إرسال الطلب عبر واتساب 💬",
    floatOrderCta: "عرض الطلب وإتمام الشراء 💬",
    qrModalTitle: "امسح رمز QR لفتح المنيو",
    qrModalDesc: "وجّه كاميرا هاتفك المحمول إلى الرمز لفتح منيو Love Recipes الإلكتروني في أي وقت ومشاركته مع عائلتك وأصدقائك!",
    tableNumLabel: "حدد رقم الطاولة (اختياري لخدمة الصالة):",
    tableNone: "المنيو العام بدون طاولة",
    tableNumPrefix: "طاولة رقم",
    downloadQR: "تحميل صورة QR",
    copyLink: "نسخ رابط المنيو",
    copiedAlert: "تم نسخ رابط منيو Love Recipes بنجاح!",
    footerAbout: "Love Recipes (LR) - وجهتك الأولى لأشهى الحلويات الغربية، آيس كريم الصنداي الفاخر، مشروبات البوبا الطبيعية، كريب البراونيز وفوتوتشيني، كيكة دبي بالكنافة المقرمشة والديسباسيتو المصنوع بكل حب.",
    footerBrandTitle: "Love Recipes <span>LR</span> 💖",
    footerCopyright: "&copy; 2026 Love Recipes (LR) - جميع الحقوق محفوظة",
    devCreditBy: "تصميم وتطوير:",
    selectBranchTitle: "اختر الفرع أو منطقة التوصيل لطلبك",
    searchBranchPlaceholder: "ابحث باسم المنطقة أو الفرع...",
    noBranchesFound: "لا توجد نتائج تطابق بحثك",
    featuredBranchBadge: "الفرع الرئيسي",
    itemsCountSuffix: "أصناف",
    clearCart: "تفريغ السلة",
    subtotalLabel: "المجموع الفرعي:",
    hallServiceLabel: "خدمة الصالة (12%):",
    finalTotalLabel: "الإجمالي النهائي:",
    serviceNotice: "⭐ يضاف 12% خدمة داخل الصالة - جميع الأسعار شاملة ضريبة القيمة المضافة."
  },
  en: {
    brandName: "Love Recipes",
    brandSubtitle: "LR • Tropical Holiday & Dessert",
    brandTagline: "Love Recipes • Gourmet Sundae • Authentic Boba Drinks • Brownie Crepe • Dubai Cake & Qashtoota",
    navMenu: "Menu",
    navBranches: "Branches & Order",
    navQR: "QR Code",
    navCall: "Call Us",
    navCart: "Order",
    heroBadge: "Gourmet Ice Cream Sundaes, Boba Drinks, Brownie Crepes & Dubai Cakes in 6th of October & Zayed 🍧",
    heroTitle: "Love Recipes",
    heroSubtitle: "Indulge in pure happiness and freshness with Love Recipes (LR)! An exquisite selection of premium ice cream sundaes, authentic boba drinks, brownie crepes, fettuccine crepes, Dubai pistachio kunafa cakes, despacito, creamy qashtoota, and gourmet milkshakes crafted with love.",
    hotlineLabel: "Fast Order & WhatsApp:",
    complaintsLabel: "Customer Care & Complaints:",
    ctaMenu: "Explore Delicious Menu",
    ctaBranches: "Branches & Delivery",
    searchPlaceholder: "Search sundaes, boba, brownie crepes, dubai cake, qashtoota, milkshakes...",
    tabAll: "All ✨",
    tabSundae: "Ice Cream Sundae 🍨",
    tabBoba: "Boba Drinks 🧋",
    tabIcedCoffee: "Iced Coffee & Matcha ☕",
    tabBrownieCrepe: "Brownie Crepe 🍫",
    tabFettuccineCrepe: "Fettuccine Crepe 🥞",
    tabDubaiCake: "Dubai Kunafa Cake 👑",
    tabFrappe: "Frappe & Frappuccino 🥤",
    tabMilkshake: "Milkshakes 🍓",
    tabQashtoota: "Gourmet Qashtoota 🍮",
    tabDespacito: "Despacito Cake 🎂",
    tabBrownies: "Brownies & Bites 🍫",
    tabTajen: "Happiness Tajen 🍯",
    tabCheesecake: "Cheesecake 🍰",
    tabSmoothieMojito: "Smoothies & Mojitos 🍋",
    tabHotDrinks: "Hot Drinks ☕",
    tabAddOns: "Extras & Add-ons 🧁",
    single: "Single",
    double: "Double",
    medium: "Medium (M)",
    large: "Large (L)",
    regular: "Regular",
    egp: "EGP",
    addToOrder: "Add to Cart",
    tagSpicy: "Spicy 🌶️",
    tagPopular: "Most Popular ⭐",
    tagSpecial: "LR Special 💖",
    tagNew: "New ⚡",
    tagSignature: "Signature 👑",
    branchesSectionTitle: "Love Recipes Branches & Fast Delivery",
    branchesSectionSubtitle: "Delivering happiness directly to your doorstep in 6th of October and Sheikh Zayed",
    orderModalTitle: "Quick WhatsApp Order Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartDesc: "Browse the menu and pick your favorite treats and drinks from Love Recipes!",
    orderTypeLabel: "Fulfillment Type:",
    orderTypeDelivery: "Home Delivery 🛵",
    orderTypePickup: "Store Pickup (Takeaway) 🛍️",
    orderTypeDineIn: "Dine-in (12% Service) 🍨",
    customerName: "Your Full Name:",
    customerPhone: "Phone / Mobile Number:",
    customerBranch: "Select Branch / Delivery Area:",
    customerAddressOrTable: "Detailed Address or Table Number:",
    customerNotes: "Extra Instructions (Extra sauce / less sweet / no whip...):",
    placeholderName: "e.g. Ahmed Mahmoud",
    placeholderPhone: "e.g. 01032638741",
    placeholderAddress: "e.g. 6th of October - District 1 - Bldg 15 - Apt 3",
    placeholderTable: "e.g. Table #4 indoor seating",
    placeholderNotes: "e.g. Extra lotus sauce / add boba pearls / less sweet",
    totalPrice: "Total Amount:",
    sendWhatsAppBtn: "Send Order via WhatsApp 💬",
    floatOrderCta: "Review Order & Checkout 💬",
    qrModalTitle: "Scan QR Code for Digital Menu",
    qrModalDesc: "Point your phone camera at the QR code to open Love Recipes digital menu anytime and share it with friends and family!",
    tableNumLabel: "Select Table Number (Optional for Dine-in):",
    tableNone: "General Menu (No Table)",
    tableNumPrefix: "Table #",
    downloadQR: "Download QR Image",
    copyLink: "Copy Menu URL",
    copiedAlert: "Love Recipes menu URL copied successfully!",
    footerAbout: "Love Recipes (LR) - Your top destination for artisanal desserts, gourmet sundae ice cream, chewy boba drinks, brownie crepes, crispy Dubai kunafa cake, and heavenly despacito made with pure love.",
    footerBrandTitle: "Love Recipes <span>LR</span> 💖",
    footerCopyright: "&copy; 2026 Love Recipes (LR) - All Rights Reserved",
    devCreditBy: "Designed & Developed by:",
    selectBranchTitle: "Select Branch or Delivery Zone",
    searchBranchPlaceholder: "Search branch name or neighborhood...",
    noBranchesFound: "No locations match your search",
    featuredBranchBadge: "Main Branch",
    itemsCountSuffix: "items",
    clearCart: "Clear Cart",
    subtotalLabel: "Subtotal:",
    hallServiceLabel: "Hall Service (12%):",
    finalTotalLabel: "Final Total:",
    serviceNotice: "⭐ 12% Dine-in / Hall service charge applies - All prices are VAT inclusive."
  }
};

// Branches Directory & WhatsApp Order Dispatch
const BRANCHES_DATA = [
  {
    id: "october_hosary",
    nameAr: "فرع 6 أكتوبر - ميدان الحصري (عمارة 40)",
    nameEn: "6th of October - Al-Hosary Square (Bldg 40)",
    addressAr: "ميدان الحصري - بجوار ماكدونالدز - عمارة 40 - مدينة 6 أكتوبر",
    addressEn: "Al-Hosary Square, Next to McDonald's, Building 40, 6th of October City",
    phone: "01032638741",
    whatsapp: "01032638741",
    hoursAr: "يومياً من 11:00 صباحاً حتى 02:00 فجراً",
    hoursEn: "Daily 11:00 AM - 02:00 AM",
    mapsUrl: "https://maps.google.com/?q=Al+Hosary+Square+6th+October",
    isMain: true
  },
  {
    id: "delivery_zayed_october",
    nameAr: "خدمة التوصيل السريع (أكتوبر والشيخ زايد وحدائق الأهرام)",
    nameEn: "Fast Delivery Zone (October, Zayed & Hadayek)",
    addressAr: "توصيل سريع مجهز ومبرد لجميع أحياء 6 أكتوبر، الشيخ زايد، وحدائق الأهرام",
    addressEn: "Chilled & insulated fast delivery covering 6th of October, Sheikh Zayed & Hadayek Al Ahram",
    phone: "01032638741",
    whatsapp: "01032638741",
    hoursAr: "خدمة التوصيل من 11:00 صباحاً حتى 02:00 فجراً",
    hoursEn: "Delivery Service 11:00 AM - 02:00 AM",
    mapsUrl: "https://maps.google.com/?q=6th+of+October+City",
    isMain: false
  }
];

// Complete 100% Extracted Menu Data
const MENU_DATA = [
  // ==================== 1. ICE CREAM SUNDAE (آيس كريم صنداي) ====================
  {
    id: "sundae_vanilla",
    category: "sundae",
    nameAr: "صنداي فانيليا كلاسيك",
    nameEn: "Vanilla Sundae",
    descAr: "آيس كريم فانيليا كريمي طبيعي ناعم وغني بأجود أنواع الحليب",
    descEn: "Creamy pure vanilla ice cream, smooth and velvety",
    badge: "popular",
    price: 55
  },
  {
    id: "sundae_chocolate",
    category: "sundae",
    nameAr: "صنداي شوكولاتة",
    nameEn: "Chocolate Sundae",
    descAr: "آيس كريم كريمي فاخر غارق في صوص الشوكولاتة الغني واللذيذ",
    descEn: "Creamy soft ice cream topped with rich chocolate sauce",
    badge: "popular",
    price: 60
  },
  {
    id: "sundae_caramel",
    category: "sundae",
    nameAr: "صنداي كراميل",
    nameEn: "Sunday Caramel",
    descAr: "آيس كريم فانيليا كريمي مغطى بصوص الكراميل الذهبي اللذيذ",
    descEn: "Creamy vanilla ice cream topped with sweet decadent caramel sauce",
    badge: "popular",
    price: 60
  },
  {
    id: "sundae_strawberry",
    category: "sundae",
    nameAr: "صنداي فراولة طبيعية",
    nameEn: "Strawberry Sundae",
    descAr: "آيس كريم كريمي مثلج مع صوص الفراولة الطازجة المنعشة",
    descEn: "Creamy vanilla ice cream drizzled with natural strawberry sauce",
    price: 60
  },
  {
    id: "sundae_berry",
    category: "sundae",
    nameAr: "صنداي توت أزرق (بلوبيري)",
    nameEn: "Berry Sundae",
    descAr: "آيس كريم كريمي مع صوص التوت الأزرق المنعش الغني بالنكهة",
    descEn: "Creamy ice cream sunday with wild berry sauce",
    badge: "special",
    price: 65
  },
  {
    id: "sundae_lotus",
    category: "sundae",
    nameAr: "صنداي لوتس بيسكوف",
    nameEn: "Lotus Sundae",
    descAr: "آيس كريم كريمي مع زبدة وصوص لوتس وقرمشة بسكويت اللوتس الأصلي",
    descEn: "Creamy ice cream sundae drenched in authentic Lotus Biscoff sauce",
    badge: "signature",
    price: 65
  },
  {
    id: "sundae_nutella",
    category: "sundae",
    nameAr: "صنداي نوتيلا هازلنوت",
    nameEn: "Nutella Sundae",
    descAr: "آيس كريم كريمي فاخر مغطى بصوص نوتيلا شوكولاتة البندق الإيطالية",
    descEn: "Creamy ice cream sundae layered with genuine Nutella hazelnut spread",
    badge: "popular",
    price: 65
  },
  {
    id: "sundae_kinder",
    category: "sundae",
    nameAr: "صنداي كيندر شوكليت",
    nameEn: "Kinder Sundae",
    descAr: "آيس كريم صنداي كريمي مع صوص كيندر شوكليت الكريمة البيضاء الشهيرة",
    descEn: "Creamy ice cream sundae swirled with velvety Kinder chocolate sauce",
    badge: "special",
    price: 70
  },
  {
    id: "sundae_pistachio",
    category: "sundae",
    nameAr: "صنداي بستاشيو فستق فاخر",
    nameEn: "Pistachio Sundae",
    descAr: "آيس كريم صنداي كريمي مغطى بصوص الفستق الحلبي (بستاشيو) الفاخر",
    descEn: "Creamy sundae ice cream generously topped with rich Sicilian pistachio sauce",
    badge: "signature",
    price: 75
  },
  {
    id: "sundae_mango",
    category: "sundae",
    nameAr: "صنداي مانجو استوائي",
    nameEn: "Mango Sundae",
    descAr: "آيس كريم صنداي مع صوص المانجو الطبيعية المركزة الاستوائية",
    descEn: "Tropical sundae with sweet natural mango fruit sauce",
    price: 55
  },
  {
    id: "sundae_hohos",
    category: "sundae",
    nameAr: "صنداي هوهوز كيك",
    nameEn: "Hohos Sundae",
    descAr: "آيس كريم صنداي كريمي مع قطع كيك هوهوز وصوص شوكولاتة",
    descEn: "Creamy sundae ice cream loaded with Hohos chocolate cake bites",
    price: 55
  },
  {
    id: "sundae_oreo",
    category: "sundae",
    nameAr: "صنداي كوكيز أوريو",
    nameEn: "Oreo Sundae",
    descAr: "آيس كريم صنداي كريمي مع بسكويت أوريو مقرمش وصوص شوكولاتة",
    descEn: "Creamy sundae ice cream packed with crunchy crushed Oreo cookies",
    badge: "popular",
    price: 55
  },

  // ==================== 2. BOBA DRINKS (مشروبات البوبا التايوانية) ====================
  {
    id: "boba_caramel",
    category: "boba",
    nameAr: "بوبا كراميل كريمي",
    nameEn: "Boba Caramel",
    descAr: "حبيبات تابيوكا بوبا مطاطية مع الحليب الطازج، آيس كريم وصوص كراميل ذهبي",
    descEn: "Chewy boba tapioca pearls with fresh milk, ice cream and luscious caramel sauce",
    badge: "popular",
    price: 135
  },
  {
    id: "boba_blueberry",
    category: "boba",
    nameAr: "بوبا بلوبيري (توت أزرق)",
    nameEn: "Boba Blueberry",
    descAr: "حبيبات بوبا تابيوكا مميزة مع الحليب وصوص التوت الأزرق الطبيعي",
    descEn: "Chewy boba pearls infused with creamy milk and wild berry sauce",
    price: 135
  },
  {
    id: "boba_chocolate",
    category: "boba",
    nameAr: "بوبا شوكولاتة غنية",
    nameEn: "Boba Chocolate",
    descAr: "حبيبات تابيوكا بوبا مع حليب الشوكولاتة الكثيف وصوص شوكولاتة بلجيكية",
    descEn: "Boba tapioca pearls with rich chocolate milk and chocolate swirl",
    price: 135
  },
  {
    id: "boba_tea",
    category: "boba",
    nameAr: "شاي بوبا كلاسيك بالحليب",
    nameEn: "Boba Classic Milk Tea",
    descAr: "شاي أسود مثلج أصيل ممزوج بالحليب وحبيبات التابيوكا التايوانية التقليدية",
    descEn: "Authentic iced black tea infused with creamy milk and chewy tapioca pearls",
    badge: "signature",
    price: 130
  },
  {
    id: "boba_vanilla",
    category: "boba",
    nameAr: "بوبا فانيليا مع آيس كريم صنداي",
    nameEn: "Vanilla Boba",
    descAr: "حبيبات بوبا تابيوكا مع حليب بارد ونكهة الفانيليا وآيس كريم صنداي ناعم",
    descEn: "Boba pearls tapioca milk crowned with rich vanilla sundae ice cream",
    price: 135
  },
  {
    id: "boba_strawberry",
    category: "boba",
    nameAr: "بوبا فراولة منعشة",
    nameEn: "Boba Strawberry",
    descAr: "حبيبات بوبا تابيوكا مع حليب الفراولة وصوص الفراولة الطازجة",
    descEn: "Boba pearls tapioca with silky milk and vibrant strawberry sauce",
    price: 135
  },
  {
    id: "boba_iced_coffee",
    category: "boba",
    nameAr: "بوبا أيس كوفي اسبريسو",
    nameEn: "Boba Iced Coffee",
    descAr: "شوت اسبريسو قوي مثلج ممزوج بالحليب وحبيبات البوبا التابيوكا اللذيذة",
    descEn: "Refreshing bold iced coffee drink combined with chewy boba pearls",
    badge: "popular",
    price: 145
  },
  {
    id: "boba_kinder",
    category: "boba",
    nameAr: "بوبا كيندر رويال",
    nameEn: "Boba Kinder",
    descAr: "حبيبات بوبا تابيوكا مع الحليب وصوص كيندر شوكليت الناعم الفاخر",
    descEn: "Chewy boba pearls with chilled milk and decadent tapioca Kinder sauce",
    badge: "special",
    price: 150
  },
  {
    id: "boba_pistachio",
    category: "boba",
    nameAr: "بوبا بستاشيو فستق",
    nameEn: "Boba Pistachio",
    descAr: "حبيبات بوبا تابيوكا مطاطية مع الحليب وصوص الفستق الحلبي الغني",
    descEn: "Boba tapioca pearls with velvety milk and creamy Sicilian pistachio sauce",
    badge: "signature",
    price: 155
  },
  {
    id: "boba_caramel_frappe",
    category: "boba",
    nameAr: "بوبا كراميل فرابيه مثلج",
    nameEn: "Boba Caramel Frappe",
    descAr: "فرابيه كراميل كريمي مخفوق ومثلج تعلوه حبيبات البوبا لتجربة حلوى لا تقاوم",
    descEn: "Smooth and creamy caramel frappe topped with chewy boba pearls for an unforgettable treat",
    badge: "popular",
    price: 150
  },
  {
    id: "boba_lotus",
    category: "boba",
    nameAr: "بوبا لوتس بيسكوف",
    nameEn: "Boba Lotus",
    descAr: "شاي بوبا منعش ممزوج بزبدة اللوتس وحبيبات التابيوكا العطرية اللذيذة",
    descEn: "Delightful boba infused with sweet Lotus Biscoff essence and chewy tapioca",
    price: 135
  },
  {
    id: "boba_matcha",
    category: "boba",
    nameAr: "بوبا ماتشا يابانية فاخرة",
    nameEn: "Boba Matcha",
    descAr: "شاي ماتشا أخضر ياباني أصيل بالحليب الكريمي وحبيبات البوبا المطاطية المنعشة",
    descEn: "Authentic vibrant green matcha tea with milk and sweet tapioca pearls creating an energizing drink",
    badge: "special",
    price: 155
  },
  {
    id: "boba_nutella",
    category: "boba",
    nameAr: "بوبا نوتيلا شوكولاتة بندق",
    nameEn: "Boba Nutella",
    descAr: "حبيبات بوبا تابيوكا مغمورة في صوص النوتيلا الغني بالحليب اللذيذ",
    descEn: "Chewy tapioca boba pearls immersed in rich creamy Nutella chocolate hazelnut goodness",
    badge: "popular",
    price: 145
  },

  // ==================== 3. ICED COFFEE & MATCHA (أيس كوفي وماتشا) ====================
  {
    id: "ice_coffee_vanilla",
    category: "iced_coffee",
    nameAr: "أيس كوفي فانيليا",
    nameEn: "Iced Coffee Vanilla",
    descAr: "شوت اسبريسو مع الثلج والحليب ونكهة الفانيليا الناعمة",
    descEn: "Single shot of espresso with ice, fresh milk and vanilla syrup",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 45 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 55 }
    ]
  },
  {
    id: "ice_coffee_caramel",
    category: "iced_coffee",
    nameAr: "أيس كوفي كراميل",
    nameEn: "Iced Coffee Caramel",
    descAr: "اسبريسو مثلج مع الحليب وصوص الكراميل المركز",
    descEn: "Single shot of bold espresso with ice, milk and caramel sauce swirl",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 45 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 55 }
    ]
  },
  {
    id: "iced_white_mocha",
    category: "iced_coffee",
    nameAr: "أيس وايت موكا",
    nameEn: "Iced White Mocha",
    descAr: "مزيج متناغم من الشوكولاتة البيضاء السويسرية، اسبريسو قوي، وحليب بارد",
    descEn: "Fusion of smooth white chocolate, bold espresso, and chilled milk",
    badge: "special",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "iced_coffee_latte",
    category: "iced_coffee",
    nameAr: "أيس كوفي لاتيه",
    nameEn: "Iced Coffee Latte",
    descAr: "شوت اسبريسو كلاسيك مع الحليب البارد والثلج بدون إضافات",
    descEn: "Single shot of rich espresso with chilled milk over ice",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 45 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 55 }
    ]
  },
  {
    id: "iced_coffee_mocha",
    category: "iced_coffee",
    nameAr: "أيس كوفي موكا شوكليت",
    nameEn: "Iced Coffee Mocha",
    descAr: "شوت اسبريسو مع الحليب وصوص الشوكولاتة الداكنة الكثيفة",
    descEn: "Single shot of espresso with milk and dark chocolate sauce",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "iced_matcha_latte",
    category: "iced_coffee",
    nameAr: "أيس ماتشا لاتيه ياباني",
    nameEn: "Iced Matcha Latte",
    descAr: "بودرة ماتشا يابانية نقية ممزوجة بالآيس كريم الكريمي والحليب المثلج المنعش",
    descEn: "Vibrant green Japanese matcha powder blended smoothly with ice cream and chilled milk",
    badge: "signature",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 60 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 75 }
    ]
  },
  {
    id: "iced_americano",
    category: "iced_coffee",
    nameAr: "أيس أمريكانو نقي",
    nameEn: "Iced Americano",
    descAr: "دبل شوت اسبريسو مركز فوق الماء المثلج لانتعاش القهوة الحقيقي بدون حليب",
    descEn: "Strong double shots of espresso served over ice with cold water",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 35 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 45 }
    ]
  },
  {
    id: "iced_spanish_latte",
    category: "iced_coffee",
    nameAr: "أيس سبانيش لاتيه حلو",
    nameEn: "Iced Spanish Latte",
    descAr: "اسبريسو مثلج منعش ممزوج بالحليب المكثف المحلى الفاخر",
    descEn: "Refreshing iced Spanish latte combining espresso with smooth condensed milk",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 55 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 65 }
    ]
  },
  {
    id: "iced_coffee_nutella",
    category: "iced_coffee",
    nameAr: "أيس كوفي نوتيلا",
    nameEn: "Iced Coffee Nutella",
    descAr: "اسبريسو مثلج مع الحليب وصوص النوتيلا الإيطالية الفاخرة",
    descEn: "Iced espresso blended with creamy milk and rich Nutella sauce",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "iced_coffee_lotus",
    category: "iced_coffee",
    nameAr: "أيس كوفي لوتس",
    nameEn: "Iced Coffee Lotus",
    descAr: "اسبريسو مثلج مع الحليب وصوص لوتس بيسكوف اللذيذ",
    descEn: "Iced espresso combined with chilled milk and caramelized Lotus spread",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },

  // ==================== 4. BROWNIE CREPE (براوني كريب) ====================
  {
    id: "crepe_brownie_lotus",
    category: "brownie_crepe",
    nameAr: "براوني كريب لوتس مع آيس كريم",
    nameEn: "Lotus Brownie Crepe",
    descAr: "رول كريب طري محشو بكيك البراونيز الغني، مغطى بصوص اللوتس مع بولة آيس كريم",
    descEn: "Delicate crepe roll stuffed with rich brownie cake, drenched in Lotus sauce with ice cream",
    badge: "popular",
    price: 130
  },
  {
    id: "crepe_brownie_nutella",
    category: "brownie_crepe",
    nameAr: "براوني كريب نوتيلا مع آيس كريم",
    nameEn: "Nutella Brownie Crepe",
    descAr: "رول كريب فرنسي محشو بقطع البراونيز وغارق في نوتيلا شوكولاتة البندق مع آيس كريم",
    descEn: "Crepe roll stuffed with fudge brownie cake, smothered in Nutella sauce with ice cream",
    badge: "popular",
    price: 130
  },
  {
    id: "crepe_brownie_pistachio",
    category: "brownie_crepe",
    nameAr: "براوني كريب بستاشيو ملكي",
    nameEn: "Pistachio Brownie Crepe",
    descAr: "رول كريب محشو براونيز كيك فاخر ومغطى بصوص الفستق الحلبي مع الآيس كريم",
    descEn: "Crepe roll stuffed with brownie cake, drenched in luxury pistachio sauce with ice cream",
    badge: "signature",
    price: 150
  },
  {
    id: "crepe_brownie_kinder",
    category: "brownie_crepe",
    nameAr: "براوني كريب كيندر وايت شوكليت",
    nameEn: "Kinder Brownie Crepe",
    descAr: "رول كريب محشو بالبراونيز وغارق في صوص كيندر شوكليت مع بولة آيس كريم",
    descEn: "Crepe roll stuffed with rich brownie cake, drenched in Kinder sauce with ice cream",
    badge: "special",
    price: 135
  },
  {
    id: "crepe_brownie_half_half",
    category: "brownie_crepe",
    nameAr: "براوني كريب هاف آند هاف (كيندر - نوتيلا)",
    nameEn: "Brownie Crepe Half and Half (Kinder - Nutella)",
    descAr: "كريب رول محشو كيك شوكولاتة ومغطى نصفه بصوص كيندر والنصف الآخر نوتيلا مع الآيس كريم",
    descEn: "Delicate crepe rolled with rich chocolate cake, topped with half Kinder and half Nutella",
    badge: "popular",
    price: 135
  },

  // ==================== 5. FETTUCCINE CREPE (فوتوتشيني كريب) ====================
  {
    id: "fettuccine_lotus",
    category: "fettuccine_crepe",
    nameAr: "فوتوتشيني كريب لوتس بيسكوف",
    nameEn: "Fototshini Lotus Crepe",
    descAr: "شرائح كريب رفيعة على طريقة الفوتوتشيني مغطاة بصوص اللوتس مع بولة آيس كريم",
    descEn: "Crepe slices tossed in sweet Lotus Biscoff sauce served with ice cream",
    badge: "popular",
    price: 105
  },
  {
    id: "fettuccine_nutella",
    category: "fettuccine_crepe",
    nameAr: "فوتوتشيني كريب نوتيلا غنية",
    nameEn: "Fototshini Nutella Crepe",
    descAr: "شرائح كريب فوتوتشيني مغطاة بسخاء بصوص شوكولاتة نوتيلا مع بولة آيس كريم",
    descEn: "Thin crepe ribbons drizzled with decadent Nutella chocolate sauce and ice cream",
    badge: "popular",
    price: 105
  },
  {
    id: "fettuccine_pistachio",
    category: "fettuccine_crepe",
    nameAr: "فوتوتشيني كريب بستاشيو فستق",
    nameEn: "Fototshini Pistachio Crepe",
    descAr: "شرائح كريب فوتوتشيني مغطاة بصوص الفستق الحلبي الفاخر مع بولة آيس كريم",
    descEn: "Crepe slices bathed in velvety pistachio sauce served with a scoop of ice cream",
    badge: "signature",
    price: 125
  },
  {
    id: "fettuccine_kinder",
    category: "fettuccine_crepe",
    nameAr: "فوتوتشيني كريب كيندر كريمي",
    nameEn: "Fototshini Kinder Crepe",
    descAr: "شرائح كريب فوتوتشيني مغطاة بصوص شوكولاتة كيندر الناعمة مع آيس كريم",
    descEn: "Crepe slices draped in luscious Kinder chocolate sauce with creamy ice cream",
    badge: "special",
    price: 115
  },

  // ==================== 6. DUBAI CAKE (كيكة دبي بالكنافة المقرمشة) ====================
  {
    id: "dubai_pistachio_cake",
    category: "dubai_cake",
    nameAr: "كيكة دبي بستاشيو وكنافة مقرمشة (الترند الأصلي)",
    nameEn: "Dubai Pistachio Kunafa Cake",
    descAr: "كيكة شوكولاتة فادج غنية بطبقة كنافة مقرمشة بالفستق الحلبي وصوص بستاشيو أصيل",
    descEn: "Decadent chocolate cake layered with traditional pistachio kunafa and topped with rich pistachio sauce",
    badge: "signature",
    price: 140
  },
  {
    id: "dubai_nutella_cake",
    category: "dubai_cake",
    nameAr: "كيكة دبي نوتيلا وكنافة",
    nameEn: "Dubai Nutella Kunafa Cake",
    descAr: "كيكة فادج شوكولاتة مع طبقة كنافة مقرمشة محشوة بصوص النوتيلا الغني",
    descEn: "Chocolate fudge cake with a crispy layer of pistachio kunafa and rich Nutella sauce",
    badge: "popular",
    price: 120
  },
  {
    id: "dubai_lotus_cake",
    category: "dubai_cake",
    nameAr: "كيكة دبي لوتس وكنافة",
    nameEn: "Dubai Lotus Kunafa Cake",
    descAr: "كيكة فادج مع كنافة مقرمشة وصوص زبدة اللوتس الذهبية الفاخرة",
    descEn: "Chocolate fudge cake with crunchy kunafa and caramelized Lotus Biscoff sauce",
    price: 120
  },
  {
    id: "dubai_kinder_cake",
    category: "dubai_cake",
    nameAr: "كيكة دبي كيندر وكنافة",
    nameEn: "Dubai Kinder Kunafa Cake",
    descAr: "كيكة فادج مع كنافة مقرمشة وطبقة وفيرة من صوص شوكولاتة كيندر اللذيذ",
    descEn: "Chocolate fudge cake with crispy kunafa and creamy Kinder chocolate sauce",
    badge: "special",
    price: 130
  },

  // ==================== 7. FRAPPE & FRAPPUCCINO (فرابتشينو وفرابيه) ====================
  {
    id: "frappe_vanilla",
    category: "frappe",
    nameAr: "فرابيه فانيليا مثلج",
    nameEn: "Frappe Vanilla",
    descAr: "شوت اسبريسو قهوة مثلجة مخفوقة مع آيس كريم الحليب الكثيف ونكهة الفانيليا",
    descEn: "Espresso shot iced coffee blended with smooth ice cream and fresh milk",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "frappe_caramel",
    category: "frappe",
    nameAr: "فرابيه كراميل كرانشي",
    nameEn: "Frappe Caramel",
    descAr: "اسبريسو مثلج مخفوق مع الحليب، الآيس كريم وصوص الكراميل المركز",
    descEn: "Iced coffee espresso blended with ice cream, milk and caramel sauce swirl",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 55 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 65 }
    ]
  },
  {
    id: "frappe_white_mocha",
    category: "frappe",
    nameAr: "فرابيه وايت موكا مع كريمة مخفوقة",
    nameEn: "Frappe White Mocha",
    descAr: "شوكولاتة بيضاء، صوص موكا، اسبريسو، كريمة مخفوقة مثلجة تعلو الكوب",
    descEn: "White chocolate, mocha sauce, bold espresso, whipped cream and crushed ice",
    badge: "special",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 60 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 70 }
    ]
  },
  {
    id: "frappe_latte",
    category: "frappe",
    nameAr: "فرابيه لاتيه مثلج",
    nameEn: "Frappe Latte",
    descAr: "قهوة لاتيه مثلجة مخفوقة مع الآيس كريم والحليب البارد الكريمي",
    descEn: "Iced coffee latte with blended ice cream and fresh cold milk",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "frappe_mocha",
    category: "frappe",
    nameAr: "فرابيه موكا شوكليت",
    nameEn: "Frappe Mocha",
    descAr: "شوت اسبريسو مثلج مخفوق مع الآيس كريم وصوص الشوكولاتة اللذيذة",
    descEn: "Espresso iced coffee blended with creamy ice cream and chocolate sauce",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 55 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 65 }
    ]
  },
  {
    id: "frappuccino_plain",
    category: "frappe",
    nameAr: "فرابتشينو كلاسيك سادة",
    nameEn: "Plain Frappuccino",
    descAr: "فرابتشينو قهوة كلاسيكية مخفوقة بالثلج والحليب بدون إضافات سكرية",
    descEn: "Classic coffee frappuccino blended ice and fresh milk",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 45 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 55 }
    ]
  },
  {
    id: "frappuccino_nutella",
    category: "frappe",
    nameAr: "فرابتشينو نوتيلا رويال",
    nameEn: "Nutella Frappuccino",
    descAr: "فرابتشينو قهوة مثلجة غارقة في شوكولاتة نوتيلا الإيطالية والكريمة",
    descEn: "Decadent iced coffee frappuccino loaded with real Nutella hazelnut spread",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 60 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 70 }
    ]
  },
  {
    id: "frappuccino_lotus",
    category: "frappe",
    nameAr: "فرابتشينو لوتس بيسكوف",
    nameEn: "Lotus Frappuccino",
    descAr: "فرابتشينو ممزوج بزبدة اللوتس وصوص الكراميل مع رشة بسكويت مطحون",
    descEn: "Iced frappuccino infused with sweet caramelized Lotus Biscoff biscuit flavor",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 60 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 70 }
    ]
  },

  // ==================== 8. MILKSHAKE (ميلك شيك طبيعي) ====================
  {
    id: "milkshake_oreo",
    category: "milkshake",
    nameAr: "ميلك شيك أوريو كوكيز",
    nameEn: "Milkshake Oreo",
    descAr: "ميلك شيك كريمي مخفوق ببسكويت أوريو كامل وصوص شوكولاتة",
    descEn: "Creamy thick milkshake loaded with real Oreo cookies",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "milkshake_nutella",
    category: "milkshake",
    nameAr: "ميلك شيك نوتيلا شوكولاتة",
    nameEn: "Milkshake Nutella",
    descAr: "ميلك شيك كثيف غني بطعم شوكولاتة النوتيلا الكريمة الفاخرة",
    descEn: "Creamy milkshake blended with rich chocolate Nutella flavor",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "milkshake_lotus",
    category: "milkshake",
    nameAr: "ميلك شيك لوتس بيسكوف",
    nameEn: "Milkshake Lotus",
    descAr: "ميلك شيك مخفوق بنكهة زبدة وبسكويت لوتس البلجيكي الأصلي",
    descEn: "Creamy milkshake with caramelized Lotus biscuit flavor",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "milkshake_pistachio",
    category: "milkshake",
    nameAr: "ميلك شيك بستاشيو فستق",
    nameEn: "Milkshake Pistachio",
    descAr: "ميلك شيك فستق حلبي فاخر مخفوق بكريمة الحليب النقية",
    descEn: "Creamy decadent milkshake with rich pistachio creamy flavor",
    badge: "signature",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 60 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 70 }
    ]
  },
  {
    id: "milkshake_strawberry",
    category: "milkshake",
    nameAr: "ميلك شيك فراولة طبيعية",
    nameEn: "Milkshake Strawberry",
    descAr: "ميلك شيك الفراولة الطازجة المخفوقة مع آيس كريم الفانيليا والحليب",
    descEn: "Creamy milkshake with sweet fresh strawberry flavor",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "milkshake_caramel",
    category: "milkshake",
    nameAr: "ميلك شيك كراميل ذهبي",
    nameEn: "Milkshake Caramel",
    descAr: "ميلك شيك كريمي بطعم الكراميل الفاخر والآيس كريم الناعم",
    descEn: "Creamy rich milkshake with golden caramel flavor",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "milkshake_chocolate",
    category: "milkshake",
    nameAr: "ميلك شيك شوكولاتة بلجيكية",
    nameEn: "Milkshake Chocolate",
    descAr: "ميلك شيك غني بنكهة الشوكولاتة الداكنة الكثيفة",
    descEn: "Creamy milkshake made with rich chocolate flavoring",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "milkshake_berry",
    category: "milkshake",
    nameAr: "ميلك شيك توت بري (بلوبيري)",
    nameEn: "Milkshake Berry",
    descAr: "ميلك شيك التوت البري المنعش الممزوج مع الحليب والآيس كريم",
    descEn: "Creamy berries milkshake bursting with wild berry flavor",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },
  {
    id: "milkshake_kinder",
    category: "milkshake",
    nameAr: "ميلك شيك كيندر شوكليت",
    nameEn: "Kinder Milkshake",
    descAr: "ميلك شيك كيندر شوكولاتة ناعم مع صوص الحليب والشوكولاتة الإيطالية",
    descEn: "Creamy decadent milkshake with authentic Kinder chocolate flavor",
    badge: "special",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 55 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 65 }
    ]
  },
  {
    id: "milkshake_vanilla",
    category: "milkshake",
    nameAr: "ميلك شيك فانيليا بيور",
    nameEn: "Vanilla Milkshake",
    descAr: "آيس كريم فانيليا كريمي مخفوق مع الحليب الطازج لنعومة وانتعاش فائق",
    descEn: "Creamy vanilla ice cream blended with smooth milk to create a refreshing classic",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "milkshake_mango",
    category: "milkshake",
    nameAr: "ميلك شيك مانجو استوائي",
    nameEn: "Mango Milkshake",
    descAr: "مانجو طبيعي مخفوق مع آيس كريم الفانيليا والحليب البارد",
    descEn: "Natural tropical mango blended with creamy vanilla ice cream",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "milkshake_hohos",
    category: "milkshake",
    nameAr: "ميلك شيك هوهوز كيك",
    nameEn: "Hohos Milkshake",
    descAr: "كيك هوهوز شوكولاتة مخفوق مع الحليب وصوص الشوكولاتة الغني",
    descEn: "Milkshake blended with Hohos chocolate roll cakes and cream",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 50 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 60 }
    ]
  },

  // ==================== 9. QASHTOOTA (قشطوطة فاخرة) ====================
  {
    id: "qashtoota_pistachio",
    category: "qashtoota",
    nameAr: "قشطوطة بستاشيو فستق حلبي",
    nameEn: "Pistachio Qashtoota",
    descAr: "كيكة فانيليا مشربة بالحليب ومغطاة بكريمة الفانيليا وصوص الفستق الحلبي الملكي",
    descEn: "Tender vanilla sponge soaked in milk, topped with rich vanilla cream and pistachio sauce",
    badge: "signature",
    price: 140
  },
  {
    id: "qashtoota_kinder",
    category: "qashtoota",
    nameAr: "قشطوطة كيندر شوكليت",
    nameEn: "Kinder Qashtoota",
    descAr: "كيكة فانيليا مشربة بالحليب تعلوها طبقة كريمة ناعمة وصوص كيندر اللذيذ",
    descEn: "Vanilla milk-soaked cake topped with velvety vanilla cream and Kinder sauce",
    badge: "popular",
    price: 120
  },
  {
    id: "qashtoota_caramel",
    category: "qashtoota",
    nameAr: "قشطوطة كراميل كلاسيك",
    nameEn: "Caramel Qashtoota",
    descAr: "كيكة إسفنجية مشربة بالحليب مع كريمة الفانيليا وصوص الكراميل المركز",
    descEn: "Vanilla cake soaked in milk, finished with vanilla cream and sweet caramel sauce",
    price: 95
  },
  {
    id: "qashtoota_nutella",
    category: "qashtoota",
    nameAr: "قشطوطة نوتيلا شوكولاتة",
    nameEn: "Nutella Qashtoota",
    descAr: "كيكة فانيليا مشربة بالحليب تعلوها طبقة غنية من شوكولاتة النوتيلا الكريمة",
    descEn: "Soaked vanilla sponge layered with rich vanilla cream and pure Nutella sauce",
    badge: "popular",
    price: 100
  },
  {
    id: "qashtoota_lotus",
    category: "qashtoota",
    nameAr: "قشطوطة لوتس بيسكوف",
    nameEn: "Lotus Qashtoota",
    descAr: "كيكة فانيليا مشربة بالحليب مع كريمة الفانيليا وصوص وبسكويت اللوتس المقرمش",
    descEn: "Vanilla cake soaked in milk, topped with fluffy cream and caramelized Lotus sauce",
    badge: "popular",
    price: 110
  },
  {
    id: "qashtoota_plain",
    category: "qashtoota",
    nameAr: "قشطوطة سادة بالقشطة والحليب",
    nameEn: "Plain Milk Qashtoota",
    descAr: "كيكة إسفنجية خفيفة مشربة بحليب وقشطة طبيعية غنية تعلوها كريمة الفانيليا",
    descEn: "Traditional vanilla sponge drenched in creamy sweet milk and topped with fresh cream",
    price: 85
  },
  {
    id: "qashtoota_mango",
    category: "qashtoota",
    nameAr: "قشطوطة مانجو قطع طازجة",
    nameEn: "Mango Qashtoota",
    descAr: "كيكة فانيليا مشربة بالحليب مغطاة بالكريمة وقطع المانجو الطبيعية الطازجة",
    descEn: "Vanilla cake soaked in milk, smothered in sweet cream and fresh ripe mango chunks",
    badge: "special",
    price: 100
  },
  {
    id: "qashtoota_chocolate",
    category: "qashtoota",
    nameAr: "قشطوطة شوكولاتة فادج",
    nameEn: "Chocolate Qashtoota",
    descAr: "كيكة ناعمة مشربة بالحليب ومغطاة بكريمة الفانيليا وصوص شوكولاتة غني وكثيف",
    descEn: "Delicate vanilla cake soaked in creamy milk and topped with velvety cream and decadent chocolate sauce",
    price: 95
  },
  {
    id: "qashtoota_oreo",
    category: "qashtoota",
    nameAr: "قشطوطة أوريو كوكيز",
    nameEn: "Oreo Qashtoota",
    descAr: "كيكة مشربة بالحليب مع كريمة الفانيليا وصوص شوكولاتة وقطع بسكويت أوريو الوفيرة",
    descEn: "Soft vanilla cake soaked in creamy milk, topped with vanilla cream, chocolate sauce and generous Oreo chunks",
    badge: "popular",
    price: 105
  },

  // ==================== 10. DESPACITO (ديسباسيتو كيك) ====================
  {
    id: "despacito_chocolate",
    category: "despacito",
    nameAr: "ديسباسيتو كيك شوكولاتة فادج",
    nameEn: "Chocolate Despacito",
    descAr: "كيكة شوكولاتة مشربة بصوص الشوكولاتة مع كرات شوكولاتة مقرمشة وحبيبات سبرنكلز",
    descEn: "Moist chocolate cake covered with chocolate sauce, crispy chocolate balls, chocolate chips and sprinkles",
    badge: "popular",
    price: 110
  },
  {
    id: "despacito_caramel",
    category: "despacito",
    nameAr: "ديسباسيتو كيك كراميل كرانشي",
    nameEn: "Caramel Despacito",
    descAr: "كيكة شوكولاتة مغطاة بصوص الكراميل الذهبي مع كرات كريسبي مقرمشة وحبيبات شوكولاتة",
    descEn: "Chocolate cake layered with rich caramel sauce, crispy chocolate balls and crunchy toppings",
    price: 110
  },
  {
    id: "despacito_oreo",
    category: "despacito",
    nameAr: "ديسباسيتو أوريو كرانشي",
    nameEn: "Oreo Despacito",
    descAr: "كيكة شوكولاتة فاخرة مغطاة بصوص شوكولاتة وبسكويت أوريو مطحون وكرات كريسبي ملونة",
    descEn: "Decadent chocolate cake covered in chocolate sauce, crushed Oreo cookies, chocolate crisp balls and colorful sprinkles",
    badge: "popular",
    price: 115
  },
  {
    id: "despacito_nutella",
    category: "despacito",
    nameAr: "ديسباسيتو نوتيلا رويال",
    nameEn: "Nutella Despacito",
    descAr: "كيكة شوكولاتة غارقة في شوكولاتة النوتيلا الكثيفة مع كرات مقرمشة وحبيبات شوكولاتة",
    descEn: "Decadent chocolate cake generously coated with rich Nutella sauce, crunchy chocolate balls and sprinkles",
    badge: "signature",
    price: 120
  },
  {
    id: "despacito_lotus",
    category: "despacito",
    nameAr: "ديسباسيتو لوتس بيسكوف",
    nameEn: "Lotus Despacito",
    descAr: "كيكة شوكولاتة مغطاة بصوص زبدة اللوتس الناعمة مع كرات كريسبي شوكولاتة مقرمشة",
    descEn: "Rich chocolate cake generously topped with smooth Lotus sauce, crunchy chocolate crisps and sprinkles",
    price: 125
  },
  {
    id: "despacito_kinder",
    category: "despacito",
    nameAr: "ديسباسيتو كيندر شوكليت",
    nameEn: "Kinder Despacito",
    descAr: "كيكة شوكولاتة مغطاة بصوص شوكولاتة كيندر اللذيذ مع كرات كريسبي وحبيبات شوكليت",
    descEn: "Chocolate cake covered with delicious Kinder chocolate sauce, crispy chocolate pearls and sprinkles",
    badge: "special",
    price: 135
  },

  // ==================== 11. BROWNIES & BITES (براونيز كيك وبايتس) ====================
  {
    id: "brownies_kinder_cream",
    category: "brownies",
    nameAr: "براونيز كيندر بالكريمة",
    nameEn: "Kinder Brownies with Cream",
    descAr: "كيكة براونيز شوكولاتة مشربة تعلوها طبقة كريمة غنية وصوص كيندر شوكليت",
    descEn: "Rich chocolate brownie cake soaked with cream layer on top and decadent Kinder sauce",
    badge: "special",
    price: 125
  },
  {
    id: "brownies_nutella_cream",
    category: "brownies",
    nameAr: "براونيز نوتيلا بالكريمة",
    nameEn: "Nutella Brownies with Cream",
    descAr: "كيكة براونيز فادج مع طبقة كريمة وصوص نوتيلا إيطالي وفير",
    descEn: "Fudge brownie cake layered with velvety cream and warm Nutella sauce",
    badge: "popular",
    price: 120
  },
  {
    id: "brownies_lotus_cream",
    category: "brownies",
    nameAr: "براونيز لوتس بالكريمة",
    nameEn: "Lotus Brownies with Cream",
    descAr: "براونيز شوكولاتة مع طبقة كريمة وصوص زبدة اللوتس وبسكويت مقرمش",
    descEn: "Rich chocolate brownie with cream and smooth caramelized Lotus Biscoff sauce",
    price: 120
  },
  {
    id: "brownies_pistachio_cream",
    category: "brownies",
    nameAr: "براونيز بستاشيو بالكريمة",
    nameEn: "Pistachio Brownies with Cream",
    descAr: "براونيز كيك فاخر مع طبقة كريمة وصوص الفستق الحلبي المركز",
    descEn: "Decadent chocolate brownie topped with thick cream and Sicilian pistachio sauce",
    badge: "signature",
    price: 135
  },
  {
    id: "brownies_bites_chocolate",
    category: "brownies",
    nameAr: "براونيز كيك بايتس شوكولاتة (علبة)",
    nameEn: "Chocolate Brownies Cake Bites",
    descAr: "قطع براونيز فادج صغيرة مغمورة في صوص الشوكولاتة اللذيذة",
    descEn: "Bite-sized fudge chocolate brownies drenched in decadent chocolate syrup",
    price: 45
  },
  {
    id: "brownies_bites_nutella",
    category: "brownies",
    nameAr: "براونيز كيك بايتس نوتيلا (علبة)",
    nameEn: "Nutella Brownies Cake Bites",
    descAr: "مكعبات براونيز شوكولاتة بايتس مغطاة بصوص شوكولاتة النوتيلا",
    descEn: "Fudge brownie bites smothered in warm Italian Nutella sauce",
    badge: "popular",
    price: 50
  },
  {
    id: "brownies_bites_lotus",
    category: "brownies",
    nameAr: "براونيز كيك بايتس لوتس (علبة)",
    nameEn: "Lotus Brownies Cake Bites",
    descAr: "مكعبات براونيز بايتس لذيذة مغطاة بصوص زبدة وبسكويت اللوتس",
    descEn: "Bite-sized brownie pieces topped with creamy Lotus Biscoff spread",
    price: 50
  },

  // ==================== 12. TAJEN (طاجن السعادة الساخن مع آيس كريم) ====================
  {
    id: "tajen_pistachio",
    category: "tajen",
    nameAr: "طاجن بستاشيو فستق مع آيس كريم",
    nameEn: "Pistachio Tajen with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة الساخن غارق في صوص الفستق الحلبي مع بولة آيس كريم مثلجة",
    descEn: "Warm chocolate cake tajen bathed in rich pistachio sauce and topped with ice cream",
    badge: "signature",
    price: 110
  },
  {
    id: "tajen_kinder",
    category: "tajen",
    nameAr: "طاجن كيندر شوكليت مع آيس كريم",
    nameEn: "Kinder Tajine with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة الذائب في صوص شوكولاتة كيندر الساخن مع آيس كريم صنداي",
    descEn: "Warm chocolate cake tajen smothered in Kinder chocolate sauce with creamy ice cream",
    badge: "special",
    price: 100
  },
  {
    id: "tajen_nutella",
    category: "tajen",
    nameAr: "طاجن نوتيلا شوكولاتة مع آيس كريم",
    nameEn: "Nutella Tajen with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة الغارق في شوكولاتة النوتيلا الساخنة مع بولة آيس كريم",
    descEn: "Baked chocolate cake drenched in hot Nutella hazelnut sauce and topped with cold ice cream",
    badge: "popular",
    price: 95
  },
  {
    id: "tajen_lotus",
    category: "tajen",
    nameAr: "طاجن لوتس بيسكوف مع آيس كريم",
    nameEn: "Lotus Tajine with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة مع صوص زبدة اللوتس الساخنة وبسكويت اللوتس مع آيس كريم",
    descEn: "Warm chocolate cake covered in melted Lotus sauce with a scoop of vanilla ice cream",
    badge: "popular",
    price: 90
  },
  {
    id: "tajen_white_chocolate",
    category: "tajen",
    nameAr: "طاجن شوكولاتة بيضاء مع آيس كريم",
    nameEn: "White Chocolate Tajen with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة مغطى بالشوكولاتة البيضاء السويسرية الذائبة مع آيس كريم",
    descEn: "Chocolate cake topped with warm melted white chocolate sauce and ice cream",
    price: 90
  },
  {
    id: "tajen_chocolate",
    category: "tajen",
    nameAr: "طاجن شوكولاتة فادج كلاسيك",
    nameEn: "Chocolate Tajen with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة الكلاسيكي الغارق في صوص الشوكولاتة مع بولة آيس كريم",
    descEn: "Classic warm chocolate fudge cake in a bowl with rich chocolate sauce and ice cream",
    price: 80
  },
  {
    id: "tajen_caramel",
    category: "tajen",
    nameAr: "طاجن كراميل ذهبي مع آيس كريم",
    nameEn: "Caramel Tajen with Ice Cream",
    descAr: "طاجن كيك الشوكولاتة مع صوص الكراميل الساخن وبولة آيس كريم صنداي",
    descEn: "Chocolate cake tajen drizzled with decadent warm caramel sauce and cold ice cream",
    price: 80
  },

  // ==================== 13. CHEESECAKE (تشيز كيك نيويورك الفاخر) ====================
  {
    id: "cheesecake_strawberry",
    category: "cheesecake",
    nameAr: "تشيز كيك فراولة طازجة",
    nameEn: "Strawberry Cheesecake",
    descAr: "تشيز كيك مخبوز بقوام كريمي ناعم مع صوص الفراولة الطبيعية وقاعدة بسكويت مقرمشة",
    descEn: "Classic creamy New York cheesecake topped with natural strawberry compote",
    badge: "popular",
    price: 60
  },
  {
    id: "cheesecake_blueberry",
    category: "cheesecake",
    nameAr: "تشيز كيك توت أزرق (بلوبيري)",
    nameEn: "Blueberry Cheesecake",
    descAr: "تشيز كيك كريمي فاخر مغطى بصوص التوت الأزرق المنعش الغني بحبات التوت",
    descEn: "Rich baked cheesecake crowned with wild blueberry fruit sauce",
    badge: "popular",
    price: 60
  },
  {
    id: "cheesecake_chocolate",
    category: "cheesecake",
    nameAr: "تشيز كيك شوكولاتة بلجيكية",
    nameEn: "Chocolate Cheesecake",
    descAr: "تشيز كيك غني مغطى بصوص الشوكولاتة الداكنة الفاخرة",
    descEn: "Velvety cream cheesecake topped with dark Belgian chocolate sauce",
    price: 60
  },
  {
    id: "cheesecake_mango",
    category: "cheesecake",
    nameAr: "تشيز كيك مانجو استوائي",
    nameEn: "Mango Cheesecake",
    descAr: "تشيز كيك كريمي مع صوص المانجو الاستوائي الطازج والمنعش",
    descEn: "Creamy cheesecake layered with sweet tropical mango sauce",
    price: 60
  },
  {
    id: "cheesecake_caramel",
    category: "cheesecake",
    nameAr: "تشيز كيك كراميل ذهبي",
    nameEn: "Caramel Cheesecake",
    descAr: "تشيز كيك ناعم بقاعدة بسكويت زبدة مغطى بصوص الكراميل اللذيذ",
    descEn: "Smooth cream cheesecake finished with rich golden caramel sauce",
    price: 60
  },
  {
    id: "cheesecake_nutella",
    category: "cheesecake",
    nameAr: "تشيز كيك نوتيلا شوكولاتة البندق",
    nameEn: "Nutella Cheesecake",
    descAr: "تشيز كيك نيويورك الفاخر مغطى بطبقة سميكة من شوكولاتة نوتيلا الإيطالية",
    descEn: "Artisanal cheesecake generously topped with pure Italian Nutella spread",
    badge: "special",
    price: 70
  },
  {
    id: "cheesecake_lotus",
    category: "cheesecake",
    nameAr: "تشيز كيك لوتس بيسكوف",
    nameEn: "Lotus Biscoff Cheesecake",
    descAr: "تشيز كيك مميز بقاعدة بسكويت اللوتس وصوص زبدة اللوتس البلجيكية الأصيلة",
    descEn: "Gourmet cheesecake with Lotus biscuit crust and warm Lotus Biscoff spread",
    badge: "signature",
    price: 70
  },

  // ==================== 14. SMOOTHIES & MOJITOS (سموزي ومخيتو منعش) ====================
  {
    id: "smoothie_mango",
    category: "smoothie_mojito",
    nameAr: "سموزي مانجو استوائي مثلج",
    nameEn: "Mango Smoothie",
    descAr: "قطع مانجو طبيعية مثلجة مخفوقة لقوام سميك ومنعش للغاية",
    descEn: "100% natural mango blended with crushed ice for peak tropical freshness",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 30 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 35 }
    ]
  },
  {
    id: "smoothie_strawberry",
    category: "smoothie_mojito",
    nameAr: "سموزي فراولة طبيعية",
    nameEn: "Strawberry Smoothie",
    descAr: "فراولة طازجة مجمدة مخفوقة مع الثلج ونكهة منعشة تروي العطش",
    descEn: "Sweet ripe strawberries pureed with ice for a cool thirst quencher",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 30 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 35 }
    ]
  },
  {
    id: "smoothie_blueberry",
    category: "smoothie_mojito",
    nameAr: "سموزي توت أزرق (بلوبيري)",
    nameEn: "Blueberry Smoothie",
    descAr: "حبات التوت الأزرق الطبيعية المخفوقة مع الثلج لنكهة فاكهية ساحرة",
    descEn: "Wild blueberries blended with ice into a deep purple antioxidant smoothie",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 35 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 40 }
    ]
  },
  {
    id: "mojito_lemon_mint",
    category: "smoothie_mojito",
    nameAr: "مخيتو ليمون نعناع كلاسيك",
    nameEn: "Classic Lemon Mint Mojito",
    descAr: "شرائح ليمون طازجة وأوراق نعناع خضراء مع مياه صودا مثلجة",
    descEn: "Zesty freshly muddled lemons and mint leaves topped with sparkling soda and ice",
    badge: "popular",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 30 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 35 }
    ]
  },
  {
    id: "mojito_mango",
    category: "smoothie_mojito",
    nameAr: "مخيتو مانجو فوار",
    nameEn: "Mango Mojito",
    descAr: "نكهة المانجو الاستوائية مع الليمون والنعناع والمياه الفوارة المثلجة",
    descEn: "Tropical mango puree with muddled mint, lime wedges and sparkling soda",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 30 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 35 }
    ]
  },
  {
    id: "mojito_strawberry",
    category: "smoothie_mojito",
    nameAr: "مخيتو فراولة فوار",
    nameEn: "Strawberry Mojito",
    descAr: "فراولة طازجة مع الليمون وأوراق النعناع والمياه الغازية المنعشة",
    descEn: "Crushed sweet strawberries, fresh mint and lime with sparkling bubbles",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 30 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 35 }
    ]
  },
  {
    id: "mojito_blueberry",
    category: "smoothie_mojito",
    nameAr: "مخيتو توت أزرق (بلوبيري)",
    nameEn: "Blueberry Mojito",
    descAr: "توت أزرق نقي مع الليمون والنعناع المثلج والصودا الفوارة",
    descEn: "Wild blueberries muddled with fresh mint, lime and sparkling cold soda",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 35 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 40 }
    ]
  },
  {
    id: "drink_special_oreo",
    category: "smoothie_mojito",
    nameAr: "مشروب أوريو مثلج خاص",
    nameEn: "Oreo Specialty Shake Drink",
    descAr: "مشروب حليب مثلج مخفوق ببسكويت أوريو وصوص شوكولاتة",
    descEn: "Cold milk drink blended with crunchy Oreo cookies and chocolate dip",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 35 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 45 }
    ]
  },
  {
    id: "drink_special_hohos",
    category: "smoothie_mojito",
    nameAr: "مشروب هوهوز مثلج خاص",
    nameEn: "Hohos Specialty Shake Drink",
    descAr: "مشروب مثلج بكيك هوهوز الشوكولاتة وحليب مكثف لذيذ",
    descEn: "Cold chocolate roll cake drink with chilled milk and chocolate fudge",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 35 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 45 }
    ]
  },
  {
    id: "drink_special_pistachio",
    category: "smoothie_mojito",
    nameAr: "مشروب بستاشيو فاخر خاص",
    nameEn: "Pistachio Specialty Drink",
    descAr: "مشروب مثلج غني بكريمة وصوص الفستق الحلبي مع الحليب البارد",
    descEn: "Signature cold milk drink infused with pure Sicilian pistachio cream",
    badge: "signature",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },
  {
    id: "drink_special_moro",
    category: "smoothie_mojito",
    nameAr: "مشروب مورو شوكليت خاص",
    nameEn: "Moro Chocolate Drink",
    descAr: "مشروب شوكولاتة مورو بالكراميل والشوكولاتة بالحليب المثلج",
    descEn: "Specialty chilled chocolate drink blended with caramel Moro chocolate bar",
    options: [
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium (M)", price: 40 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large (L)", price: 50 }
    ]
  },

  // ==================== 15. HOT DRINKS (مشروبات ساخنة) ====================
  {
    id: "hot_turkish_coffee",
    category: "hot_drinks",
    nameAr: "قهوة تركي أصلية",
    nameEn: "Turkish Coffee",
    descAr: "بن تركي فاخر محوج أو سادة محضر على الطريقة الأصيلة بوجه كريمي كثيف",
    descEn: "Authentic brewed Turkish coffee with rich thick crema (Plain / Cardamom)",
    price: 20
  },
  {
    id: "hot_french_coffee",
    category: "hot_drinks",
    nameAr: "قهوة فرنساوي بالحليب",
    nameEn: "French Coffee",
    descAr: "بن فرنساوي فاخر محضر بالحليب الطازج لنعومة ومذاق دافئ",
    descEn: "Smooth French coffee brewed with steaming rich whole milk",
    price: 30
  },
  {
    id: "hot_espresso",
    category: "hot_drinks",
    nameAr: "اسبريسو إيطالي سينجل",
    nameEn: "Espresso Single",
    descAr: "شوت اسبريسو إيطالي قوي ومركز مع كريما ذهبية كثيفة",
    descEn: "Single shot of pure Italian espresso with rich crema",
    price: 30
  },
  {
    id: "hot_macchiato",
    category: "hot_drinks",
    nameAr: "اسبريسو ميكاتو",
    nameEn: "Espresso Macchiato",
    descAr: "شوت اسبريسو غني ممزوج بلمسة من رغوة الحليب المبخر الكثيفة",
    descEn: "Espresso marked with a dollop of velvety steamed milk foam",
    price: 35
  },
  {
    id: "hot_americano_plain",
    category: "hot_drinks",
    nameAr: "أمريكان كوفي سادة",
    nameEn: "Americano Plain",
    descAr: "اسبريسو ممزوج بالماء الساخن لنكهة قهوة سوداء أصيلة ونقية",
    descEn: "Fresh espresso diluted with steaming water for a smooth black coffee",
    price: 35
  },
  {
    id: "hot_americano_milk",
    category: "hot_drinks",
    nameAr: "أمريكان كوفي بالحليب",
    nameEn: "Americano with Milk",
    descAr: "قهوة أمريكان ساخنة مع الحليب المبخر الناعم",
    descEn: "Fresh brewed Americano paired with smooth steamed milk",
    price: 40
  },
  {
    id: "hot_cappuccino",
    category: "hot_drinks",
    nameAr: "كابتشينو إيطالي رغوة كثيفة",
    nameEn: "Italian Cappuccino",
    descAr: "اسبريسو متوازن مع حليب مبخر ورغوة حليب كريمية وفيرة ورشة كاكاو",
    descEn: "Espresso with equal parts steamed milk and dense creamy milk foam",
    badge: "popular",
    price: 45
  },
  {
    id: "hot_latte",
    category: "hot_drinks",
    nameAr: "كافيه لاتيه ساخن",
    nameEn: "Caffe Latte",
    descAr: "شوت اسبريسو إيطالي مع حليب ساخن مبخر بطبقة رقيقة من الفوم",
    descEn: "Bold espresso blended with silky steamed milk and a light foam layer",
    price: 45
  },
  {
    id: "hot_mocha",
    category: "hot_drinks",
    nameAr: "كافيه موكا شوكليت",
    nameEn: "Caffe Mocha",
    descAr: "اسبريسو وحليب مبخر ممزوج بصوص الشوكولاتة الغنية والكريمة",
    descEn: "Espresso, dark chocolate sauce and steamed milk finished with cream",
    price: 50
  },
  {
    id: "hot_chocolate",
    category: "hot_drinks",
    nameAr: "هوت شوكليت كريمي",
    nameEn: "Hot Chocolate",
    descAr: "كاكاو بلجيكي ساخن ومكثف بالحليب الطازج الدافئ",
    descEn: "Rich velvety hot chocolate crafted with pure cocoa and whole milk",
    badge: "popular",
    price: 40
  },
  {
    id: "hot_oreo",
    category: "hot_drinks",
    nameAr: "هوت أوريو ساخن بالكريمة",
    nameEn: "Hot Oreo Drink",
    descAr: "مشروب شوكولاتة ساخن ممزوج ببسكويت أوريو وكريمة دافئة",
    descEn: "Steaming hot chocolate drink infused with real crushed Oreo cookies",
    price: 45
  },
  {
    id: "hot_lotus",
    category: "hot_drinks",
    nameAr: "هوت لوتس ساخن دافئ",
    nameEn: "Hot Lotus Drink",
    descAr: "مشروب حليب ساخن ممزوج بزبدة وبسكويت لوتس بيسكوف اللذيذة",
    descEn: "Comforting hot milk drink infused with melted Lotus Biscoff spread",
    price: 45
  },
  {
    id: "hot_nutella",
    category: "hot_drinks",
    nameAr: "هوت نوتيلا شوكولاتة بندق",
    nameEn: "Hot Nutella Drink",
    descAr: "مشروب نوتيلا ساخن كثيف ومحضر بأصالة البندق والشوكولاتة الإيطالية",
    descEn: "Decadent hot drink made with real melted Nutella hazelnut chocolate",
    badge: "popular",
    price: 45
  },

  // ==================== 16. ADD-ONS & EXTRAS (إضافات وصوصات) ====================
  {
    id: "addon_extra_sauce",
    category: "add_ons",
    nameAr: "إكسترا صوص إضافي (لوتس / نوتيلا / كراميل / شوكليت)",
    nameEn: "Extra Sauce (Lotus / Nutella / Caramel / Chocolate)",
    descAr: "صوص إضافي فاخر حسب اختيارك لتزيين حلوياتك ومشروباتك",
    descEn: "Extra portion of gourmet dessert sauce of your choice",
    price: 7
  },
  {
    id: "addon_cream",
    category: "add_ons",
    nameAr: "كريمة مخفوقة إضافية (ويبينج كريم)",
    nameEn: "Extra Whipped Cream",
    descAr: "طبقة إضافية من الكريمة المخفوقة الطازجة الناعمة",
    descEn: "A generous swirl of fresh chilled whipped cream",
    price: 10
  },
  {
    id: "addon_ice_cream_scoop",
    category: "add_ons",
    nameAr: "بولة آيس كريم إضافية (فانيليا)",
    nameEn: "Extra Ice Cream Scoop",
    descAr: "بولة إضافية من آيس كريم الفانيليا الطبيعي الكريمي الناعم",
    descEn: "Extra scoop of creamy all-natural vanilla ice cream",
    price: 10
  },
  {
    id: "addon_nuts",
    category: "add_ons",
    nameAr: "مكسرات فاخرة مشكلة",
    nameEn: "Mixed Premium Nuts Topping",
    descAr: "تشكيلة من المكسرات المحمصة الفاخرة المقرمشة",
    descEn: "Crunchy roasted mixed premium nuts topping",
    price: 20
  },
  {
    id: "addon_mineral_water",
    category: "add_ons",
    nameAr: "مياه معدنية طبيعية صغيرة",
    nameEn: "Natural Mineral Water (Small)",
    descAr: "زجاجة مياه معدنية نقية صغيرة معقمة ومبردة",
    descEn: "Chilled bottle of pure natural mineral water (small)",
    price: 8
  }
];

// App State Management
let currentLang = localStorage.getItem("lr_menu_lang") || "ar";
let currentCategory = "all";
let currentSearchQuery = "";
let cart = JSON.parse(localStorage.getItem("lr_menu_cart") || "[]");
let selectedBranch = BRANCHES_DATA[0];
let qrCodeInstance = null;

// Initialize Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  setupEventListeners();
  renderCategoryTabs();
  renderMenuItems();
  renderBranches();
  renderBranchRadioList();
  updateCartUI();
  initQR();
  checkTableInURL();
});

// Category definition for tabs
const CATEGORIES_LIST = [
  { id: "all", labelKey: "tabAll" },
  { id: "sundae", labelKey: "tabSundae" },
  { id: "boba", labelKey: "tabBoba" },
  { id: "iced_coffee", labelKey: "tabIcedCoffee" },
  { id: "brownie_crepe", labelKey: "tabBrownieCrepe" },
  { id: "fettuccine_crepe", labelKey: "tabFettuccineCrepe" },
  { id: "dubai_cake", labelKey: "tabDubaiCake" },
  { id: "frappe", labelKey: "tabFrappe" },
  { id: "milkshake", labelKey: "tabMilkshake" },
  { id: "qashtoota", labelKey: "tabQashtoota" },
  { id: "despacito", labelKey: "tabDespacito" },
  { id: "brownies", labelKey: "tabBrownies" },
  { id: "tajen", labelKey: "tabTajen" },
  { id: "cheesecake", labelKey: "tabCheesecake" },
  { id: "smoothie_mojito", labelKey: "tabSmoothieMojito" },
  { id: "hot_drinks", labelKey: "tabHotDrinks" },
  { id: "add_ons", labelKey: "tabAddOns" }
];

// Setup Event Listeners
function setupEventListeners() {
  // Language toggle button
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      toggleLanguage();
    });
  }

  // Search input live filter
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderMenuItems();
    });
  }

  // Modal open triggers
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-open-modal");
      openModal(modalId);
    });
  });

  // Modal close triggers
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  // Close modals when clicking backdrop
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Keyboard navigation (Escape closes active modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m.id));
    }
  });

  // Table selection in QR modal changes URL
  const qrTableSelect = document.getElementById("qrTableSelect");
  if (qrTableSelect) {
    qrTableSelect.addEventListener("change", (e) => {
      generateQRCode(e.target.value);
    });
  }

  // Order type radio change
  document.querySelectorAll("input[name='orderType']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      handleOrderTypeChange(e.target.value);
    });
  });
}

// Language Switching & Translation Engine
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lr_menu_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update static elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang] && I18N[lang][key]) {
      if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
        el.placeholder = I18N[lang][key];
      } else if (el.getAttribute("data-i18n-html") === "true" || I18N[lang][key].includes("<") || I18N[lang][key].includes("&")) {
        el.innerHTML = I18N[lang][key];
      } else {
        el.textContent = I18N[lang][key];
      }
    }
  });

  // Language toggle button text
  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = lang === "ar" ? "English" : "العربية";
  }

  // Re-render UI components with new language
  renderCategoryTabs();
  renderMenuItems();
  renderBranches();
  renderBranchRadioList();
  updateBranchDisplay();
  updateCartUI();
}

function toggleLanguage() {
  const newLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(newLang);
}

// Render Category Tabs
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsList");
  if (!container) return;

  container.innerHTML = CATEGORIES_LIST.map(cat => {
    const isActive = cat.id === currentCategory ? "active" : "";
    const label = I18N[currentLang][cat.labelKey] || cat.id;
    return `
      <button 
        type="button" 
        class="category-tab-btn ${isActive}" 
        onclick="selectCategory('${cat.id}')"
        data-cat-id="${cat.id}"
      >
        <span>${label}</span>
      </button>
    `;
  }).join("");
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderMenuItems();

  if (catId !== "all") {
    const targetBlock = document.getElementById(`cat_block_${catId}`);
    if (targetBlock) {
      targetBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

// Render Menu Items Grid
function renderMenuItems() {
  const gridContainer = document.getElementById("menuGrid");
  if (!gridContainer) return;

  let filtered = MENU_DATA;

  // Filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  // Filter by search query
  if (currentSearchQuery) {
    filtered = filtered.filter(item => {
      const nameAr = item.nameAr.toLowerCase();
      const nameEn = item.nameEn.toLowerCase();
      const descAr = (item.descAr || "").toLowerCase();
      const descEn = (item.descEn || "").toLowerCase();
      return nameAr.includes(currentSearchQuery) || 
             nameEn.includes(currentSearchQuery) || 
             descAr.includes(currentSearchQuery) || 
             descEn.includes(currentSearchQuery);
    });
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.2rem; margin-bottom: 0.75rem;">🔍</p>
        <p style="font-size: 1.15rem; font-weight: 700;">${currentLang === "ar" ? "لا توجد نتائج تطابق بحثك" : "No items match your search"}</p>
        <p style="font-size: 0.9rem;">${currentLang === "ar" ? "جرب البحث بكلمات أخرى أو اختر قسماً آخر من الأعلى" : "Try searching for another keyword or select a category"}</p>
      </div>
    `;
    return;
  }

  // If showing all, group by category
  if (currentCategory === "all" && !currentSearchQuery) {
    const grouped = {};
    filtered.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    let html = "";
    CATEGORIES_LIST.forEach(cat => {
      if (cat.id === "all" || !grouped[cat.id]) return;
      const items = grouped[cat.id];
      const catTitle = I18N[currentLang][cat.labelKey] || cat.id;

      html += `
        <div class="category-block" id="cat_block_${cat.id}" style="grid-column: 1 / -1;">
          <div class="category-header">
            <div class="category-title-wrap">
              <h2 class="category-title">${catTitle}</h2>
              <span class="category-count">${items.length} ${I18N[currentLang].itemsCountSuffix}</span>
            </div>
          </div>
          <div class="menu-grid">
            ${items.map(item => renderFoodCard(item)).join("")}
          </div>
        </div>
      `;
    });
    gridContainer.innerHTML = html;
  } else {
    gridContainer.innerHTML = filtered.map(item => renderFoodCard(item)).join("");
  }
}

// Render Individual Food Card
function renderFoodCard(item) {
  const name = currentLang === "ar" ? item.nameAr : item.nameEn;
  const desc = currentLang === "ar" ? item.descAr : item.descEn;
  const hasOptions = item.options && item.options.length > 0;
  const initialPrice = hasOptions ? item.options[0].price : item.price;

  let badgeHTML = "";
  if (item.badge) {
    const badgeKey = item.badge === "popular" ? "tagPopular" : 
                     item.badge === "special" ? "tagSpecial" : 
                     item.badge === "signature" ? "tagSignature" : "tagNew";
    const badgeText = I18N[currentLang][badgeKey] || item.badge;
    badgeHTML = `<span class="card-badge ${item.badge}">${badgeText}</span>`;
  }

  let optionsHTML = "";
  if (hasOptions) {
    optionsHTML = `
      <div class="food-options-group" id="options_${item.id}">
        ${item.options.map((opt, idx) => {
          const optLabel = currentLang === "ar" ? opt.labelAr : opt.labelEn;
          const isActive = idx === 0 ? "active" : "";
          return `
            <button 
              type="button" 
              class="option-pill-btn ${isActive}" 
              data-item-id="${item.id}"
              data-opt-key="${opt.key}"
              data-opt-price="${opt.price}"
              data-opt-label="${optLabel}"
              onclick="selectCardOption('${item.id}', '${opt.key}', ${opt.price})"
            >
              ${optLabel}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  return `
    <div class="food-card" id="card_${item.id}">
      <div class="food-card-header">
        ${badgeHTML ? `<div class="food-card-badge-wrap">${badgeHTML}</div>` : ""}
        <h3 class="food-card-title">${name}</h3>
        <p class="food-card-desc">${desc || ""}</p>
        ${optionsHTML}
      </div>

      <div class="food-card-footer">
        <div class="food-price-box">
          <span class="food-price-val" id="price_val_${item.id}">${initialPrice}</span>
          <span class="food-price-cur">${I18N[currentLang].egp}</span>
        </div>

        <button 
          type="button" 
          class="add-btn" 
          onclick="handleAddToCart('${item.id}')"
          title="${I18N[currentLang].addToOrder}"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
          </svg>
          <span>${I18N[currentLang].addToOrder}</span>
        </button>
      </div>
    </div>
  `;
}

// Handle Card Option / Size Selection
function selectCardOption(itemId, optKey, price) {
  const container = document.getElementById(`options_${itemId}`);
  if (!container) return;

  container.querySelectorAll(".option-pill-btn").forEach(btn => {
    if (btn.getAttribute("data-opt-key") === optKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const priceVal = document.getElementById(`price_val_${itemId}`);
  if (priceVal) {
    priceVal.textContent = price;
  }
}

// Add Item to Cart
function handleAddToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  let selectedOption = null;
  let finalPrice = item.price;

  if (item.options && item.options.length > 0) {
    const container = document.getElementById(`options_${itemId}`);
    const activeBtn = container ? container.querySelector(".option-pill-btn.active") : null;
    if (activeBtn) {
      const optKey = activeBtn.getAttribute("data-opt-key");
      selectedOption = item.options.find(o => o.key === optKey) || item.options[0];
      finalPrice = selectedOption.price;
    } else {
      selectedOption = item.options[0];
      finalPrice = selectedOption.price;
    }
  }

  const cartItemId = selectedOption ? `${item.id}_${selectedOption.key}` : item.id;
  const existingIndex = cart.findIndex(c => c.cartItemId === cartItemId);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      cartItemId: cartItemId,
      id: item.id,
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      optionKey: selectedOption ? selectedOption.key : null,
      optionLabelAr: selectedOption ? selectedOption.labelAr : null,
      optionLabelEn: selectedOption ? selectedOption.labelEn : null,
      price: finalPrice,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();

  // Subtle visual feedback
  const card = document.getElementById(`card_${itemId}`);
  if (card) {
    card.style.transform = "scale(0.98)";
    setTimeout(() => { card.style.transform = ""; }, 180);
  }
}

// Cart Storage & UI
function saveCart() {
  localStorage.setItem("lr_menu_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const orderTypeRadio = document.querySelector("input[name='orderType']:checked");
  const isDineIn = orderTypeRadio ? orderTypeRadio.value === "dine_in" : false;
  const serviceCharge = (isDineIn && subtotal > 0) ? Math.round(subtotal * 0.12) : 0;
  const finalTotal = subtotal + serviceCharge;

  // Header Cart Badge
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  });

  // Floating Cart Bar (Talabat / Elmenus Style)
  const floatBar = document.getElementById("floatingCartBar");
  const floatCount = document.getElementById("floatCartCount");
  const floatTotal = document.getElementById("floatCartTotal");

  if (floatBar && floatCount && floatTotal) {
    if (totalItems > 0) {
      floatCount.textContent = `${totalItems} ${I18N[currentLang].itemsCountSuffix}`;
      floatTotal.textContent = `${finalTotal} ${I18N[currentLang].egp}`;
      floatBar.classList.add("visible");
    } else {
      floatBar.classList.remove("visible");
    }
  }

  // Modal Cart List
  renderCartDrawerList(subtotal, isDineIn, serviceCharge, finalTotal);
}

function renderCartDrawerList(subtotal, isDineIn, serviceCharge, finalTotal) {
  const listContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  if (totalAmountEl) {
    if (isDineIn && serviceCharge > 0) {
      totalAmountEl.innerHTML = `
        <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 2px;">
          ${I18N[currentLang].subtotalLabel} ${subtotal} ${I18N[currentLang].egp} + 
          <span style="color: #ffd54f;">${serviceCharge} ${I18N[currentLang].egp} (${I18N[currentLang].hallServiceLabel})</span>
        </div>
        <div style="font-size: 1.35rem; font-weight: 900; color: #fff;">
          ${finalTotal} ${I18N[currentLang].egp}
        </div>
      `;
    } else {
      totalAmountEl.textContent = `${finalTotal} ${I18N[currentLang].egp}`;
    }
  }

  if (!listContainer) return;

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</p>
        <p style="font-size: 1.1rem; font-weight: 800; color: #fff;">${I18N[currentLang].emptyCartTitle}</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${I18N[currentLang].emptyCartDesc}</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = cart.map(item => {
    const name = currentLang === "ar" ? item.nameAr : item.nameEn;
    const optLabel = item.optionKey ? (currentLang === "ar" ? item.optionLabelAr : item.optionLabelEn) : "";
    const itemTotal = item.price * item.qty;

    return `
      <div class="cart-item-row">
        <div style="flex: 1; min-width: 0;">
          <div class="cart-item-title">${name}</div>
          ${optLabel ? `<div class="cart-item-option">(${optLabel})</div>` : ""}
          <div class="cart-item-price">${itemTotal} ${I18N[currentLang].egp}</div>
        </div>

        <div class="cart-qty-controls">
          <button type="button" class="qty-btn" onclick="updateItemQty('${item.cartItemId}', -1)">&minus;</button>
          <span class="qty-val">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="updateItemQty('${item.cartItemId}', 1)">&plus;</button>
        </div>
      </div>
    `;
  }).join("");
}

function updateItemQty(cartItemId, delta) {
  const itemIndex = cart.findIndex(c => c.cartItemId === cartItemId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

// Order Type Selection (Delivery, Pickup, Dine-in)
function handleOrderTypeChange(type) {
  const addressOrTableGroup = document.getElementById("addressOrTableGroup");
  const addressOrTableLabel = document.getElementById("addressOrTableLabel");
  const addressOrTableInput = document.getElementById("orderCustomerAddressOrTable");

  if (addressOrTableGroup && addressOrTableLabel && addressOrTableInput) {
    if (type === "dine_in") {
      addressOrTableLabel.textContent = currentLang === "ar" ? "رقم الطاولة في الصالة:" : "Dine-in Table Number:";
      addressOrTableInput.placeholder = I18N[currentLang].placeholderTable;
    } else if (type === "pickup") {
      addressOrTableLabel.textContent = currentLang === "ar" ? "ملاحظات الاستلام من الفرع:" : "Takeaway Pickup Notes:";
      addressOrTableInput.placeholder = currentLang === "ar" ? "مثال: استلام الساعة 8:00 مساءً" : "e.g. Pickup at 8:00 PM";
    } else {
      addressOrTableLabel.textContent = I18N[currentLang].customerAddressOrTable;
      addressOrTableInput.placeholder = I18N[currentLang].placeholderAddress;
    }
  }

  // Live recalculate cart total with 12% hall service if dine-in
  updateCartUI();
}

// WhatsApp Order Formatting & Dispatch
function sendOrderWhatsApp() {
  if (cart.length === 0) {
    alert(currentLang === "ar" ? "سلتك فارغة! يرجى اختيار بعض الأصناف أولاً." : "Your cart is empty! Please select some items first.");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const addressInput = document.getElementById("orderCustomerAddressOrTable");
  const notesInput = document.getElementById("orderCustomerNotes");
  const orderTypeRadio = document.querySelector("input[name='orderType']:checked");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const customerAddress = addressInput ? addressInput.value.trim() : "";
  const customerNotes = notesInput ? notesInput.value.trim() : "";
  const orderType = orderTypeRadio ? orderTypeRadio.value : "delivery";

  if (!customerName) {
    alert(currentLang === "ar" ? "يرجى إدخال الاسم الكريم" : "Please enter your name");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!customerPhone) {
    alert(currentLang === "ar" ? "يرجى إدخال رقم الموبايل" : "Please enter your phone number");
    if (phoneInput) phoneInput.focus();
    return;
  }

  const branchName = currentLang === "ar" ? selectedBranch.nameAr : selectedBranch.nameEn;
  const orderTypeLabel = orderType === "dine_in" 
    ? (currentLang === "ar" ? "تناول في الصالة (خدمة 12%) 🍨" : "Dine-in Table (12% Service) 🍨") 
    : orderType === "pickup" 
    ? (currentLang === "ar" ? "استلام من المطعم (تيك أواي) 🛍️" : "Takeaway / Pickup 🛍️") 
    : (currentLang === "ar" ? "توصيل للمنزل 🛵" : "Home Delivery 🛵");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isDineIn = orderType === "dine_in";
  const serviceCharge = (isDineIn && subtotal > 0) ? Math.round(subtotal * 0.12) : 0;
  const finalTotal = subtotal + serviceCharge;

  // Build Itemized WhatsApp Message
  let msg = `💖 *طلب جديد - LOVE RECIPES (LR)* 🍧\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📍 *الفرع:* ${branchName}\n`;
  msg += `🛵 *طريقة الطلب:* ${orderTypeLabel}\n`;
  msg += `👤 *الاسم:* ${customerName}\n`;
  msg += `📞 *الموبايل:* ${customerPhone}\n`;

  if (customerAddress) {
    msg += `🏠 *العنوان / الطاولة:* ${customerAddress}\n`;
  }

  if (customerNotes) {
    msg += `📝 *ملاحظات:* ${customerNotes}\n`;
  }

  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 *تفاصيل الأصناف المطلوبة:*\n`;

  cart.forEach((item, idx) => {
    const itemName = currentLang === "ar" ? item.nameAr : item.nameEn;
    const optText = item.optionKey ? ` (${currentLang === "ar" ? item.optionLabelAr : item.optionLabelEn})` : "";
    const lineTotal = item.price * item.qty;
    msg += `${idx + 1}. *${itemName}*${optText}\n   ${item.qty} × ${item.price} = *${lineTotal} ج.م*\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  if (isDineIn && serviceCharge > 0) {
    msg += `💵 *المجموع الفرعي:* ${subtotal} ج.م\n`;
    msg += `🍨 *خدمة الصالة (12%):* +${serviceCharge} ج.م\n`;
    msg += `💰 *الإجمالي النهائي (شامل خدمة الصالة 12%):* ${finalTotal} ج.م\n`;
  } else {
    msg += `💰 *الإجمالي النهائي:* ${finalTotal} ج.م\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `✨ *تم الإرسال عبر المنيو الإلكتروني الرسمي لـ Love Recipes*\n`;
  msg += `🌐 ${GITHUB_PAGES_URL}`;

  const targetWhatsApp = selectedBranch.whatsapp || PRIMARY_WHATSAPP;
  const cleanPhone = targetWhatsApp.replace(/[^0-9]/g, "");
  const waURL = `https://wa.me/2${cleanPhone}?text=${encodeURIComponent(msg)}`;

  window.open(waURL, "_blank");
}

// Render Branches in Main Page
function renderBranches() {
  const container = document.getElementById("branchesContainer");
  if (!container) return;

  container.innerHTML = BRANCHES_DATA.map(branch => {
    const name = currentLang === "ar" ? branch.nameAr : branch.nameEn;
    const address = currentLang === "ar" ? branch.addressAr : branch.addressEn;
    const hours = currentLang === "ar" ? branch.hoursAr : branch.hoursEn;
    const badge = branch.isMain ? `<span class="branch-badge">${I18N[currentLang].featuredBranchBadge}</span>` : "";

    return `
      <div class="branch-card">
        <div class="branch-card-header">
          ${badge}
          <h3 class="branch-name">${name}</h3>
          <p class="branch-address">📍 ${address}</p>
          <div class="branch-hours">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${hours}</span>
          </div>
        </div>

        <div class="branch-actions">
          <a href="tel:${branch.phone}" class="branch-btn call" title="اتصال هاتفي">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>${branch.phone}</span>
          </a>
          <a href="https://wa.me/2${branch.whatsapp}" target="_blank" rel="noopener" class="branch-btn whatsapp" title="واتساب المباشر">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 2C6.5 2 2 6.5 2 12.03c0 1.97.57 3.8 1.55 5.35L2.24 21.76l4.55-1.28c1.5 1 3.28 1.55 5.24 1.55 5.53 0 10.03-4.5 10.03-10.03 0-5.53-4.5-10-10.03-10zm0 18.35c-1.74 0-3.37-.48-4.78-1.33l-.34-.21-2.7.76.73-2.63-.23-.37c-.94-1.46-1.47-3.18-1.47-4.99 0-4.6 3.74-8.35 8.35-8.35 4.6 0 8.35 3.74 8.35 8.35 0 4.61-3.75 8.35-8.35 8.35zm4.83-6.24c-.26-.13-1.57-.77-1.81-.86-.25-.09-.43-.13-.61.13-.18.26-.7 8.86-.86 1.05-.16.18-.32.21-.59.08-.26-.13-1.12-.41-2.13-1.32-.79-.7-1.32-1.57-1.47-1.83-.16-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3 1.03 2.56 1.18 2.74.15.18 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.55-.08 1.57-.64 1.79-1.26.22-.61.22-1.14.15-1.26-.06-.11-.24-.18-.5-.31z"/>
            </svg>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Render Custom Branch Picker Radio List
function renderBranchRadioList(filterText = "") {
  const container = document.getElementById("branchRadioList");
  if (!container) return;

  let filtered = BRANCHES_DATA;
  if (filterText) {
    const q = filterText.toLowerCase();
    filtered = filtered.filter(b => 
      b.nameAr.toLowerCase().includes(q) || 
      b.nameEn.toLowerCase().includes(q) || 
      b.addressAr.toLowerCase().includes(q) || 
      b.addressEn.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem;">${I18N[currentLang].noBranchesFound}</p>`;
    return;
  }

  container.innerHTML = filtered.map(b => {
    const isChecked = b.id === selectedBranch.id;
    const name = currentLang === "ar" ? b.nameAr : b.nameEn;
    const address = currentLang === "ar" ? b.addressAr : b.addressEn;

    return `
      <div class="branch-radio-card ${isChecked ? "selected" : ""}" onclick="selectBranch('${b.id}')">
        <input type="radio" name="branchPickerRadio" value="${b.id}" ${isChecked ? "checked" : ""} style="accent-color: var(--lr-pink); margin-top: 4px;">
        <div class="branch-radio-info">
          <div class="branch-radio-title">${name}</div>
          <div class="branch-radio-address">${address}</div>
        </div>
      </div>
    `;
  }).join("");
}

function filterBranchPickerList(val) {
  renderBranchRadioList(val.trim());
}

function selectBranch(branchId) {
  const branch = BRANCHES_DATA.find(b => b.id === branchId);
  if (!branch) return;

  selectedBranch = branch;
  renderBranchRadioList();
  updateBranchDisplay();
  closeModal("branchPickerModal");
}

function updateBranchDisplay() {
  const el = document.getElementById("selectedBranchCartDisplay");
  if (el) {
    el.textContent = currentLang === "ar" ? selectedBranch.nameAr : selectedBranch.nameEn;
  }
}

// Dynamic Table QR Code Generator
function initQR() {
  generateQRCode("none");
}

function generateQRCode(tableNum) {
  const qrCanvas = document.getElementById("qrCanvas");
  const qrUrlDisplay = document.getElementById("qrUrlDisplay");
  if (!qrCanvas) return;

  let targetUrl = GITHUB_PAGES_URL;
  if (tableNum && tableNum !== "none") {
    targetUrl += `?table=${tableNum}`;
  }

  if (qrUrlDisplay) {
    qrUrlDisplay.textContent = targetUrl;
  }

  qrCanvas.innerHTML = "";
  if (typeof QRCode !== "undefined") {
    qrCodeInstance = new QRCode(qrCanvas, {
      text: targetUrl,
      width: 200,
      height: 200,
      colorDark: "#0c0e12",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

function checkTableInURL() {
  const params = new URLSearchParams(window.location.search);
  const table = params.get("table");
  if (table) {
    // Automatically set dine-in mode and table number
    const dineInRadio = document.querySelector("input[name='orderType'][value='dine_in']");
    if (dineInRadio) {
      dineInRadio.checked = true;
      handleOrderTypeChange("dine_in");
    }
    const tableInput = document.getElementById("orderCustomerAddressOrTable");
    if (tableInput) {
      tableInput.value = `${I18N[currentLang].tableNumPrefix} ${table}`;
    }
  }
}

function downloadQRImage() {
  const qrCanvas = document.getElementById("qrCanvas");
  const img = qrCanvas ? qrCanvas.querySelector("img") : null;
  const canvas = qrCanvas ? qrCanvas.querySelector("canvas") : null;

  let dataURL = null;
  if (canvas) {
    dataURL = canvas.toDataURL("image/png");
  } else if (img && img.src) {
    dataURL = img.src;
  }

  if (dataURL) {
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "Love-Recipes-QR-Menu.png";
    a.click();
  }
}

function copyMenuLink() {
  const qrUrlDisplay = document.getElementById("qrUrlDisplay");
  const url = qrUrlDisplay ? qrUrlDisplay.textContent.trim() : GITHUB_PAGES_URL;
  navigator.clipboard.writeText(url).then(() => {
    alert(I18N[currentLang].copiedAlert);
  }).catch(() => {
    prompt(I18N[currentLang].copyLink, url);
  });
}

// Generic Modal Controller
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    // Only restore body overflow if no other modals are active
    if (!document.querySelector(".modal-overlay.active")) {
      document.body.style.overflow = "";
    }
  }
}
