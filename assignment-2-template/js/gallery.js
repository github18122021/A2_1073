// Selecting elements
const thumbnailImages = document.querySelectorAll('li>img');
const largeImage = document.querySelector('figure>img');
const captionInFig = document.querySelector('figure>figcaption');

// Gallery items data
const galleryItems = [
    {
        large: 'images/flowers-pink-large.jpg',
        description: "A field of vibrant sunflowers in Dernekamp, Kirchspiel, Dülmen, Germany."
    },
    {
        large: 'images/flowers-purple-large.jpg',
        description: "A picturesque cornfield with red poppies in Dülmen, North Rhine-Westphalia, Germany."
    },
    {
        large: 'images/flowers-red-large.jpg',
        description: "A field of vibrant sunflowers in Dernekamp, Kirchspiel, Dülmen, Germany."
    },
    {
        large: 'images/flowers-white-large.jpg',
        description: "A picturesque cornfield with red poppies in Dülmen, North Rhine-Westphalia, Germany."
    },
    {
        large: 'images/flowers-yellow-large.jpg',
        description: "A picturesque cornfield with red poppies in Dülmen, North Rhine-Westphalia, Germany."
    },
    // Add objects for other images
];

// Click event listeners for thumbnail images
thumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        // Update large image and caption
        largeImage.src = galleryItems[index].large;
        captionInFig.textContent = `"${galleryItems[index].description}"`;

        // Apply grayscale effect to non-selected thumbnails
        thumbnailImages.forEach((thumb, j) => {
            thumb.classList.toggle("grayscale", j !== index);
        });
    });
});

