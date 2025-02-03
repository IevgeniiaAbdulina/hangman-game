"use strict";
import {createVirtualKeyboard} from './virtual-keyboard.js';

function createSecretWordElement(wordLength = 1) {
    const secretWordContainer = document.createElement('div');
    secretWordContainer.className = 'secret-word container';

    const secretWordItemWrapper = document.createElement('div');
    secretWordItemWrapper.className = 'secret-word__item__wrapper';

    for (let i = 0; i < wordLength; i++) {
        const secretWordItem = document.createElement('div');
        secretWordItem.className = 'secret-word__item';
        secretWordItemWrapper.append(secretWordItem);
    }

    secretWordContainer.append(secretWordItemWrapper);
    return secretWordContainer;
}

function clearSecretWordElement(elem, wordLength) {
    const wrapper = elem.querySelector('.secret-word__item__wrapper');

    while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.firstChild);
    }

    for (let i = 0; i < wordLength; i++) {
        const secretWordItem = document.createElement('div');
        secretWordItem.className = 'secret-word__item';
        wrapper.append(secretWordItem);
    }
}

let secretWordElem = undefined;

export function resetUIElements(questionWithAnswer) {
    let question = questionWithAnswer.question;
    let answer = questionWithAnswer.answer;
    let wordLength = answer.length;

    clearSecretWordElement(secretWordElem, wordLength);

    const questionElement = document.querySelector('.question h3');
    questionElement.innerText = `${question}`;

    const incorrectGuessesElem = document.querySelector('.incorrect-guesses span');
    incorrectGuessesElem.innerText = '0 / 6';
}

export const quizPartWrapperElement = (questionWithAnswer, onKeyListener) => {
    const {question, answer} = questionWithAnswer;
    const secretWordLng = answer.length;
    let incorrectGuessesCounter = '0 / 6';

    const virtualKeyboard = createVirtualKeyboard(onKeyListener);

    /**
     * quiz UI part wrapper
     * ------------------------------------
     * */
    const quizPartWrapper = document.createElement('div');
    quizPartWrapper.id = 'quiz-part';
    quizPartWrapper.className = 'wrapper';

    /**
     * quiz container
     * */
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz container';

    /**
     * secret-word
     * */
    secretWordElem = createSecretWordElement(secretWordLng);

    /**
     * question
     * */
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question container';

    const questionElement = document.createElement('h3');
    questionElement.className = 'question';
    questionElement.innerText = `${question}`;

    questionContainer.append(questionElement);

    /**
     * incorrect guesses
     * */
    const incorrectGuessesContainer = document.createElement('div');
    incorrectGuessesContainer.className = 'incorrect-guesses container';

    const incorrectGuesses = document.createElement('p');
    incorrectGuesses.innerHTML = 'Incorrect guesses:';

    const guessesContainer = document.createElement('span');
    guessesContainer.innerText = `${incorrectGuessesCounter}`;

    incorrectGuessesContainer.append(incorrectGuesses, guessesContainer);

    quizContainer.append(
        secretWordElem,
        questionContainer,
        incorrectGuessesContainer
    );

    /**
     * keyboard container
     * ------------------------------------
     * */
    const keyboardContainer = document.createElement('div');
    keyboardContainer.className = 'keyboard container';
    keyboardContainer.append(virtualKeyboard);

    quizPartWrapper.append(
        quizContainer,
        keyboardContainer
    );

    return quizPartWrapper;
}
