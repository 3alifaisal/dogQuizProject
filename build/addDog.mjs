import { readFileSync, writeFileSync } from 'fs';

 export async function assignDogName(name, code) {
    // Load existing dog combinations from file
    const existingDogs = JSON.parse(readFileSync('dogCombinations.json', 'utf-8'));

    // Find the dog with the specified code combination
    const targetDog = existingDogs.find((dog) => dog.code === code);

    if (targetDog) {
        // Check if the current name is "Dog's Suitable Name"
        if (targetDog.name === "Dog's Suitable Name") {
            // Update the name for the specified dog
            targetDog.name = name;
        } else {
            // Check if the name is already an array
            if (Array.isArray(targetDog.name)) {
                // Add the new name to the array if it's not already present
                if (!targetDog.name.includes(name)) {
                    targetDog.name.push(name);
                }
            } else {
                // Convert the name to an array and add the new name
                if (targetDog.name !== name) {
                    targetDog.name = [targetDog.name, name];
                }
            }
        }

        // Save the updated dog combinations to the file
        writeFileSync('dogCombinations.json', JSON.stringify(existingDogs, null, 2));

        console.log(`Dog "${name}" assigned successfully.`);
    } else {
        console.log(`No dog found with the code combination "${code}".`);
    }
}

