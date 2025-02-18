function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 2500; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.color = "white";
      // position of the star
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
  

// Quiz Questions
const questions = [
    {
        question: "What is the largest planet in the solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Jupiter"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mercury", "Venus", "Earth", "Mars"],
        correct: "Mars"
    },
    {
        question: "Which planet has the most extensive ring system?",
        answers: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        correct: "Saturn"
    }
];

let currentQuestionIndex = 0;
let score=0;

// Load Question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const buttons = document.querySelectorAll(".options button");
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.setAttribute("data-answer", question.answers[index] === question.correct);
        button.style.background = "white";
    });

    document.getElementById("result").textContent = "";
    document.querySelector(".next-btn").style.display = "none";
}

// Check Answer
function checkAnswer(button) {
    const isCorrect = button.getAttribute("data-answer") === "true";
    const resultElement = document.getElementById("result");

    if (isCorrect) {
        button.style.background = "#4CAF50";
        resultElement.textContent = "Correct! 🎉";
        score++;
    } else {
        button.style.background = "#FF5733";
        resultElement.textContent = "Wrong! Try again. ❌";
    }

    document.querySelector(".next-btn").style.display = "block";
}



// Load Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h1>QUIZ COMPLETED!</h1>
            <p>Well done! 🎉</p>
            <p>Your final score is: ${score} / ${questions.length}</p>
            <button onclick="restartQuiz()">Restart Quiz</button>
            <button onclick="goHome()">Go to Home</button> <!--Home Button -->
            `;
    }
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0; // Reset the score
    document.querySelector(".quiz-container").innerHTML = `
        <h2 id="question"></h2> <!-- Placeholder for the question -->
        <div class="options">
            <button onclick="checkAnswer(this)"></button>
            <button onclick="checkAnswer(this)"></button>
            <button onclick="checkAnswer(this)"></button>
            <button onclick="checkAnswer(this)"></button>
        </div>
        <p id="result"></p>
        <button class="next-btn" onclick="nextQuestion()" style="display: none;">Next</button>
    `;
    loadQuestion();
}

function goHome(){
    window.location.href="cosmicverse.html";
}

// Start Quiz
window.onload = loadQuestion;