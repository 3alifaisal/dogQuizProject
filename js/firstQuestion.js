

import { resetImages } from "./resetimages.js";
import { secondQuestionTemplate } from "./secondQuestion.js";
import { nextQuestion } from "./selectedAnswer.js";

export async function firstQuestionTemplate(){
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Question 1</h2>
    <p>Companionship Level of the dog you want :</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - Extremely affectionate
    </label>

    <label>
        <input type="radio" name="question" value="B">
        B - Less affectionate
    </label>

    <label>
        <input type="radio" name="question" value="C">
        C - I want an independent dog
    </label>

    <button class="question q1">Next</button>

`
const newbutton = document.querySelector(".quiz_window button.q1");

newbutton.addEventListener("click",()=>{

if(nextQuestion()){
    resetImages(7);
   
    secondQuestionTemplate();
 
}
});

}



