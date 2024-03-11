export const uniqueDogSet = new Set();
export const originalImages = []
// Function to fetch a single random image
const fetchRandomImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    return response.json();
};

// Function to create an image element from the data and append it to the DOM
const createAndAppendImage = (data, index) => {
  
    const image = new Image();
    image.src = data.message;
   
    originalImages.push(image);
    const imageWrappers = document.querySelectorAll("figure");
    const pixelCanvas = document.createElement("canvas");
    imageWrappers[index].appendChild(pixelCanvas);
    imageWrappers[index].style.setProperty('--before-opacity', "1")
   

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
        imageDataArray.forEach((data,index) => createAndAppendImage(data, index));
    } catch (error) {
        console.error("Error loading images:", error);
    }
};
console.log(uniqueDogSet)
console.log(originalImages)
