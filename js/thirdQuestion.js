import { nextQuestion } from "./selectedAnswer.js";
import { fourthQuestionTemplate } from "./fourthQuestion.js";
import { resetImages } from "./resetimages.js";


export function thirdQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 3</h2>
    <p>Would you say you are active ? </p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - No, not really, or not always at least 
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - Yes, I spent a lot of time outside 
    </label>

 
    <button class="question q3">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q3");

    newbutton.addEventListener("click", () => {
        if (nextQuestion()) {
            resetImages(6);
            fourthQuestionTemplate();
        }
    })
}
