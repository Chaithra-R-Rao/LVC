const correctAnswers = {
    q1: "HyperText Markup Language",
    q2: "To style web pages",
    q3: "getElementById"
};

function calculateScore() {
    let score = 0;

    // Get the form
    const form = document.getElementById("quizForm");

    // Check each question and show correct/incorrect feedback
    for (let question in correctAnswers) {
        const selectedOption = form[question]?.value;
        const correctAnswer = correctAnswers[question];

        // Get all options for the question
        const options = form[question];
        for (const option of options) {
            option.parentElement.style.color = ""; // Reset styles
        }

        if (selectedOption === correctAnswer) {
            score += 2; // Add 2 marks for each correct answer
      

            // Highlight correct answer in green
            for (const option of options) {
                if (option.value === correctAnswer) {
                    option.parentElement.style.color = "green";
                }
            }
        } else {
            // Highlight correct answer in green
            for (const option of options) {
                if (option.value === correctAnswer) {
                    option.parentElement.style.color = "green";
                }
            }

            // Highlight the selected wrong answer in red
            if (selectedOption) {
                for (const option of options) {
                    if (option.value === selectedOption) {
                        option.parentElement.style.color = "red";
                    }
                }
            }

        }
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Your total score is: ${score}`;

    // Show the retake button
    document.getElementById("retakeBtn").style.display = "block";
}

function retakeQuiz() {
    // Clear form inputs and reset state
    const form = document.getElementById("quizForm");
    form.reset();

    // Clear result and correct answers
    document.getElementById("result").textContent = "";
    for (let question in correctAnswers) {

        // Reset styles for options
        const options = form[question];
        for (const option of options) {
            option.parentElement.style.color = "";
        }
    }

    // Hide the retake button
    document.getElementById("retakeBtn").style.display = "none";
}
