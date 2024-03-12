
export let originalImages = []
// Function to fetch a single random image
const fetchRandomImages = async (count=44) => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
   const data = await response.json();
 return data;
};

// Function to create an image element from the data and append it to the DOM
export const loadAndAppendImages = async () => {
    const imageDataObj = await fetchRandomImages();
    const messageKeyArr = imageDataObj.message
    let messageKeyArrUnique = returnUniqueArr(messageKeyArr);
    if(messageKeyArr.length !== messageKeyArrUnique.length){
        while(messageKeyArrUnique.length !== messageKeyArr.length){ //which is 44
            let newImageDataObj = await fetchRandomImages(messageKeyArr.length - messageKeyArrUnique.length)
            let newMessageKeyArr = newImageDataObj.message
            let newMessageKeyArrUnique = returnUniqueArr(newMessageKeyArr);
            messageKeyArrUnique.push(newMessageKeyArrUnique);
            // check again 
            let messageKeyArrUnique = returnUniqueArr(messageKeyArrUnique);
        }
    }
   
    messageKeyArrUnique.forEach((imgAPI,index) => {

   
    const image = new Image();
    image.src = imgAPI;
   
    originalImages.push(image);
    const imageWrappers = document.querySelectorAll("figure");
    const pixelCanvas = imageWrappers[index].querySelector("canvas")
   
    imageWrappers[index].style.setProperty('--before-opacity', "1")
   

    const pixelCanvasContext = pixelCanvas.getContext('2d');
    pixelCanvasContext.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
    pixelCanvas.width = 15;
    pixelCanvas.height = 15;

    image.onload = () => {
        pixelCanvasContext.drawImage(image, 0, 0, pixelCanvas.width, pixelCanvas.height);
   
    };


    image.onerror = (error) => {
        console.error("Error loading image:", error);
    };
    });
};

export function resetOriginalImages() {
    originalImages = [];
}

function returnUniqueArr(arr) {
    let uniqueImages = new Set();
    let uniqueArrayImages= []
    for(let i = 0; i < arr.length; i++) {
        if(uniqueImages.has(arr[i])){
            continue;
        }
        uniqueImages.add(arr[i]);
        uniqueArrayImages.push(arr[i])
 
    }
    return uniqueArrayImages;
}