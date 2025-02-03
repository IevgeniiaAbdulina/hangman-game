"use strict";
import {resetUIElements}                                 from "./modules/quiz-ui-element.js";
import {
  changeKeyboardKeyState,
  clearKeyboard,
}                                                        from "./modules/virtual-keyboard.js";
import {createUIBodyParts, hideBodyParts, showBodyParts} from "./modules/body-parts-utils.js";
import {headerElement}                                   from "./modules/header-ui-element.js";
import {createCanvas, startAnimation, updateCanvas}      from "./modules/backgraund-canvas.js";
import {playKeySound}                                    from "./modules/sounds/key-down-sound.js";
import {createMainElement}                               from "./modules/main-ui-element.js";
import {
  checkWinOrLoose, getGuessesCounter, getLetterIndex,
  getQuestionWithAnswer, isGameStopped, isLetterAccepted, maxGuessesCounter,
  processLetter,
  setInitialState, updateGuessesCounter
}                                                        from "./modules/game-logic.js";
import {hideModal, isModalShown}                         from "./modules/modal-ui-element.js";
import {
  playStartGame
}                                                        from "./modules/sounds/game-start-sound.js";

let canvasElement;

function createUIBodyElement() {
  const header = headerElement();
  const mainElement = createMainElement(getQuestionWithAnswer(), onKeyListener);
  document.body.prepend(header, mainElement, canvasElement);
}

addEventListener("load", () => {
  canvasElement = createCanvas();
  setInitialState();
  createUIBodyElement();
  createUIBodyParts();
  startAnimation();
  updateCanvas(canvasElement);
  playStartGame();
});

window.addEventListener('resize', () => {
  updateCanvas(canvasElement);
});

function onCloseModalListener() {
  hideModal();
  setInitialState();
  resetUIElements(getQuestionWithAnswer());
  hideBodyParts();
  clearKeyboard();
  playStartGame();
}

window.addEventListener('keydown', event => {
  if (isModalShown()) {
    if (event.key === "Enter" || event.key === "Escape") {
      onCloseModalListener();
    }
  }

  handleLetter(event.key);
});

function onKeyListener(key) {
  handleLetter(key);
}

function handleLetter(letter) {
  if (isGameStopped()) return;
  if (!isLetterAccepted(letter)) return;

  playKeySound();

  let isSymbolGuessed = processLetter(letter, showLetter);
  let index = getLetterIndex(letter)
  changeKeyboardKeyState(index, true);

  if (!isSymbolGuessed) {
    updateGuessesCounter();
    guessesCounter();
    showBodyParts(getGuessesCounter());
  }

  checkWinOrLoose(onCloseModalListener);
}

function showLetter(index, letter) {
  const letterElement = document.querySelector(`.secret-word__item:nth-child(${index + 1})`);
  letterElement.innerText = letter;
  letterElement.style = "border-bottom: none";
}

function guessesCounter() {
  const uiElement = document.querySelector('.incorrect-guesses span');
  uiElement.innerText = `${getGuessesCounter()} / ${maxGuessesCounter}`;
}
