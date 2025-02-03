import {saveLocalStorage, setInitialData} from "./storage.js";
import {alphabet, getUniqueQuestion}      from "./quiz-data.js";
import {playWinsSound}                    from "./sounds/wins-sound.js";
import {showModal}                        from "./modal-ui-element.js";
import {playGameOverSound}                from "./sounds/loose-sound.js";

let secretWord = '';
let shadowSecretWord = [];

let selectedLetter = '';
let usedLetters = [];

let questionIndexes = [];

let guessesCounter = 0;
export const maxGuessesCounter = 6;

let stopGame = false;
let result = '';

export function setInitialState() {
  usedLetters.length = 0;
  selectedLetter = '';
  guessesCounter = 0;
  stopGame = false;
  result = '';

  questionIndexes = setInitialData();
}

export const getGuessesCounter = () => {
  return guessesCounter;
}

export const updateGuessesCounter = () => {
  guessesCounter += 1;
}

export const isGameStopped = () => {
  return stopGame;
}

export function getQuestionWithAnswer() {
  const questionIndex = questionIndexes.pop();
  saveLocalStorage(questionIndexes);

  let questionWithAnswer = getUniqueQuestion(questionIndex);
  secretWord = questionWithAnswer.answer;
  shadowSecretWord = Array(secretWord.length);

  return questionWithAnswer;
}

/**
 * process secret word letter
 * */
export function processLetter(letter, showLetterCallback) {
  selectedLetter = new RegExp(letter, "g");
  const matches = secretWord.toLowerCase().matchAll(selectedLetter);

  let isSymbolGuessed = false;
  for (const match of matches) {
    showLetterCallback(match.index, letter);
    updateShadowSecretWord(match.index, letter);

    isSymbolGuessed = true;
  }
  return isSymbolGuessed;
}

function updateShadowSecretWord(startIndex, item) {
  shadowSecretWord.splice(startIndex, 1, item);
}

export function checkWinOrLoose(onCloseModalListener) {
  if (shadowSecretWord.join('') === secretWord.toLowerCase()) {
    playWinsSound();
    showModal('YOU WIN!', secretWord, onCloseModalListener);
    stopGame = true;
    return;
  }
  if (guessesCounter >= maxGuessesCounter) {
    playGameOverSound();
    showModal('YOU LOOSE!', secretWord, onCloseModalListener);
    stopGame = true;
  }
}

export function isLetterAccepted(letter) {
  if (!alphabet.includes(letter)) return false;
  return !usedLetters.includes(letter);
}

export function getLetterIndex(letter) {
  let index = alphabet.indexOf(letter);
  usedLetters.push(letter);
  return index;
}
