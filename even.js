'use strict';

window.even = (array) => {
  const newArray = array;
  let counter = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
};
