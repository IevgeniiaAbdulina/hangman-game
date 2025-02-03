"use strict";
let renderContext;
let handlerId = -1;
let canvasWidth;
let canvasHeight;
let dots = [];
let dpi = window.devicePixelRatio;
const dotSize = 6;
const dotsNum = 60;

const dotItem = {
    id: 0,
    x: 0,
    y: 0,
    shown: false,
    alpha: 0,
}

let test;

export const createCanvas = () => {
    const canvas = document.createElement("canvas");
    canvas.setAttribute('id', 'canvas-container');
    renderContext = canvas.getContext("2d");
    renderContext.imageSmoothingQuality = "high";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return canvas;
}

function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

export const startAnimation = () => {
    handlerId = setInterval(() => {
        animate();
    }, 10)
}

export const stopAnimation = () => {
    if (handlerId !== -1) {
        clearInterval(handlerId);
    }
}

function animate() {
    if (!renderContext) return;
    renderContext.fillStyle = '#8BCD48';

    for (let dot of dots) {
        renderContext.clearRect(dot.x, dot.y, dotSize, dotSize);

        if (dot.shown && dot.alpha >= 100) {
            dot.shown = !dot.shown;
        } else if (!dot.shown && dot.alpha <= 0) {
            dot.shown = !dot.shown;
            dot.x = Math.floor(Math.random() * canvasWidth);
            dot.y = Math.floor(Math.random() * canvasHeight);
        }
        if (dot.shown) {
            dot.alpha += 2
        } else {
            dot.alpha -= 2
        }

        let alpha = dot.alpha / 100;
        alpha = alpha >= 1 ? 0 : alpha;
        alpha = alpha < 0 ? 0 : alpha;
        renderContext.globalAlpha = dot.alpha / 100;
        renderContext.fillRect(dot.x, dot.y, dotSize, dotSize);
    }

    renderContext.fillStyle = '#A6F80E';
    renderContext.fillRect(test.x, test.y, dotSize, dotSize);
}

export function updateCanvas(canvas) {
    resizeCanvas(canvas);

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    createDots(dotsNum, canvasWidth, canvasHeight);
}

function createDots(dotsNum, canvasWidth, canvasHeight) {
    dots = [];
    for (let i = 0; i < dotsNum; i++) {
        let dot = Object.create(dotItem);
        dot.id = i;
        dot.x = Math.floor(Math.random() * canvasWidth);
        dot.y = Math.floor(Math.random() * canvasHeight);
        dot.shown = Math.random() > 0.5;
        dot.alpha = dot.shown ? 0 : 100;
        dots.push(dot);
    }

    test = Object.create(dotItem);
    test.x = canvasWidth;
    test.y = 500;
    test.shown = true;
    test.alpha = 0;
}

