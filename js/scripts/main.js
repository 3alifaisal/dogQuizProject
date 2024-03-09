import { loadRandomImagesConcurrently } from "./images.js";
import { firstQuestionTemplate } from "./firstQuestion.js";
const pageButton = document.querySelector("main section button");


document.addEventListener('DOMContentLoaded', () => {
    // Initially load random images after DOM content is loaded
    loadRandomImagesConcurrently();
});
pageButton.addEventListener("click", firstQuestionTemplate)