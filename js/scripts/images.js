export const uniqueDogSet = new Set();

// Function to fetch a single random image
const fetchRandomImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    return response.json();
};

// Function to create an image element from the data and append it to the DOM
const createAndAppendImage = (data, mainSection) => {
    const image = new Image();
    image.src = data.message;

    const imageWrapper = document.createElement("figure");
    const pixelCanvas = document.createElement("canvas");
    imageWrapper.appendChild(pixelCanvas);
    mainSection.appendChild(imageWrapper);

    const pixelCanvasContext = pixelCanvas.getContext('2d');
    pixelCanvas.width = 15;
    pixelCanvas.height = 15;

    // Use image.onload as needed
    image.onload = () => {
        pixelCanvasContext.drawImage(image, 0, 0, pixelCanvas.width, pixelCanvas.height);
    };

    // Use image.onerror as needed
    image.onerror = (error) => {
        console.error("Error loading image:", error);
    };
};

// Function to load random images concurrently with uniqueness check
export const loadRandomImagesConcurrently = async (count = 44) => {
    try {
        const mainSection = document.querySelector("main");

        // Map to store unique dog requests and their indices
       

        // Array to store promises for each image loading operation
        const imagePromises = Array.from({ length: count }, async () => {
            let res;
            do {
                // Fetch a random image
                res = await fetchRandomImage();
            } while (uniqueDogSet.has(JSON.stringify(res)));

            // Add the dog request to the map with its index
            uniqueDogSet.add(JSON.stringify(res));

            return res;
        });

        // Wait for all fetch operations to complete
        const imageDataArray = await Promise.all(imagePromises);

        // Create and append images to the DOM
        imageDataArray.forEach(data => createAndAppendImage(data, mainSection));
    } catch (error) {
        console.error("Error loading images:", error);
    }
};
console.log(uniqueDogSet)
// document.addEventListener('DOMContentLoaded', () => {
//     // Initially load random images after DOM content is loaded
//     loadRandomImagesConcurrently();
// });
