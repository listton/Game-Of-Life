import { generateRandomMatrix,
         calcField } from './life';
import { drawGrid,
         drawCells } from './canvas';

import './styles/index.styl';

const canvas = document.getElementById('life');
const context = canvas.getContext('2d');

// TODO: add inputs for customize:
const defaultSize = 20;
const defaultIterationConut = 10;
const defaultTimeInterval = 1;

function startGameOfLife(iterationCount, timeIntervalSec) {
  let matrix = generateRandomMatrix(defaultSize, defaultSize);

  drawGrid(context, defaultSize, defaultSize);

  function makeIteration() {
    matrix = calcField(matrix);

    drawCells(context, matrix, defaultSize, defaultSize);

    if (iterationCount) {
      iterationCount--;
      setTimeout(makeIteration, timeIntervalSec * 1000);
    }
  }

  makeIteration();
}

startGameOfLife(defaultIterationConut, defaultTimeInterval);
