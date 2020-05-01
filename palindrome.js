'use strict';

window.palindrome = (string) => {
  let str = string;
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
};
