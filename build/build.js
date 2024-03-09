const fs = require('fs');

// Define options
const companionship = ['A', 'B', 'C'];
const livingSpace = ['A', 'B'];
const activityLevel = ['A', 'B'];
const barkingTendency = ['A', 'B', 'C'];
const childrenAndFamily = ['A', 'B'];
const groomingPreferences = ['A', 'B'];
const experienceLevel = ['A', 'B'];

// Generate all possible combinations
const allCombinations = [];

for (const c1 of companionship) {
    for (const c2 of livingSpace) {
        for (const c3 of activityLevel) {
            for (const c4 of barkingTendency) {
                for (const c5 of childrenAndFamily) {
                    for (const c6 of groomingPreferences) {
                        for (const c7 of experienceLevel) {
                            const code = `${c1}${c2}${c3}${c4}${c5}${c6}${c7}`;
                            const codeIndex = parseInt(code.replace(/[ABC]/g, (match) => ({ 'A': '1', 'B': '2', 'C': '3' })[match]), 10);
                            allCombinations.push({
                                code,
                                codeIndex,
                                id: allCombinations.length + 1,
                                name: "Dog's Suitable Name"  // Replace with the actual dog name
                            });
                        }
                    }
                }
            }
        }
    }
}

// Sort combinations by codeIndex
allCombinations.sort((a, b) => a.codeIndex - b.codeIndex);

// Write combinations to a file
fs.writeFileSync('dogCombinations.json', JSON.stringify(allCombinations, null, 2));

console.log('Dog combinations generated and saved to dogCombinations.json');
