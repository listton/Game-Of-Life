import { generateRandomMatrix,
         calcField } from './life';

import { drawGrid,
         drawCells } from './canvas';

import { getSize,
         getIterationCount,
         getTimeInterval } from './form';

export function addListener() {
  const startButton = document.querySelector('.js-start');
  startButton.addEventListener('click', init);
}

function init() {
  const size = getSize();
  const iterationCount = getIterationCount();
  const timeIntervalSec = getTimeInterval();

  startGameOfLife(size, iterationCount, timeIntervalSec);
}

function startGameOfLife(size, iterationCount, timeIntervalSec) {
  const canvas = document.getElementById('life');
  const context = canvas.getContext('2d');

  let matrix = generateRandomMatrix(size, size);

  drawGrid(context, size, size);

  function makeIteration() {
    matrix = calcField(matrix);

    drawCells(context, matrix, size, size);

    if (iterationCount) {
      iterationCount--;
      setTimeout(makeIteration, timeIntervalSec * 1000);
    }
  }

  makeIteration();
}
