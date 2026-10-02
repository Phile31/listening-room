const reviewNavLabel = 'About the work';
const reviewTitle = 'How I approach reviews.';
const reviewSectionLabel = '05 / About the work';

document.querySelectorAll('a[href="#reviewing"]').forEach(link => {
  link.textContent = reviewNavLabel;
});

const reviewingSectionLabel = document.querySelector('#reviewing .section-label');
if (reviewingSectionLabel) reviewingSectionLabel.textContent = reviewSectionLabel;

const reviewingTitle = document.getElementById('reviewing-title');
if (reviewingTitle) reviewingTitle.textContent = reviewTitle;

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const closeButton = lightbox.querySelector('.lightbox-close');
const previousButton = lightbox.querySelector('.lightbox-prev');
const nextButton = lightbox.querySelector('.lightbox-next');
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});
let activeIndex = 0;

function showPhoto(index) {
  activeIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeIndex];
  const thumbnail = item.querySelector('img');
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = thumbnail.alt;
  lightboxCaption.textContent = item.querySelector('span').textContent;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showPhoto(index);
    lightbox.showModal();
  });
});

previousButton.addEventListener('click', () => showPhoto(activeIndex - 1));
nextButton.addEventListener('click', () => showPhoto(activeIndex + 1));
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showPhoto(activeIndex - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(activeIndex + 1);
  }
});
closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
