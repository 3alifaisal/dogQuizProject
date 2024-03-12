// after adding the dog its also important to add the other combinations to avoid gaps 
import { readFileSync, writeFileSync } from 'fs';
const existingDogs = JSON.parse(readFileSync('data/dogCombinations.json', 'utf-8'))
const existingDogsCopy = JSON.parse(JSON.stringify(existingDogs));



function fillCombinations() {
    
    const targetDog = existingDogsCopy.find((dog) => dog.name === "Dog's Suitable Name");
    if(!targetDog) return;
    let dogIndex = targetDog.id - 1;
    let i = 1;
    while (targetDog.name === "Dog's Suitable Name"){
        let dogBelow = existingDogs[dogIndex - i] 
        let dogAbove = existingDogs[dogIndex + i]
        
        if(dogBelow)   if (dogBelow.name !== "Dog's Suitable Name"){
            targetDog.name = dogBelow.name;
            targetDog.description = dogBelow.description
            break;
        }

        if (dogAbove) if (dogAbove.name !== "Dog's Suitable Name"){
            targetDog.name = dogAbove.name;
            targetDog.description = dogAbove.description
            break;
        }
        i++
    }

    console.log("dog changed successfully "+ dogIndex + " new dog name:" + targetDog.name )
    fillCombinations();
}

fillCombinations()
console.log(existingDogsCopy);

writeFileSync('data/dogCombinations.json', JSON.stringify(existingDogsCopy, null, 2));