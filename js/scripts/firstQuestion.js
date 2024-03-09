
import { uniqueDogSet } from "./images.js";


const pageButton = document.querySelector("main section button");


export async function firstQuestionTemplate(){
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `<div id="quiz-container">
    <h2>Question 1</h2>
    <p>Companionship Level:</p>
    
    <label>
        <input type="radio" name="question" value="A">
        A - Extremely affectionate
    </label><div></div>

    <label>
        <input type="radio" name="question" value="B">
        B - Less affectionate
    </label><div></div>

    <label>
        <input type="radio" name="question" value="C">
        C - Independent
    </label><div></div>

    <button onclick="nextQuestion()">Next</button>
</div>
`
}

pageButton.addEventListener("click",firstQuestionTemplate)

