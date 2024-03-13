import { nextQuestion } from "./selectedAnswer.js";
import { fifthQuestionTemplate } from "./fifthQuestion.js";
import { resetImages } from "./resetimages.js";
export function fourthQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 4</h2>
    <p>How do you feel about barking ... ? <span class="alternate">(fOr Dogs of course)</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - The less a dog barks the better
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - I don't mind it here and there
    </label>

    <label>
        <input type="radio" name="question" value="C">
        C - I love enthusiastic barking dogs
    </label>

 
    <button class="question q4">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q4");

    newbutton.addEventListener("click", () => {
        if (nextQuestion()) {
            resetImages(6);
            fifthQuestionTemplate();
        }
    })
}
