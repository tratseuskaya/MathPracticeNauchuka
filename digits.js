'use strict';

window.digits = (n) => {
  let input = n;

  let result = 0;
  input = Math.abs(input);
  while (input > 0) {
    input = Math.floor(input / 10);
    result++;
  }
  return Math.max(1, result);
};
