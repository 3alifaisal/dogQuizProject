import { nextQuestion } from "./selectedAnswer.js";

import { resetImages } from "./resetimages.js";
import { lastTemplate } from "./lastemplate.js";


export function seventhQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 7</h2>
    <p>Do you consider yourself to be an experienced dog owner</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - No, I never had a dog before
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - Yes, I had or have dogs
    </label>

 
    <button class="question q7">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q7");

    newbutton.addEventListener("click", () => {
        if (nextQuestion()) {
            resetImages(6);
            lastTemplate();
        }
    })
}
