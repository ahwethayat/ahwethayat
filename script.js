// =========================================================
// 1. إعدادات اللغة والترجمة (مع الحفظ التلقائي)
// =========================================================
let currentLang = localStorage.getItem('ahwet_lang') || 'en';

const translations = {
  en: {
    home: "Home", buffet: "Breakfast Buffet", menu: "Menu", location: "Location", contact: "Contact Us",
    welcome: "Welcome to Ahwet Hayat", subtitle: "Experience the finest taste and premium atmosphere.",
    explore: "Explore Menu", about_us: "About Us", about_text: "Ahwet Hayat Restaurant & Cafe. Experience the finest taste and premium atmosphere.",
    buffet_title: "Breakfast Buffet", price_caption: "Price per person: 7.5 JD",
    categories: "Our Categories", categories_subtitle: "Choose from our wide variety of premium food and drinks.",
    back_to_menu: "Back to Categories", open_maps: "Open in Google Maps",
    address: "📍 Gardens, Wasfi Al-Tal Street, next to the G Amman Hotel", address_short: "Gardens, Wasfi Al-Tal St.",
    contact_subtitle: "We would love to hear from you!", name: "Full Name", phone_number: "Phone Number",
    inquiry: "Your Inquiry", send: "Send Message", chat_whatsapp_title: "Or reach us instantly",
    chat_whatsapp: "Chat on WhatsApp", footer_desc: "Ahwet Hayat Restaurant & Cafe. Experience the finest taste and premium atmosphere.",
    contact_info: "Contact Info", social_media: "Follow Us", btn_lang: "العربية",
    
    // كلمات السلة وإضافة الأقسام
    add_to_cart: "Add to Cart",
    cart_title: "Your Cart",
    cart_subtitle: "Review your items before checkout.",
    order_summary: "Order Summary",
    subtotal: "Subtotal",
    tax: "Tax (8%)",
    total: "Total",
    checkout_whatsapp: "Order via WhatsApp",
    empty_cart: "Your cart is empty.",
    
    pasta: "Pasta", pizza: "Pizza", clay_pots: "Clay Pots", saj: "Saj", sandwiches: "Sandwiches",
    burgers: "Burgers", manakeesh: "Manakeesh", salads: "Salads", appetizers: "Appetizers",
    desserts: "Desserts", fresh_juices: "Fresh Juices", hot_drinks: "Hot Drinks", cold_drinks: "Cold Drinks",
    smoothies: "Smoothies", frappuccinos: "Frappuccinos", milkshakes: "Milkshakes", mojitos: "Mojitos"
  },
  ar: {
    home: "الرئيسية", buffet: "بوفيه الإفطار", menu: "المنيو", location: "الموقع", contact: "اتصل بنا",
    welcome: "مرحباً بكم في قهوة حياة", subtitle: "اكتشف أروع المذاقات في أجواء راقية لا تُنسى.",
    explore: "تصفح المنيو", about_us: "من نحن", about_text: "قهوة حياة - مطعم وكافيه. نقدّم لك أفضل الأطباق بأجواء راقية.",
    buffet_title: "بوفيه الإفطار", price_caption: "السعر للشخص الواحد: 7.5 دينار",
    categories: "أقسام المنيو", categories_subtitle: "اختر من تشكيلتنا الواسعة من المأكولات والمشروبات المميزة.",
    back_to_menu: "العودة للأقسام", open_maps: "الفتح في خرائط جوجل",
    address: "📍 الجاردنز، شارع وصفي التل، بجانب فندق جي عمان", address_short: "الجاردنز، شارع وصفي التل",
    contact_subtitle: "يسعدنا تواصلكم معنا في أي وقت!", name: "الاسم الكامل", phone_number: "رقم الهاتف",
    inquiry: "رسالتك / استفسارك", send: "إرسال الرسالة", chat_whatsapp_title: "أو تواصل معنا فوراً عبر",
    chat_whatsapp: "تواصل عبر واتساب", footer_desc: "قهوة حياة - مطعم وكافيه. نقدّم لك أفضل الأطباق بأجواء راقية.",
    contact_info: "معلومات التواصل", social_media: "تابعنا", btn_lang: "English",

    // كلمات السلة وإضافة الأقسام
    add_to_cart: "إضافة للسلة",
    cart_title: "سلة المشتريات",
    cart_subtitle: "راجع طلباتك قبل إتمام الطلب.",
    order_summary: "ملخص الطلب",
    subtotal: "المجموع الفرعي",
    tax: "الضريبة (8%)",
    total: "المجموع الكلي",
    checkout_whatsapp: "إرسال الطلب عبر واتساب",
    empty_cart: "سلة المشتريات فارغة.",
    
    pasta: "الباستا", pizza: "البيتزا", clay_pots: "الفخارات", saj: "صاجيات", sandwiches: "السندويشات",
    burgers: "برغر", manakeesh: "مناقيش", salads: "السلطات", appetizers: "مقبلات",
    desserts: "الحلويات", fresh_juices: "العصائر الطبيعية", hot_drinks: "المشروبات الساخنة", cold_drinks: "المشروبات الباردة",
    smoothies: "سموذي", frappuccinos: "فرابيتشينو", milkshakes: "ميلك شيك", mojitos: "موهيتو"
  }
};

