// script.js
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = thumbnail.src; // Display the clicked image
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Close the lightbox
});
