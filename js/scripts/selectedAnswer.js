export let selectedAnswersStr = ""

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="question"]:checked');

    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        selectedAnswersStr += answerValue
        console.log(`User selected answer: ${answerValue}`);

        // Add logic to move to the next question or perform other actions
    } else {
        alert("Please select an answer before proceeding to the next question.");
    }
}
 