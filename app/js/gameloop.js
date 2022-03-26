import { generateRandomMatrix,
         calcField } from './life';

import { drawGrid,
         drawCells,
         clearCanvas } from './canvas';

import { getSize,
         getIterationCount,
         getTimeInterval } from './form';

const canvas = document.getElementById('life');
const context = canvas.getContext('2d');
let iterationCount;
let timerForIteration;

export function addListeners() {
  const startButton = document.querySelector('.js-start');
  startButton.addEventListener('click', init);

  const clearButton = document.querySelector('.js-clear');
  clearButton.addEventListener('click', clear);
}

function init() {
  const size = getSize();
  const timeIntervalSec = getTimeInterval();

  iterationCount = getIterationCount();

  startGameOfLife(size, timeIntervalSec);
}

function startGameOfLife(size, timeIntervalSec) {
  let matrix = generateRandomMatrix(size, size);

  drawGrid(context, size, size);

  function makeIteration() {
    matrix = calcField(matrix);

    drawCells(context, matrix, size, size);

    if (iterationCount) {
      iterationCount--;
      timerForIteration = setTimeout(makeIteration, timeIntervalSec * 1000);
    }
  }

  makeIteration();
}

function clear() {
  iterationCount = 0;

  clearTimeout(timerForIteration);
  clearCanvas(context);
}
