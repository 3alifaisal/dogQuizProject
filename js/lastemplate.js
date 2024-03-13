import { selectedAnswersStr, resetSelectedAnswersStr } from "./selectedAnswer.js";
import { getMatchingCombinationObj } from "./matchingDog.js";
import { loadAndAppendImages, resetOriginalImages } from "./images.js";
import { firstQuestionTemplate } from "./firstQuestion.js";
import { emptytheResetImagesSet } from "./resetimages.js";



export async function lastTemplate(DOG_INDEX = 0,PIC_INDEX = 0) {
    let combinationObj = await getMatchingCombinationObj(selectedAnswersStr);
    console.log(combinationObj);
    let matchingUrl = combinationObj.url;
    console.log(matchingUrl);
    
    let matchingDog = combinationObj.name;
    let matchingDescription = combinationObj.description;
   
    let displayedDescription;
    let displayedUrl = matchingUrl[DOG_INDEX][PIC_INDEX];
   
    let foundDogs = 1;
    let foundImages = matchingUrl[DOG_INDEX].length  // gauranteed to get more than one image
    if(Array.isArray(matchingDog)){

       
        displayedDescription = matchingDescription[DOG_INDEX]
        foundDogs = matchingDog.length
    }   else{

        
        displayedDescription = matchingDescription;
    }
    console.log(displayedUrl);
    let message;
    if(foundDogs ===1){
        message= "We have found a dog suitable for you!!"
    } else{
        message =`We have found ${foundDogs} dogs suitable for you!!`
    }

  
    const quizWindow = document.querySelector("main section.quiz_window");
    quizWindow.style
    quizWindow.innerHTML = `
    <h2 class="lastTemplate">${message}</h2>
    <figure class="lastTemplate">
    <button class="nextImage">next Img</button>

    <button class="nextDog">next Dog</button>

    <button class="prevImage">prev Img</button>

    <button class="prevDog">prev Dog</button>

    <img class="lastTemplate" src=${displayedUrl} alt="Dog's Image">
    </figure>
   
    <p class="lastTemplate"> Dog description: ${displayedDescription}</p>
    <button class="restartGame">Play again</button>
    `
    const restartGameButton = quizWindow.querySelector("button.restartGame")
    const nextDogButton = quizWindow.querySelector("figure button.nextDog")
    const prevDogButton = quizWindow.querySelector("figure button.prevDog")
    const nextImageButton = quizWindow.querySelector("figure button.nextImage")
    const prevImageButton = quizWindow.querySelector("figure button.prevImage")
    restartGameButton.addEventListener("click" ,() => {
        emptytheResetImagesSet();
        resetOriginalImages();
        resetSelectedAnswersStr();
        loadAndAppendImages()
        firstQuestionTemplate();
    })
   nextDogButton.addEventListener("click",() => {
    // more than one dog found
    console.log(foundDogs);
    console.log("button pressed")
    if(foundDogs > 1){
        DOG_INDEX++;
        // is the current dog_index included ?
       if(DOG_INDEX < foundDogs){
        PIC_INDEX = 0
        lastTemplate(DOG_INDEX,PIC_INDEX);
       } else{
        // decrement the dog index to cancel out incrementation
        
        DOG_INDEX--;
       }
    }
    else{
        alert("Sorry, we found just one dog for you.")
    }
   })
    prevDogButton.addEventListener("click",() => {

        DOG_INDEX--;
        if(DOG_INDEX >= 0){
            PIC_INDEX =0
            lastTemplate(DOG_INDEX,PIC_INDEX)
        }else{
            DOG_INDEX++;
        }
    })
    nextImageButton.addEventListener("click",() => {
      PIC_INDEX++;
      if(PIC_INDEX < foundImages){
        lastTemplate(DOG_INDEX,PIC_INDEX)
      } else{
        PIC_INDEX--;
      }
    })
    prevImageButton.addEventListener("click",()=> {
        PIC_INDEX--;
        if(PIC_INDEX >=0){
            lastTemplate(DOG_INDEX,PIC_INDEX)
        } else{
            PIC_INDEX++;
        }
    })
  

}


