
import { resetImages } from "./resetimages.js";
import { nextQuestion } from "./selectedAnswer.js";
import { thirdQuestionTemplate } from "./thirdQuestion.js";

export  function secondQuestionTemplate() {
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 2</h2>
    <p>Living space you have :</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - small Apartment 
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - house with a yard
    </label>

 
    <button class="question q2">Next</button>

`
    const newbutton = document.querySelector(".quiz_window button.q2");

    newbutton.addEventListener("click",()=>{
        if(nextQuestion()){
            resetImages(7);
            thirdQuestionTemplate();
        }
    })
}
