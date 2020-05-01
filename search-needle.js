'use strict';

window.searchNeedle = ({ dictionary, needle }) => {
  let counter = 0;

  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].indexOf(needle) !== -1) {
      counter++;
    }
  }
  return counter;
};