// =========================================================
// 2. دوال الواجهة واللغة
// =========================================================
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if(el.tagName === 'SPAN' && el.previousElementSibling && el.previousElementSibling.tagName === 'I') {
         el.innerText = translations[currentLang][key];
      } else {
         el.innerText = translations[currentLang][key];
      }
    }
  });

  const dynamicTitle = document.getElementById('dynamic-category-title');
  if (dynamicTitle) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    if (categoryId && translations[currentLang][categoryId]) {
      dynamicTitle.innerText = translations[currentLang][categoryId];
    }
  }
}

function setLanguageDirection() {
  document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
  document.documentElement.lang = currentLang;
  const langBtn = document.getElementById('langToggle');
  if(langBtn) langBtn.innerText = translations[currentLang].btn_lang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('ahwet_lang', currentLang);
  setLanguageDirection();
  applyTranslations();
  loadCategoryItems(); 
  renderCart();        
}

// =========================================================
// 3. نظام الأقسام (عرض المنتجات)
// =========================================================
function loadCategoryItems() {
  const container = document.getElementById('itemsGrid');
  if (!container) return; 

  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id');

  if (typeof menuData !== 'undefined' && menuData[categoryId]) {
    const items = menuData[categoryId];
    container.innerHTML = items.map(item => `
      <div class="card glass-panel" style="text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- تم إضافة loading="lazy" هنا -->
          <img src="${item.image}" alt="${currentLang === 'en' ? item.titleEn : item.titleAr}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='logo.png'">
          <h3 class="card-title" style="margin-bottom: 0.5rem; font-family: var(--font-en-heading);">${currentLang === 'en' ? item.titleEn : item.titleAr}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4;">
            ${currentLang === 'en' ? item.descEn : item.descAr}
          </p>
        </div>
        <div>
          <div style="color: var(--primary-gold); font-weight: 600; font-size: 1.2rem; margin-bottom: 1rem;" dir="ltr">${item.price}</div>
          <button onclick="addToCart(this, '${categoryId}', ${item.id})" class="btn-outline" style="width: 100%; border-radius: 8px; transition: all 0.3s;">
            <i class="fa-solid fa-cart-plus"></i> <span>${translations[currentLang].add_to_cart}</span>
          </button>
        </div>
      </div>
    `).join('');
  }
}

// =========================================================
// 4. نظام السلة (Cart System)
// =========================================================

