"use strict";

const bodyPartsContainer = new DocumentFragment();

const headElement = document.createElement("div");
headElement.className = "body-parts__head body-item";

const bodyElement = document.createElement("div");
bodyElement.className = "body-parts__body body-item";

const leftArm = document.createElement("div");
leftArm.className = "body-parts__left-arm body-item";
const rightArm = document.createElement("div");
rightArm.className = "body-parts__right-arm body-item";

const leftLeg = document.createElement("div");
leftLeg.className = "body-parts__left-leg body-item";
const rightLeg = document.createElement("div");
rightLeg.className = "body-parts__right-leg body-item";

bodyPartsContainer.append(
    headElement,
    bodyElement,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg
);

export {bodyPartsContainer}
