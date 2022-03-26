const SIZE = 300;

const VIOLET = '#6A0AAB';
const GRAY = '#d5d5d5';
const GRAYLIGHT = '#eee';
const WHITE = '#fff';

// TODO: make it work for non-square matrix (and beautiful)

export function drawCells(context, matrix) {
  const columns = matrix[0].length;
  const lines = matrix.length;
  const coef = SIZE / columns;
  
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < lines; j++) {
      const width = coef - 2;
      const height = coef - 2;

      if (matrix[j][i]) {
        context.fillStyle = VIOLET;
        context.fillRect(i * coef + 1, j * coef + 1, width, height);
      } else {
        context.fillStyle = WHITE;
        context.fillRect(i * coef + 1, j * coef + 1, width, height);
      }
    }
  }
}

export function drawGrid(context, x, y) {
  const coef = SIZE / x;

  context.beginPath();

  for (let i = 1; i < x; i++) {
    context.moveTo(i * coef, 0);
    context.lineTo(i * coef, SIZE);
  }
  
  for (let j = 1; j < y; j++) {
    context.moveTo(0, j * coef);
    context.lineTo(SIZE, j * coef);
  }
  
  context.strokeStyle = GRAYLIGHT;
  context.stroke();

  drawFieldBorder(context);
}

function drawFieldBorder(context){
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, SIZE);
  context.lineTo(SIZE, SIZE);
  context.lineTo(SIZE, 0);
  context.lineTo(0, 0);

  context.lineWidth = 2;
  context.strokeStyle = GRAY;
  context.stroke();
}

export function clearCanvas(context) {
  context.clearRect(0, 0, SIZE, SIZE);
}
