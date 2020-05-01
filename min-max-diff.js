'use strict';

window.minMaxDiff = (array) => {
  const newArray = array;
  let max = array[0];
  let min = array[0];

  if (array.length === 0) {
    return undefined;
  }
  if (array.length === 1) {
    return 0;
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
    }
  }
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] < min) {
      min = newArray[j];
    }
  }
  const dif = max - min;
  return dif;
};
