// --- PAGE NAVIGATION LOGIC ---
function showHome() {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    // Show Home
    document.getElementById('home-view').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// --- GALLERY DATA (SESUAIKAN DENGAN FILE LOKALMU) ---
const galleries = {
  wedding: [
    "/images/wedding/DSC_0089.webp",
    "/images/wedding/DSC_0090.webp",
    "/images/wedding/DSC_0095.webp",
    "/images/wedding/DSC_0105.webp",
    "/images/wedding/DSC_0112.webp",
    "/images/wedding/DSC_0113.webp",
    "/images/wedding/DSC_0125.webp",
    "/images/wedding/DSC_0126.webp",
    "/images/wedding/DSC_0131.webp",
    "/images/wedding/DSC_0171.webp",
    "/images/wedding/DSC_0172.webp",
    "/images/wedding/DSC_0173.webp",
    "/images/wedding/DSC_0176.webp",
    "/images/wedding/DSC_0177.webp",
    "/images/wedding/DSC_0178.webp",
    "/images/wedding/DSC_0181.webp",
    "/images/wedding/DSC_0182.webp",
    "/images/wedding/DSC_0183.webp",
    "/images/wedding/DSC_0184.webp",
    "/images/wedding/DSC_0185.webp",
    "/images/wedding/DSC_0187.webp",
    "/images/wedding/DSC_0188.webp",
    "/images/wedding/DSC_0189.webp",
    "/images/wedding/DSC_0198.webp",
    "/images/wedding/DSC_0199.webp",
    "/images/wedding/DSC_0200.webp",
    "/images/wedding/DSC_0201.webp",
    "/images/wedding/DSC_0202.webp",
    "/images/wedding/DSC_0212.webp",
    "/images/wedding/DSC_0213.webp",
    "/images/wedding/DSC_0245.webp",
    "/images/wedding/DSC_0247.webp",
    "/images/wedding/DSC_0248.webp",
    "/images/wedding/DSC01107.webp",
    "/images/wedding/DSC01109.webp",
    "/images/wedding/DSC01111.webp",
    "/images/wedding/DSC01121.webp",
    "/images/wedding/DSC01128.webp",
    "/images/wedding/DSC01133.webp",
    "/images/wedding/DSC01224.webp",
    "/images/wedding/DSC01225.webp",
    "/images/wedding/DSC01238.webp",
    "/images/wedding/DSC01246.webp",
    "/images/wedding/DSC03713.webp",
    "/images/wedding/DSC03714.webp",
    "/images/wedding/DSC037141.webp",
    "/images/wedding/wedding.webp"
    
  ],
  wisuda: [
    "/images/Wisuda/wisuda1.jpg",
    "/images/Wisuda/wisuda2.jpg",
    "/images/Wisuda/wisuda3.jpg",
    "/images/Wisuda/wisuda4.jpg",
    "/images/Wisuda/wisuda5.jpg",
    "/images/Wisuda/wisuda6.jpg"
  ],
  nature: [
    "/images/Landscape/1.webp",
    "/images/Landscape/2.webp",
    "/images/Landscape/3.webp",
    "/images/Landscape/4.webp",
    "/images/Landscape/5.webp",
    "/images/Landscape/6.webp",
    "/images/Landscape/7.webp",
    "/images/Landscape/8.webp",
    "/images/Landscape/9.webp",
    "/images/Landscape/10.webp",
    "/images/Landscape/11.webp",
    "/images/Landscape/12.webp",
    "/images/Landscape/13.webp",
    "/images/Landscape/14.webp",
    "/images/Landscape/15.webp",
    "/images/Landscape/16.webp",
    "/images/Landscape/17.webp",
    "/images/Landscape/18.webp",
    "/images/Landscape/19.webp",
    "/images/Landscape/20.webp"
  ],
  street: [
    "/images/street/1.webp",
    "/images/street/2.webp",
    "/images/street/3.webp",
    "/images/street/4.webp",
    "/images/street/5.webp",
    "/images/street/6.webp",
    "/images/street/7.webp",
    "/images/street/8.webp",
    "/images/street/9.webp",
    "/images/street/10.webp",
    "/images/street/11.webp",
    "/images/street/12.webp",
    "/images/street/13.webp",
    "/images/street/14.webp",
    "/images/street/15.webp"
  ],
  event: [
    "/images/EventD/Event1.webp",
    "/images/EventD/Event2.webp",
    "/images/EventD/Event3.webp",
    "/images/EventD/Event4.webp",
    "/images/EventD/Event5.webp",
    "/images/EventD/Event6.webp",
    "/images/EventD/Event7.webp",
    "/images/EventD/Event8.webp",
    "/images/EventD/Event9.webp",
    "/images/EventD/Event10.webp",
    "/images/EventD/Event11.webp",
    "/images/EventD/Event12.webp"
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

// --- LIGHTBOX LOGIC (TANPA PERUBAHAN) ---
let currentGalleryImages = [];
let currentIndex = 0;
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

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});