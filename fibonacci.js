'use strict';

window.fibonacci = (n) => {
  let previous = 1;
  let predPrevious = 0;
  let current = n;

  for (let i = 2; i <= n; i++) {
    current = previous + predPrevious;
    predPrevious = previous;
    previous = current;
  }
  return current;
};