function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const badge = document.getElementById('cartBadge');
  if (badge) {
    if (totalItems > 0) {
      badge.innerText = totalItems;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

function addToCart(btnElement, categoryId, itemId) {
  const item = menuData[categoryId].find(i => i.id === itemId);
  if (!item) return;

  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];
  let existingItem = cart.find(i => i.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      titleEn: item.titleEn,
      titleAr: item.titleAr,
      image: item.image,
      price: parseFloat(item.price),
      quantity: 1
    });
  }

  localStorage.setItem('ahwet_cart', JSON.stringify(cart));
  updateCartBadge();
  
  const originalHTML = btnElement.innerHTML;
  
  btnElement.innerHTML = `<i class="fa-solid fa-check" style="font-size: 1.2rem;"></i>`;
  btnElement.style.backgroundColor = '#25D366'; 
  btnElement.style.color = '#ffffff';
  btnElement.style.borderColor = '#25D366';
  btnElement.disabled = true; 

  setTimeout(() => {
    btnElement.innerHTML = originalHTML;
    btnElement.style.backgroundColor = '';
    btnElement.style.color = '';
    btnElement.style.borderColor = '';
    btnElement.disabled = false;
  }, 1500);
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const summaryBox = document.getElementById('orderSummary');
  if (!container || !summaryBox) return;

  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];

  if (cart.length === 0) {
    container.innerHTML = `<div class="glass-panel" style="padding: 3rem; text-align: center; color: var(--text-muted); grid-column: 1 / -1;">
                             <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-gold);"></i>
                             <h3>${translations[currentLang].empty_cart}</h3>
                           </div>`;
    summaryBox.style.display = 'none';
    return;
  }

  summaryBox.style.display = 'block';
  let subtotal = 0;

  container.innerHTML = cart.map((item, index) => {
    subtotal += item.price * item.quantity;
    let title = currentLang === 'en' ? item.titleEn : item.titleAr;
    return `
      <div class="cart-item glass-panel">
        <!-- تم إضافة loading="lazy" هنا -->
        <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='logo.png'">
        <div class="item-details">
          <h3 style="margin-bottom: 0.5rem;">${title}</h3>
          <p style="color: var(--primary-gold); font-weight: 600;" dir="ltr">${item.price.toFixed(2)} JD</p>
        </div>
        <div class="quantity-control">
          <button onclick="updateCartQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-btn" title="Remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  }).join('');

  let tax = subtotal * 0.08; 
  let total = subtotal + tax;

  document.getElementById('subtotalAmount').innerText = subtotal.toFixed(2) + ' JD';
  document.getElementById('taxAmount').innerText = tax.toFixed(2) + ' JD';
  document.getElementById('totalAmount').innerText = total.toFixed(2) + ' JD';
}

function updateCartQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];
  if (cart[index]) {
    cart[index].quantity += change;
    // منع الكمية من النزول عن 1 (إذا أراد الحذف يستخدم زر سلة المهملات)
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    
    localStorage.setItem('ahwet_cart', JSON.stringify(cart));
    updateCartBadge(); // تحديث الرقم العائم
    renderCart(); // إعادة رسم السلة بالسعر الجديد
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('ahwet_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCart();
}

function checkoutWhatsApp() {
  let cart = JSON.parse(localStorage.getItem('ahwet_cart')) || [];
  if (cart.length === 0) return;

  let text = currentLang === 'en' ? "Hello Ahwet Hayat! I would like to place an order:%0A%0A" : "مرحباً قهوة حياة! أود طلب الآتي:%0A%0A";
  let total = 0;

  cart.forEach(item => {
    let title = currentLang === 'en' ? item.titleEn : item.titleAr;
    let itemTotal = item.price * item.quantity;
    text += `- ${item.quantity}x ${title} (${itemTotal.toFixed(2)} JD)%0A`;
    total += itemTotal;
  });

  let tax = total * 0.08; 
  let finalTotal = total + tax;

  if (currentLang === 'en') {
    text += `%0ASubtotal: ${total.toFixed(2)} JD`;
    text += `%0ATax (8%): ${tax.toFixed(2)} JD`; 
    text += `%0A*Total: ${finalTotal.toFixed(2)} JD*%0A%0A`;
    text += "Please confirm my order!";
  } else {
    text += `%0Aالمجموع الفرعي: ${total.toFixed(2)} JD`;
    text += `%0Aالضريبة (8%): ${tax.toFixed(2)} JD`; 
    text += `%0A*الإجمالي: ${finalTotal.toFixed(2)} JD*%0A%0A`;
    text += "الرجاء تأكيد الطلب!";
  }

  // تم التعديل هنا: نتحقق أولاً من نجاح فتح نافذة واتساب
  let waWindow = window.open(`https://wa.me/962795968000?text=${text}`, '_blank');
  
  if (waWindow) {
    // إذا نجح المتصفح في فتح واتساب ولم يحظره، نقوم بتفريغ السلة
    localStorage.removeItem('ahwet_cart'); 
    updateCartBadge();
    setTimeout(() => { window.location.href = "index.html"; }, 1000);
  } else {
    // إذا قام المتصفح بحظر الانتقال، نحتفظ ببيانات السلة وننبه المستخدم
    let alertMsg = currentLang === 'en' ? "Pop-up blocked! Please allow pop-ups to send your order via WhatsApp." : "عذراً، تم حظر النافذة المنبثقة! يرجى السماح بفتح النوافذ المنبثقة (Pop-ups) لإتمام طلبك عبر واتساب.";
    alert(alertMsg);
  }
}

// =========================================================
// 5. تهيئة الصفحة عند التحميل
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);
  
  setLanguageDirection();
  applyTranslations();
  updateCartBadge(); 
  loadCategoryItems(); 
  renderCart(); 
});