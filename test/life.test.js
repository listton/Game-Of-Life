import { calcField,
         calcCeil,
         calcNeighbours,
         generateRandomMatrix } from '../app/life';

let tempMatrix = [[0, 1, 1],
                  [1, 1, 1],
                  [0, 0, 0]];

test('Calc all field', () => {
  let result = [[1, 0, 1],
                [1, 0, 1],
                [0, 1, 0]];

  expect(calcField(tempMatrix)[0][0]).toBe(result[0][0]);
  expect(calcField(tempMatrix)[1][0]).toBe(result[1][0]);
  expect(calcField(tempMatrix)[2][0]).toBe(result[2][0]);

  expect(calcField(tempMatrix)[0][1]).toBe(result[0][1]);
  expect(calcField(tempMatrix)[1][1]).toBe(result[1][1]);
  expect(calcField(tempMatrix)[2][1]).toBe(result[2][1]);

  expect(calcField(tempMatrix)[0][2]).toBe(result[0][2]);
  expect(calcField(tempMatrix)[1][2]).toBe(result[1][2]);
  expect(calcField(tempMatrix)[2][2]).toBe(result[2][2]);
});

test('Calc ceil', () => {
  expect(calcCeil(tempMatrix, 0, 0)).toBe(1);
  expect(calcCeil(tempMatrix, 1, 0)).toBe(0);
  expect(calcCeil(tempMatrix, 2, 0)).toBe(1);

  expect(calcCeil(tempMatrix, 0, 1)).toBe(1);
  expect(calcCeil(tempMatrix, 1, 1)).toBe(0);
  expect(calcCeil(tempMatrix, 2, 1)).toBe(1);

  expect(calcCeil(tempMatrix, 0, 2)).toBe(0);
  expect(calcCeil(tempMatrix, 1, 2)).toBe(1);
  expect(calcCeil(tempMatrix, 2, 2)).toBe(0);
});

test('Calc neighbours', () => {
  expect(calcNeighbours(tempMatrix, 0, 0)).toBe(3);
  expect(calcNeighbours(tempMatrix, 1, 0)).toBe(4);
  expect(calcNeighbours(tempMatrix, 2, 0)).toBe(3);

  expect(calcNeighbours(tempMatrix, 0, 1)).toBe(2);
  expect(calcNeighbours(tempMatrix, 1, 1)).toBe(4);
  expect(calcNeighbours(tempMatrix, 2, 1)).toBe(3);

  expect(calcNeighbours(tempMatrix, 0, 2)).toBe(2);
  expect(calcNeighbours(tempMatrix, 1, 2)).toBe(3);
  expect(calcNeighbours(tempMatrix, 2, 2)).toBe(2);
});

test('Generate matrix', () => {
  expect(generateRandomMatrix(3, 4).length).toBe(4);
  expect(generateRandomMatrix(3, 4)[0].length).toBe(3);
})
