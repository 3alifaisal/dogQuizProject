import { readFileSync, writeFileSync } from 'fs';

 export function addDescriptionToDog(name, description) {
    // Load existing dog combinations from file
    const existingDogs = JSON.parse(readFileSync('data/dogCombinations.json', 'utf-8'));

    // Find the dog with the specified name
    const targetDog = existingDogs.find((dog) => {
        if (Array.isArray(dog.name)) {
            return dog.name.includes(name);
        } else {
            return dog.name === name;
        }
    });

    if (targetDog) {
        // Add or update the description for the specified dog

        
        if(!targetDog.description) targetDog.description = description
        else{
            if(Array.isArray(targetDog.description)){
                targetDog.description.push(description)
            }
            else{
                if(targetDog.description !== description){
                    targetDog.description = [targetDog.description, description];
                }
            }
        }
        // Save the updated dog combinations to the file
        writeFileSync('data/dogCombinations.json', JSON.stringify(existingDogs, null, 2));

        console.log(`Description added/updated for dog "${name}".`);
    } else {
        console.log(`No dog found with the name "${name}".`);
    }
}

