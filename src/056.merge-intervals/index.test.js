/* eslint-disable no-console */

const merge = require('.');

const result = merge([
  [1, 10],
  [20, 30],
  [9, 21],
  [50, 101],
  [99, 99],
]);

console.log(result);
