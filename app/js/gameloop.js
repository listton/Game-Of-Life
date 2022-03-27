import { generateRandomMatrix,
         calcField } from './life';

import { drawGrid,
         drawCells,
         clearCanvas } from './canvas';

import { getSize,
         getIterationCount,
         getTimeInterval } from './validation';

const canvas = document.getElementById('life');
const context = canvas.getContext('2d');

let iterationCount;
let matrix;
let timeIntervalSec;
let timerForIteration;

export function addListeners() {
  document.querySelector('.js-start').addEventListener('click', init);
  document.querySelector('.js-play').addEventListener('click', play);
  document.querySelector('.js-pause').addEventListener('click', pause);
  document.querySelector('.js-clear').addEventListener('click', clear);
}

function init(event) {
  event.target.classList.toggle('_hidden');
  document.querySelector('.js-pause').classList.toggle('_hidden');
  document.querySelector('.js-clear').classList.toggle('_hidden');

  const size = getSize();
  timeIntervalSec = getTimeInterval();
  iterationCount = getIterationCount();
  matrix = generateRandomMatrix(size);

  drawGrid(context, size);

  makeIteration();
}

function makeIteration() {
  matrix = calcField(matrix);

  drawCells(context, matrix);

  if (iterationCount > 0) {
    iterationCount--;
    timerForIteration = setTimeout(makeIteration, timeIntervalSec * 1000);
  } else {
    resetButtons();
  }
}

function clear() {
  iterationCount = 0;

  clearTimeout(timerForIteration);
  clearCanvas(context);
  resetButtons();
}

function pause(event) {
  clearTimeout(timerForIteration);

  event.target.classList.toggle('_hidden');
  document.querySelector('.js-play').classList.toggle('_hidden');
}

function play(event) {
  makeIteration();

  event.target.classList.toggle('_hidden');
  document.querySelector('.js-pause').classList.toggle('_hidden');
}

function resetButtons() {
  document.querySelector('.js-start').classList.remove('_hidden');
  document.querySelector('.js-clear').classList.add('_hidden');
  document.querySelector('.js-pause').classList.add('_hidden');
  document.querySelector('.js-play').classList.add('_hidden');
}
