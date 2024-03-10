import { loadRandomImagesConcurrently } from "./images.js";
import { firstQuestionTemplate } from "./firstQuestion.js";
import { secondQuestionTemplate } from "./secondQuestion.js";
import { nextQuestion } from "./selectedAnswer.js";

const pageButton = document.querySelector("main section button");

let questionCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Initially load random images after DOM content is loaded
    loadRandomImagesConcurrently();
});

pageButton.addEventListener("click", () => {
    if (questionCount === 0) {
        firstQuestionTemplate();
        questionCount++;
    }

 
});
