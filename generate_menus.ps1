$categories = @(
    @{id="pasta"; name_i18n="pasta"; folder="الباستا"},
    @{id="pizza"; name_i18n="pizza"; folder="البيتزا"},
    @{id="clay_pots"; name_i18n="clay_pots"; folder="الفخارات"},
    @{id="saj"; name_i18n="saj"; folder="صاجيات"},
    @{id="sandwiches"; name_i18n="sandwiches"; folder="السندويشات"},
    @{id="burgers"; name_i18n="burgers"; folder="برغر"},
    @{id="manakeesh"; name_i18n="manakeesh"; folder="مناقيش"},
    @{id="salads"; name_i18n="salads"; folder="السلطات"},
    @{id="appetizers"; name_i18n="appetizers"; folder="مقبلات"},
    @{id="desserts"; name_i18n="desserts"; folder="الحلويات"},
    @{id="fresh_juices"; name_i18n="fresh_juices"; folder="العصائر الطبيعيه"},
    @{id="hot_drinks"; name_i18n="hot_drinks"; folder="المشروبات الساخنه"},
    @{id="cold_drinks"; name_i18n="cold_drinks"; folder="المشروبات البارده"},
    @{id="smoothies"; name_i18n="smoothies"; folder="سموذي"},
    @{id="frappuccinos"; name_i18n="frappuccinos"; folder="فراب"},
    @{id="milkshakes"; name_i18n="milkshakes"; folder="ميلك شيك"},
    @{id="mojitos"; name_i18n="mojitos"; folder="موهيتو"}
)

$template = @"
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{NAME}} - Ahwet Hayat</title>
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>

  <!-- Navigation -->
  <nav>
    <a href="../index.html" class="logo">
      <img src="../logo.png" alt="Ahwet Hayat Logo">
    </a>
    <div class="nav-links">
      <a href="../index.html" data-i18n="home">Home</a>
      <a href="../buffet.html" data-i18n="buffet">Breakfast Buffet</a>
      <a href="../menu.html" class="active" data-i18n="menu">Menu</a>
      <a href="../location.html" data-i18n="location">Location</a>
      <a href="../contact.html" data-i18n="contact">Contact Us</a>
    </div>
    <button id="langToggle" class="lang-btn">العربية</button>
  </nav>

  <!-- Main Content -->
  <main class="container" style="padding-top: 120px;">
    <div style="text-align: center; margin-bottom: 3rem;">
      <h2 data-i18n="{{I18N}}">{{NAME}}</h2>
    </div>

    <div class="grid">
      <!-- Item 1 -->
      <div class="card glass-panel">
        <img src="../Menu/{{FOLDER}}/1.jpg" alt="Item 1" class="card-img" onerror="this.src='https://via.placeholder.com/400x300?text={{NAME}}'">
        <div class="card-content">
          <h3 class="card-title" data-i18n="{{I18N}}">Item</h3>
          <p style="color: var(--text-light); margin-bottom: 1rem;" data-i18n="placeholder_desc">Delicious and freshly made, perfect for any time of the day.</p>
          <div class="card-price">5.00 JD</div>
        </div>
      </div>
      <!-- Item 2 -->
      <div class="card glass-panel">
        <img src="../Menu/{{FOLDER}}/2.jpg" alt="Item 2" class="card-img" onerror="this.src='https://via.placeholder.com/400x300?text={{NAME}}'">
        <div class="card-content">
          <h3 class="card-title" data-i18n="{{I18N}}">Item</h3>
          <p style="color: var(--text-light); margin-bottom: 1rem;" data-i18n="placeholder_desc">Delicious and freshly made, perfect for any time of the day.</p>
          <div class="card-price">4.50 JD</div>
        </div>
      </div>
      <!-- Item 3 -->
      <div class="card glass-panel">
        <img src="../Menu/{{FOLDER}}/3.jpg" alt="Item 3" class="card-img" onerror="this.src='https://via.placeholder.com/400x300?text={{NAME}}'">
        <div class="card-content">
          <h3 class="card-title" data-i18n="{{I18N}}">Item</h3>
          <p style="color: var(--text-light); margin-bottom: 1rem;" data-i18n="placeholder_desc">Delicious and freshly made, perfect for any time of the day.</p>
          <div class="card-price">6.00 JD</div>
        </div>
      </div>
      <!-- Item 4 -->
      <div class="card glass-panel">
        <img src="../Menu/{{FOLDER}}/4.jpg" alt="Item 4" class="card-img" onerror="this.src='https://via.placeholder.com/400x300?text={{NAME}}'">
        <div class="card-content">
          <h3 class="card-title" data-i18n="{{I18N}}">Item</h3>
          <p style="color: var(--text-light); margin-bottom: 1rem;" data-i18n="placeholder_desc">Delicious and freshly made, perfect for any time of the day.</p>
          <div class="card-price">3.50 JD</div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="glass-panel">
    <div class="footer-content">
      <div class="footer-col">
        <img src="../logo.png" alt="Ahwet Hayat" style="height: 80px; margin-bottom: 1rem;">
        <p data-i18n="footer_desc">Ahwet Hayat Restaurant & Cafe. Experience the finest taste and premium atmosphere.</p>
      </div>
      <div class="footer-col">
        <h3 data-i18n="contact_info">Contact Info</h3>
        <p><strong data-i18n="address">Gardens, Wasfi Al-Tal Street, next to the G Amman Hotel</strong></p>
        <p data-i18n="phone">+962 795 968 000</p>
      </div>
      <div class="footer-col">
        <h3 data-i18n="chat_whatsapp">Chat on WhatsApp</h3>
        <a href="https://wa.me/962795968000" target="_blank" class="btn-primary" style="margin-top: 1rem; text-align: center; display: inline-block;" data-i18n="chat_whatsapp">Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 Ahwet Hayat. All rights reserved.
    </div>
  </footer>

  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/962795968000" target="_blank" class="whatsapp-float">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.5c-33 0-65.3-8.8-93.7-25.5l-6.7-4-69.6 18.2 18.6-67.9-4.4-7C48 296.6 38.3 260.6 38.3 222.1c0-102.3 83.2-185.5 185.6-185.5s185.6 83.2 185.6 185.5-83.2 185.4-185.6 185.4zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6 2.1-3.2 7.6-14.2 2.8-5.6 1.4-10.4-.9-13.2-2.3-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
    <span data-i18n="chat_whatsapp">WhatsApp</span>
  </a>

  <script src="../js/main.js"></script>
</body>
</html>
"@

foreach ($cat in $categories) {
    $content = $template -replace '\{\{NAME\}\}', $cat.id -replace '\{\{I18N\}\}', $cat.name_i18n -replace '\{\{FOLDER\}\}', $cat.folder
    $filePath = "menu-items\$($cat.id).html"
    Set-Content -Path $filePath -Value $content -Encoding UTF8
    Write-Host "Created $filePath"
}
