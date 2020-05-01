'use strict';

window.sort = (array) => {
  const oldArray = array;

  if (array.length === 0) {
    return array;
  }
  const newArray = oldArray.sort((a, b) => a - b);
  return newArray;
};
