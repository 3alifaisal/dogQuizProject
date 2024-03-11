import { nextQuestion } from "./selectedAnswer.js";

import { resetImages } from "./resetimages.js";
import { seventhQuestionTemplate } from "./seventhQuestion.js";


export function sixthQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 6</h2>
    <p>Would you be committed to grooming your dog ?</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - Yes, I don't mind grooming
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - I'd prefer a low maintenance dog
    </label>

 
    <button class="question q6">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q6");

    newbutton.addEventListener("click", () => {
        if (nextQuestion()) {
            resetImages(6);
           seventhQuestionTemplate()
        }
    })
}
