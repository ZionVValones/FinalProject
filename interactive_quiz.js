// An array of quiz questions
const questions = [
    {
        question: "What is the main goal of SDG 13?",
        options: ["Ensure clean water", "Take urgent action to combat climate change", "Promote sustainable agriculture", "Reduce ocean pollution"],
        answer: 1
    },
    {
        question: "Which of the following is a renewable energy source?",
        options: ["Coal", "Natural Gas", "Solar Power", "Diesel"],
        answer: 2
    },
    {
        question: "Which one is NOT a way of saving the Earth?",
        options: ["Planting trees and reducing waste", "Using renewable energy", "Leaving lights on", "Recycling materials"],
        answer: 2
    },
    {
        question: "Which human activity contributes most to climate change?",
        options: ["Recycling paper", "Burning fossil fuels", "Planting trees", "Using bicycles"],
        answer: 1
    },
    {
        question: "What does the 5Rs stand for in waste management?",
        options: ["Reduce, Reuse, Recycle, Recover, Repair", "Remove, Replace, Recycle, Reuse, React", "Reduce, Remove, Restore, Renew, Recycle", "Refuse, Reuse, Repurpose, Recycle, Remove"],
        answer: 0
    },
    {
        question: "Which of the following does NOT contribute to climate change?",
        options: ["Deforestation", "Burning fossil fuels", "Using renewable energy", "Excessive plastic use"],
        answer: 2
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionElement.textContent = questions[currentQuestionIndex].question;

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    document.querySelectorAll("#options-container button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "<h2>Quiz Completed!</h2>";
        document.getElementById("next-button").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadQuestion();
});
