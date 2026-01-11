// --- PAGE NAVIGATION LOGIC ---
function goToHome() {
  // Sembunyikan semua view kategori (wedding, wisuda, dll)
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  
  // Tampilkan halaman utama (home-view)
  document.getElementById('home-view').classList.remove('hidden');
  
  // Scroll ke bagian paling atas (Hero)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Hapus hash dari URL agar bersih
  history.pushState('', document.title, window.location.pathname);
}

function goToPortfolio() {
  // Sembunyikan semua view kategori
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  
  // Tampilkan halaman utama
  document.getElementById('home-view').classList.remove('hidden');
  
  // Scroll ke bagian Portfolio (#categories) setelah delay
  setTimeout(() => {
    const categories = document.getElementById('categories');
    if (categories) {
      window.scrollTo({
        top: categories.offsetTop,
        behavior: 'smooth'
      });
    }
    history.pushState('', document.title, window.location.pathname);
  }, 100);
}

function goToContact() {
  // Sembunyikan semua view kategori
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  
  // Tampilkan contact view
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.classList.remove('hidden');
  }
  
  // Scroll ke atas (ke bagian awal contact)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  history.pushState('', document.title, window.location.pathname);
}
// ✅ TAMBAHKAN DI SINI — SETELAH goToContact()
function navigateTo(sectionId) {
  // Sembunyikan semua view kategori
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  
  // Tampilkan halaman utama
  const homeView = document.getElementById('home-view');
  if (homeView) {
    homeView.classList.remove('hidden');
  }
  // Scroll ke section yang dituju setelah delay
  setTimeout(() => {
    const target = document.getElementById(sectionId);
    if (target) {
      const header = document.querySelector('nav');
      const headerHeight = header ? header.offsetHeight : 0;
      
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
    history.pushState('', document.title, window.location.pathname);
  }, 100);
}

// --- GALLERY DATA (SESUAIKAN DENGAN FILE LOKALMU) ---
const galleries = {
  wedding: [
    "images/wedding/wedding-0089.webp",
    "images/wedding/wedding-0090.webp",
    "images/wedding/wedding-0095.webp",
    "images/wedding/wedding-0105.webp",
    "images/wedding/wedding-0112.webp",
    "images/wedding/wedding-0113.webp",
    "images/wedding/wedding-0125.webp",
    "images/wedding/wedding-0126.webp",
    "images/wedding/wedding-0131.webp",
    "images/wedding/wedding-0171.webp",
    "images/wedding/wedding-0172.webp",
    "images/wedding/wedding-0173.webp",
    "images/wedding/wedding-0176.webp",
    "images/wedding/wedding-0177.webp",
    "images/wedding/wedding-0178.webp",
    "images/wedding/wedding-0181.webp",
    "images/wedding/wedding-0182.webp",
    "images/wedding/wedding-0183.webp",
    "images/wedding/wedding-0184.webp",
    "images/wedding/wedding-0185.webp",
    "images/wedding/wedding-0187.webp",
    "images/wedding/wedding-0188.webp",
    "images/wedding/wedding-0189.webp",
    "images/wedding/wedding-0198.webp",
    "images/wedding/wedding-0199.webp",
    "images/wedding/wedding-0200.webp",
    "images/wedding/wedding-0201.webp",
    "images/wedding/wedding-0202.webp",
    "images/wedding/wedding-0212.webp",
    "images/wedding/wedding-0213.webp",
    "images/wedding/wedding-0245.webp",
    "images/wedding/wedding-0247.webp",
    "images/wedding/wedding-0248.webp",
    "images/wedding/wedding-0249.webp",
    "images/wedding/wedding-0250.webp",
    "images/wedding/wedding-0251.webp",
    "images/wedding/wedding-0252.webp",
    "images/wedding/wedding-0253.webp",
    "images/wedding/wedding-0254.webp",
    "images/wedding/wedding-0255.webp",
    "images/wedding/wedding-0256.webp",
    "images/wedding/wedding-0257.webp",
    "images/wedding/wedding-0258.webp",
    "images/wedding/wedding-0259.webp",
    "images/wedding/wedding-0260.webp",
    "images/wedding/wedding-0261.webp",
    "images/wedding/wedding-01.webp"
  ],
  wisuda: [
    "images/Wisuda/wisuda-001.jpg",
    "images/Wisuda/graduation-001.webp",
    "images/Wisuda/graduation-002.webp",
    "images/Wisuda/graduation-003.webp",
    "images/Wisuda/graduation-004.webp",
    "images/Wisuda/graduation-005.webp",
    "images/Wisuda/graduation-006.webp",
    "images/Wisuda/graduation-007.webp",
    "images/Wisuda/graduation-008.webp",
    "images/Wisuda/graduation-009.webp",
    "images/Wisuda/graduation-010.webp",
    "images/Wisuda/graduation-011.webp",
    "images/Wisuda/graduation-012.webp",
    "images/Wisuda/graduation-013.webp",
    "images/Wisuda/graduation-014.webp",
    "images/Wisuda/graduation-015.webp",
    "images/Wisuda/graduation-016.webp",
    "images/Wisuda/graduation-017.webp",
    "images/Wisuda/graduation-018.webp",
    "images/Wisuda/graduation-019.webp"
    
  ],
  nature: [
    "images/Landscape/nature-01.webp",
    "images/Landscape/nature-02.webp",
    "images/Landscape/nature-03.webp",
    "images/Landscape/nature-04.webp",
    "images/Landscape/nature-05.webp",
    "images/Landscape/nature-06.webp",
    "images/Landscape/nature-07.jpg",
    "images/Landscape/nature-08.webp",
    "images/Landscape/nature-09.webp",
    "images/Landscape/nature-10.webp",
    "images/Landscape/nature-11.webp",
    "images/Landscape/nature-12.webp",
    "images/Landscape/nature-13.webp",
    "images/Landscape/nature-14.webp",
    "images/Landscape/nature-15.webp",
    "images/Landscape/nature-16.webp",
    "images/Landscape/nature-17.webp",
    "images/Landscape/nature-18.webp",
    "images/Landscape/nature-19.webp",
    "images/Landscape/nature-20.webp",
    "images/Landscape/nature-21.jpg",
    "images/Landscape/nature-22.jpg",
    "images/Landscape/nature-23.jpg",
    "images/Landscape/nature-24.jpg"
  ],
  street: [
    "images/street/street1.webp",
    "images/street/street2.webp",
    "images/street/street3.webp",
    "images/street/street4.webp",
    "images/street/street5.webp",
    "images/street/street6.webp",
    "images/street/street7.webp",
    "images/street/street8.webp",
    "images/street/street9.webp",
    "images/street/street10.webp",
    "images/street/street11.webp",
    "images/street/street12.webp",
    "images/street/street13.webp",
    "images/street/street14.webp",
    "images/street/street15.webp"
  ],
  event: [
    "images/EventD/event-01.webp",
    "images/EventD/event-02.webp",
    "images/EventD/event-03.webp",
    "images/EventD/event-04.webp",
    "images/EventD/event-05.webp",
    "images/EventD/event-06.webp",
    "images/EventD/event-07.webp",
    "images/EventD/event-08.webp",
    "images/EventD/event-09.webp",
    "images/EventD/event-10.webp",
    "images/EventD/event-11.webp",
    "images/EventD/event-12.webp"
  ]
};

// --- DINAMIS RENDER GALLERY ---
function renderGallery(container, imageUrls, category) {
  const grid = container.querySelector('.masonry-grid');
  if (!grid) {
    console.error('No .masonry-grid found in container');
    return;
  }
  grid.innerHTML = '';

  imageUrls.forEach(url => {
    const item = document.createElement('div');
    item.className = 'masonry-item';
    item.innerHTML = `
      <img src="${url}" alt="${category} photo">
      <div class="overlay"><i class="fas fa-expand"></i></div>
    `;
    grid.appendChild(item);
  });

  setupLightbox(container);
}

// --- OPEN PAGE (UPDATED) ---
function openPage(category) {
  const catKey = category.toLowerCase();
  
  if (!galleries[catKey]) {
    console.warn(`Gallery "${catKey}" not found.`);
    return;
  }

  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

  const targetEl = document.getElementById(catKey + '-view');
  if (!targetEl) {
    console.error(`View element for "${catKey}" not found.`);
    return;
  }

  renderGallery(targetEl, galleries[catKey], catKey);

  targetEl.classList.remove('hidden');
  window.scrollTo(0, 0);
}

// --- DARK MODE & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// --- LIGHTBOX LOGIC ---
let currentGalleryImages = [];
let currentIndex = 0;

// SWIPE DETECTION VARIABLES
let startX = 0;
let startY = 0;
let isSwiping = false;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Setup clicks for a specific container (Category Page)
function setupLightbox(container) {
    const items = container.querySelectorAll('.gallery-item, .masonry-item');
    currentGalleryImages = Array.from(items);
    
    items.forEach((item, index) => {
        item.onclick = () => openLightbox(index);
    });
}

// Special handler for Home Preview items
function openLightboxFromHome(element) {
    const homeItems = document.querySelectorAll('#home-view .gallery-item');
    currentGalleryImages = Array.from(homeItems);
    currentIndex = currentGalleryImages.indexOf(element);
    openLightbox(currentIndex);
}

function openLightbox(index) {
    currentIndex = index;
    const src = currentGalleryImages[currentIndex].querySelector('img').src;
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGalleryImages.length;
    openLightbox(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    openLightbox(currentIndex);
}

// Lightbox Event Listeners
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
document.getElementById('lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// SWIPE GESTURE FOR MOBILE
lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  isSwiping = true;
});

lightbox.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;

  const deltaX = e.touches[0].clientX - startX;
  const deltaY = e.touches[0].clientY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    e.preventDefault();
  }
});

lightbox.addEventListener('touchend', (e) => {
  if (!isSwiping) return;

  const deltaX = e.changedTouches[0].clientX - startX;
  const deltaY = e.changedTouches[0].clientY - startY;

  if (deltaX < -50) {
    nextImage();
  } else if (deltaX > 50) {
    prevImage();
  }

  isSwiping = false;
});

// Smooth scroll tanpa hash (tidak dipakai lagi, tapi tetap ada)
function smoothScrollTo(elementId) {
  const target = document.getElementById(elementId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
}

// === HAMBURGER MENU LOGIC ===
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
}

document.getElementById('menu-toggle').addEventListener('click', function(e) {
  e.stopPropagation();
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('menu-toggle');
  
  if (!menu.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
    menu.classList.add('hidden');
  }
});