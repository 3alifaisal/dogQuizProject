


export async function getMatchingCombinationObj(str) {

    const response = await fetch('data/dogCombinations.json')
    const possibleCombinations = await response.json();
    console.log(possibleCombinations)
    const selectedStrCodeIndex = findCodeIndex(str);
    console.log(selectedStrCodeIndex)
    let combinationObjectInd =  binarySearch(possibleCombinations,selectedStrCodeIndex)
    console.log(combinationObjectInd)
    const combinationObject = possibleCombinations[combinationObjectInd];
    console.log(combinationObject)
if(Array.isArray(combinationObject.name)){
  
    let urlArray = await Promise.all(combinationObject.name.map((dog) => {
    let url = findDogAPIUrl(dog.toLowerCase());
    return fetchUrl(url)
   
}))
    combinationObject["url"] = urlArray;
    } else {
        let dog  = combinationObject.name;
        let url = findDogAPIUrl(dog.toLowerCase());
       combinationObject["url"] = await fetchUrl(url)
    }
    console.log(combinationObject)
return combinationObject;
}


 


function findCodeIndex(str) {
    console.log(str)
    let strCodeInd = ""
    for(let i = 0; i<str.length; i++){
        if(str[i] === "A") strCodeInd += "1";
        if(str[i] === "B") strCodeInd += "2";
        if(str[i] === "C") strCodeInd += "3";
    }
    console.log(Number(strCodeInd))
    return Number(strCodeInd);
}

function binarySearch(objects, targetCodeInd) {
    let low = 0;
    let high = objects.length - 1;
    console.log(targetCodeInd)
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

    console.error("couldn't find object")
}

function findDogAPIUrl(dogName){
    console.log(dogName);
   
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
           console.error("Invalid length for name");
    }
    console.log(apiUrl);
    return apiUrl;
}


async function fetchUrl(url) {
    try {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json();
        const responseUrl = data.message;
        console.log(responseUrl);
        return responseUrl
    } catch (e) {
        console.error("error fetching dog")
    }
}

