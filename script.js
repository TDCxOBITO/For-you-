// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Cute love questions
const questions = [
  {
    question: "Do you know how special you are to me?",
    options: ["I think so 🥺", "Maybe...?", "Tell me again! 😘"]
  },
  {
    question: "What's my favorite thing about you?",
    options: ["Your smile 😊", "Your heart 💖", "Everything about you 😍"]
  },
  {
    question: "Would you like a surprise date soon?",
    options: ["Yes!! 😍", "Can’t wait 🥰", "Only if there's cake 🍰"]
  },
  {
    question: "How much do you love me?",
    options: ["Infinity times infinity ♾️", "More than words 💌", "With all my heart ❤️"]
  }
];

let current = 0;

function startQuestions() {
  document.getElementById('question-box').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById('question-text').textContent = q.question;
  const options = document.getElementById('options');
  options.innerHTML = '';
  q.options.forEach(text => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.onclick = nextQuestion;
    options.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById('question-box').innerHTML = `
      <h2>You are my forever ❤️</h2>
      <p>Thank you for being in my life. You're my sunshine, my joy, my everything. I love you! 💖</p>
    `;
  }
}
