"use strict";
import {gallowsPartWrapper}     from "./gallows-ui-element.js";
import {quizPartWrapperElement} from "./quiz-ui-element.js";

export const createMainElement = (questionWithAnswer, onKeyListener) => {
  const mainElement = document.createElement('main');

  mainElement.prepend(
      gallowsPartWrapper,
      quizPartWrapperElement(questionWithAnswer, onKeyListener)
  );

  return mainElement;
}
