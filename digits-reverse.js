'use strict';

window.digitsReverse = (n) => {
  let result = 0;
  let input = n;
  while (input !== 0) {
    result *= 10;
    result += input % 10;
    input = Math.floor(input / 10);
  }

  return result;
};
