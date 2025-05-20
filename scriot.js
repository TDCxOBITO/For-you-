// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Questions logic
const questions = [
  {
    question: "Do you know how much I love you?",
    options: ["A little?", "Too much!", "Infinity ❤️"]
  },
  {
    question: "Will you be my forever?",
    options: ["Yes", "Always", "Forever and always 💍"]
  },
  {
    question: "Ready for a surprise soon?",
    options: ["I can't wait!", "Tell me now 😍", "Is it chocolate? 🍫"]
  }
];

let currentQuestion = 0;

function startQuestions() {
  document.getElementById('question-box').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question-text').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = nextQuestion;
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById('question-box').innerHTML = "<h2>You're my everything ❤️</h2><p>Thank you for being you. I love you more every day.</p>";
  }
}
