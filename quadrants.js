'use strict';

window.quadrants = ({ x, y }) => {
  // TODO написать тут свой алгоритм и передать результат при помощи инструкции return
  if (x > 0 && y > 0) {
    return 1;
  } if (x < 0 && y > 0) {
    return 2;
  } if (x > 0 && y < 0) {
    return 4;
  } if (x < 0 && y < 0) {
    return 3;
  }
  return 0;
};
