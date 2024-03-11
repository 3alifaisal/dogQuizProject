import { selectedAnswersStr } from "./selectedAnswer";
import { getMatchingCombinationObj } from "./matchingDog";



export function lastTemplate(INDEX = 0) {
    const combinationObj = getMatchingCombinationObj(selectedAnswersStr);
    let matchingUrl = combinationObj.url;
    let matchingDog = combinationObj.name;
    let matchingDescription = combinationObj.description
    
  
  
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
    <h2>Your result</h2>
    <figure>
    <img src=${matchingUrl[INDEX]} alt="Dog's Image">
    </figure>
    <figcaption>${matchingDog[INDEX]}</figcaption>
    <p> ${matchingDescription[INDEX]}</p>
    `
}


