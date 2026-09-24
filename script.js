const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const closeButton = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const thumbnail = item.querySelector('img');
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = thumbnail.alt;
    lightboxCaption.textContent = item.querySelector('span').textContent;
    lightbox.showModal();
  });
});

closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
