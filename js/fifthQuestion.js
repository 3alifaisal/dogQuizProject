import { nextQuestion } from "./selectedAnswer.js";

import { resetImages } from "./resetimages.js";
import { sixthQuestionTemplate } from "./sixthQuestion.js";

export function fifthQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 5</h2>
    <p>Do you have small kids ? </p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - Yes, I do or at least I have small children around
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - No, not really not that I know of
    </label>

 
    <button class="question q5">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q5");

    newbutton.addEventListener("click", () => {
        if (nextQuestion()) {
            resetImages(6);
            sixthQuestionTemplate();
        }
    })
}
