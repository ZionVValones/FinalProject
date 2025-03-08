// An array of quiz questions
const questions = [
    {
        question: "What is the main goal of SDG 13?",
        options: ["Ensure clean water", "Take urgent action to combat climate change", "Promote sustainable agriculture", "Reduce ocean pollution"],
        answer: 1 // The correct answer is the second option (index 1).
    },
    {
        question: "Which of the following is a renewable energy source?",
        options: ["Coal", "Natural Gas", "Solar Power", "Diesel"],
        answer: 2 // The correct answer is "Solar Power" (index 2).
    },
    {
        question: "Which one is NOT a way of saving the Earth?",
        options: ["Planting trees and reducing waste", "Using renewable energy", "Leaving lights on", "Recycling materials"],
        answer: 2 // The correct answer is "Leaving lights on" (index 2).
    },
    {
        question: "Which human activity contributes most to climate change?",
        options: ["Recycling paper", "Burning fossil fuels", "Planting trees", "Using bicycles"],
        answer: 1 // The correct answer "Burning fossil fuels" (index 1).
    },
    {
        question: "What does the 5Rs stand for in waste management?",
        options: ["Reduce, Reuse, Recycle, Recover, Repair", "Remove, Replace, Recycle, Reuse, React", "Reduce, Remove, Restore, Renew, Recycle", "Refuse, Reuse, Repurpose, Recycle, Remove"],
        answer: 0 // The correct answer is "Reduce, Reuse, Recycle, Recover, Repair" (index 0).
    },
    {
        question: "Which of the following does NOT contribute to climate change?",
        options: ["Deforestation", "Burning fossil fuels", "Using renewable energy", "Excessive plastic use"],
        answer: 2 // The correct answer is "Using renewable energy" (index 2).
    }
];

// Tracks the current question index.
let currentQuestionIndex = 0;

// Function that displays the current question.
function loadQuestion() {
    const questionElement = document.getElementById("question-text"); // Get the question text element.
    const optionsContainer = document.getElementById("options-container"); // Get the container for answer options.
    optionsContainer.innerHTML = ""; // Clear previous options.

    // Set the text content of the question element to the current question.
    questionElement.textContent = questions[currentQuestionIndex].question;
    
    // Loops through the options array.
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button"); 
        button.textContent = option; 
        button.onclick = () => checkAnswer(index, button); 
        optionsContainer.appendChild(button); 
    });
}

function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].answer; // Get the correct answer index.
    
    if (selectedIndex === correctIndex) {
        button.classList.add("correct"); // Apply 'correct' CSS style if the answer is right.
    } else {
        button.classList.add("incorrect"); // Apply 'incorrect' CSS style if the answer is wrong.
    }

    // Prevetns multiple attempts
    document.querySelectorAll("#options-container button").forEach(btn => btn.disabled = true);
}

// Loads the next question or displays the completion message.
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Move to the next question.
        loadQuestion(); // Load the next question.
    } else {
        // If all questions have been answered, display a completion message.
        document.getElementById("question-container").innerHTML = "<h2>Quiz Completed!</h2>";
        document.getElementById("next-button").style.display = "none"; // Hide the "Next" button.
    }
}

loadQuestion();
