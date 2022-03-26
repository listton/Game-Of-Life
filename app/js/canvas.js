const CANVAS_SIZE = 300;

const VIOLET = '#6A0AAB';
const GRAY = '#d5d5d5';
const GRAYLIGHT = '#eee';
const WHITE = '#fff';

export function drawCells(context, matrix) {
  const size = matrix.length;
  const coef = CANVAS_SIZE / size;
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cellSide = coef - 2;

      if (matrix[j][i]) {
        context.fillStyle = VIOLET;
        context.fillRect(i * coef + 1, j * coef + 1, cellSide, cellSide);
      } else {
        context.fillStyle = WHITE;
        context.fillRect(i * coef + 1, j * coef + 1, cellSide, cellSide);
      }
    }
  }
}

export function drawGrid(context, size) {
  const coef = CANVAS_SIZE / size;

  context.beginPath();

  for (let i = 1; i < size; i++) {
    context.moveTo(i * coef, 0);
    context.lineTo(i * coef, CANVAS_SIZE);
  }
  
  for (let j = 1; j < size; j++) {
    context.moveTo(0, j * coef);
    context.lineTo(CANVAS_SIZE, j * coef);
  }
  
  context.strokeStyle = GRAYLIGHT;
  context.stroke();

  drawFieldBorder(context);
}

function drawFieldBorder(context){
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, CANVAS_SIZE);
  context.lineTo(CANVAS_SIZE, CANVAS_SIZE);
  context.lineTo(CANVAS_SIZE, 0);
  context.lineTo(0, 0);

  context.lineWidth = 2;
  context.strokeStyle = GRAY;
  context.stroke();
}

export function clearCanvas(context) {
  context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}
