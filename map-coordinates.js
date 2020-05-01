'use strict';

window.mapCoordinates = ([X, Y, originX, originY]) => {
  const result = [];
  const array = [X, Y, originX, originY];
  const Cx = array[0] - array[2];
  const Cy = array[3] - array[1];

  result.push(Cx, Cy);
  return result;
};
