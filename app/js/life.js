export function calcField(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(calcCeil(matrix, j, i));
    }
  }

  return result;
};

export function calcCeil(matrix, x, y) {
  const neighboursCount = calcNeighbours(matrix, x, y);

  if (neighboursCount === 2) return matrix[y][x];
  if (neighboursCount === 3) return 1;
  return 0;
};

export function calcNeighbours(matrix, x, y) {
  let summ = 0;
  const maxY = Math.min(y + 1, matrix.length - 1);
  const maxX = Math.min(x + 1, matrix[y].length - 1);

  for (let i = Math.max(y - 1, 0); i <= maxY; i++) {
    for (let j = Math.max(x - 1, 0); j <= maxX; j++) {
      summ += matrix[i][j];
    }
  }

  return summ - matrix[y][x];
}

export function generateRandomMatrix(x, y) {
  const result = [];

  for (let i = 0; i < y; i++) {
    result.push([]);

    for (let j = 0; j < x; j++) {
      result[i].push(Math.floor(Math.random() * 2));
    }
  }

  return result;
}
