let wordList = [
  "c++",
  "python",
  "java",
  "javascript",
  "kotlin",
  "ruby",
  "css",
  "html",
];

let resultMessage = document.getElementById("result-msg");
let queryWord = document.getElementById("query-word");
let inputArea = document.getElementById("word-input");
let changeWordBtn = document.getElementById("change-word-btn");
let submitBtn = document.getElementById("submit-btn");

let currentWord = "";
let scrambledWord = "";

const selectWord = () => {
  let randomIndx = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndx];
};

const scrambleWord = (word) => {
  let charList = word.split("");
  charList.sort(() => Math.random() - 0.5);
  return charList.join("");
};

submitBtn.addEventListener("click", () => {
  let userResponse = inputArea.value;

  resultMessage.innerHTML =
    userResponse === currentWord
      ? "Huuuuyaaa, Correct answer !!"
      : `Sorry, That's not the answer.<br> Try again !!`;

  inputArea.value = "";

  if (userResponse === currentWord) {
    startGame(); // Immediately start with new word after correct answer
  }
});

changeWordBtn.addEventListener("click", () => {
  resultMessage.innerHTML = "";
  startGame();
});

const startGame = () => {
  currentWord = selectWord();
  scrambledWord = scrambleWord(currentWord);
  queryWord.innerHTML = scrambledWord;
  inputArea.focus();
  setTimeout(() => {
    resultMessage.innerHTML = "";
  }, 2000);
};

startGame();
