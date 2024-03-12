import { loadAndAppendImages } from "./images.js";
import { firstQuestionTemplate } from "./firstQuestion.js";


const pageButton = document.querySelector("main section button");



document.addEventListener('DOMContentLoaded', () => {
    // Initially load random images after DOM content is loaded
    loadAndAppendImages();
});

pageButton.addEventListener("click", () => {
  
        firstQuestionTemplate();
    


 
});
