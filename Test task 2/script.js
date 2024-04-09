const questions = [
  {
    question: "How many planets are in the solar system?",
    options: ["8", "9", "10", "11"],
    answer: "8"
  },
  {
    question: "What is the freezing point of water?",
    options: ["0", "-5", "-6", "-10"],
    answer: "0"
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Volga"],
    answer: "Nile"
  },
  {
    question: "How many chromosomes are in the human genome?",
    options: ["42", "44", "46", "48"],
    answer: "46"
  },
  {
    question: "Which of these characters are friends with Harry Potter?",
    options: ["Ron Weasley", "Draco Malfoy", "Hermione Granger", "Neville Longbottom"],
    answer: "Ron Weasley"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa"
  },
  {
    question: "What is the Jewish New Year called?",
    options: ["Hanukkah", "Yom Kippur", "Kwanzaa", "Rosh Hashanah"],
    answer: "Rosh Hashanah"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const counterElement = document.querySelector('.counter');
const nextButton = document.querySelector('.next-btn');

function displayQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";
  current.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', checkAnswer);
    optionsElement.appendChild(optionElement);
  });
  counterElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const current = questions[currentQuestion];
  if (selectedOption === current.answer) {
    event.target.style.backgroundColor = '#4CAF50';
    score++;
  } else {
    event.target.style.backgroundColor = '#FF5733';
    const correctOption = optionsElement.querySelector(`div:nth-child(${current.options.indexOf(current.answer) + 1})`);
    correctOption.style.backgroundColor = '#4CAF50';
  }
  optionsElement.querySelectorAll('.option').forEach(option => {
    option.removeEventListener('click', checkAnswer);
  });
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    nextButton.disabled = true;
  } else {
    const resultElement = document.createElement('div');
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;
    optionsElement.innerHTML = "";
    optionsElement.appendChild(resultElement);
    nextButton.textContent = 'Restart';
    nextButton.removeEventListener('click', nextQuestion);
    nextButton.addEventListener('click', restartQuiz);
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  displayQuestion();
  nextButton.textContent = 'Next';
  nextButton.removeEventListener('click', restartQuiz);
  nextButton.addEventListener('click', nextQuestion);
}

nextButton.addEventListener('click', nextQuestion);

displayQuestion();
