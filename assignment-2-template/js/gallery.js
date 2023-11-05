let thumbnailImages = document.querySelectorAll('li>img');
let largeImage = document.querySelector('figure>img');
let captionInFig = document.querySelector('figure>figcaption');

let galleryItems = [
    {
        large: 'images/flowers-pink-large.jpg',
        description: "A field of vibrant sunflowers in the hamlet of Dernekamp, Kirchspiel, Dülmen, Germany.",
    },
    {
        large: 'images/flowers-purple-large.jpg',
        description: "A picturesque cornfield adorned with red poppies in Dülmen, North Rhine-Westphalia, Germany.",
    },
    {
        large: 'images/flowers-pink-large.jpg',
        description: "A field of vibrant sunflowers in the hamlet of Dernekamp, Kirchspiel, Dülmen, Germany.",
    },
    {
        large: 'images/flowers-purple-large.jpg',
        description: "A picturesque cornfield adorned with red poppies in Dülmen, North Rhine-Westphalia, Germany.",
    },
    {
        large: 'images/flowers-purple-large.jpg',
        description: "A picturesque cornfield adorned with red poppies in Dülmen, North Rhine-Westphalia, Germany.",
    },
    // Add objects for other images
];

for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].addEventListener("click", (e) => {
        largeImage.src = galleryItems[i].large;
        captionInFig.textContent = '"' + galleryItems[i].description + '"';
        let index = i;

        for (let j = 0; j < thumbnailImages.length; j++) {
            if (j !== index) {
                thumbnailImages[j].classList.add("grayscale");
            } else {
                thumbnailImages[j].classList.remove("grayscale");
            }
        }
        
    });
}
