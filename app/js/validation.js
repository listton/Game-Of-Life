export function getSize() {
  const min = 3;
  const max = 1000;
  let size = document.querySelector('#size').value;

  if (size < min) size = min;
  if (size > max) size = max;

  document.querySelector('#size').value = size;
  
  return size;
}

export function getIterationCount() {
  const min = 2;
  const max = 5000;
  let count = document.querySelector('#count').value;

  if (count < min) count = min;
  if (count > max) count = max;

  document.querySelector('#count').value = count;

  return count;
}

export function getTimeInterval() {
  const min = 0.01;
  const max = 60;
  let time = document.querySelector('#time').value;

  if (time < min) time = min;
  if (time > max) time = max;

  document.querySelector('#time').value = time;

  return time;
}
