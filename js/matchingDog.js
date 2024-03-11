


export async function getMatchingCombinationObj(str) {

    const response = await fetch('data/dogCombinations.json')
    const possibleCombinations = await response.json();
    console.log(possibleCombinations)
    const selectedStrCodeIndex = findCodeIndex(str);
    let combinationObjectInd =  binarySearch(possibleCombinations,selectedStrCodeIndex)
    const combinationObject = possibleCombinations[combinationObjectInd];

if(Array.isArray(combinationObject.name)){
    let urlArray = []
    combinationObject.name.forEach((dog) => {
    urlArray.push(fetchUrl(findDogAPIUrl(dog)))
})
    combinationObject["url"] = urlArray;
    } else {
       combinationObject["url"] = fetchUrl(findDogAPIUrl(combinationObject.name))
    }
return combinationObject;
}


 


function findCodeIndex(str) {
    let strCodeInd = ""
    for(let i = 0; i<str.length; i++){
        if(str[i] === "A") strCodeInd += "1";
        if(str[i] === "B") strCodeInd += "2";
        if(str[i] === "C") strCodeInd += "3";
    }
    return Number(strCodeInd);
}

function binarySearch(objects, targetCodeInd) {
    let low = 0;
    let high = objects.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let currentObject = objects[mid];

        if (currentObject.codeIndex === targetCodeInd) {
            return mid; 
        } else if (currentObject.codeIndex < targetCodeInd) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    throw new Error("something is wrong with data object"); // Target not found in the array
}

function findDogAPIUrl(dogName){
   
    let splittedName = dogName.split(" ");
    let nameLength = splittedName.length;
    let apiUrl;
    switch(nameLength){
        case 1: 
            apiUrl = `https://dog.ceo/api/breed/${dogName}/images/random`;
            break;
        case 2:
            let subBreed = splittedName[0];
            let breed = splittedName[1];
            apiUrl = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
            break;
        default:
            throw new Error("Invalid length for name");
    }
    return apiUrl;
}


async function fetchUrl(url) {
    try {
        const response = await fetch(url)
        const data = await response.json();
        const responseUrl = data.message;
        return responseUrl
    } catch (e) {
        console.error("error fetching dog")
    }
}