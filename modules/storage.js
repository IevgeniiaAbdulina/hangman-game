import {generateIndexes} from "./quiz-data.js";

export function saveLocalStorage(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

export function loadLocalStorage() {
  return JSON.parse(localStorage.getItem("data"));
}

export function setInitialData() {
  let questionIndexes = loadLocalStorage();

  if (!questionIndexes || questionIndexes.length === 0) {
    questionIndexes = generateIndexes();
    saveLocalStorage(questionIndexes);
  }

  return questionIndexes;
}
