'use strict';

window.maxValue = (array) => {
  const newArray = array;
  let max = 0;

  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
    }
  }
  return max;
};
