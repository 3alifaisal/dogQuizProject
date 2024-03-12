
import { originalImages } from "./images.js";

const getRandomNumber = (max) => Math.floor(Math.random() * max);
let alreadyResetDogs = new Set()

export const resetImages = (count) =>{
  
    const resetCount = Math.min(count, originalImages.length-alreadyResetDogs.size);
    let images = document.querySelectorAll("main figure canvas")
   for(let i = 0; i < resetCount; i++){

    const randomIndex = getRandomNumber(originalImages.length);
    let randomImage = images[randomIndex];

    let originalImageSource = originalImages[randomIndex];
    if(alreadyResetDogs.has(randomImage)){
        i--;
        continue;
    }
    updateEachImage(randomImage,originalImageSource)
    alreadyResetDogs.add(randomImage);
   }
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}


async function updateEachImage(canvas,image) {
    const context = canvas.getContext('2d');
   let originalWidth = canvas.width;
   let originalHeight = canvas.height;
   let canvasWrapper = canvas.parentNode;
  for(let i =0; i < 20 ; i++){
    let t = i/20;
    await wait(50);

    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = lerp(originalWidth,image.naturalWidth,t);
  
    canvas.height = lerp(originalHeight,image.naturalHeight, t)
    let computedOpacity = lerp(1, 0, t)
    canvasWrapper.style.setProperty('--before-opacity', computedOpacity.toString());
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
   }
    // Draw the image on the canvas when it's loaded
    
     
  
}

function emptytheResetImagesSet() {
    alreadyResetDogs = new Set()
}