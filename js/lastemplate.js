import { selectedAnswersStr, resetSelectedAnswersStr } from "./selectedAnswer.js";
import { getMatchingCombinationObj } from "./matchingDog.js";
import { loadAndAppendImages, resetOriginalImages } from "./images.js";
import { firstQuestionTemplate } from "./firstQuestion.js";
import { emptytheResetImagesSet } from "./resetimages.js";



export async function lastTemplate(INDEX = 0) {
    let combinationObj = await getMatchingCombinationObj(selectedAnswersStr);

    let matchingUrl = combinationObj.url;
    console.log(matchingUrl);
    
    let matchingDog = combinationObj.name;
    let matchingDescription = combinationObj.description;
    let displayedUrl;
    let displayedDog;
    let displayedDescription;
    
    if(Array.isArray(matchingDog)){
        displayedDog = matchingDog[INDEX];
        displayedUrl = matchingUrl[INDEX];
        displayedDescription = matchingDescription[INDEX]
    }   else{
        displayedDog = matchingDog;
        displayedUrl = matchingUrl;
        displayedDescription = matchingDescription;
    }
    console.log(displayedUrl);
  
  
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.innerHTML = `
   
    <figure class="lastTemplate">
    <img class="lastTemplate" src=${displayedUrl} alt="Dog's Image">
    </figure>
    <p class="lastTemplate"> Your Result: ${displayedDescription}</p>
    <button class="restartGame">Play again</button>
    `
    const pageButton = quizWindow.querySelector("button.restartGame")
   
    pageButton.addEventListener("click" ,() => {
        emptytheResetImagesSet();
        resetOriginalImages();
        resetSelectedAnswersStr();
        loadAndAppendImages()
        firstQuestionTemplate();
    })
   
}


