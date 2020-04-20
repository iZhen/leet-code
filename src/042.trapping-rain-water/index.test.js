const trap = require('.');

test('42.trapping-rain-water',  () => {
  expect(trap([1, 1])).toBe(0);
  expect(trap([1, 0, 1])).toBe(1);
  expect(trap([0, 1, 0, 0, 0])).toBe(0);
  expect(trap([0, 1, 0, 1, 0])).toBe(1);
  expect(trap([0, 5, 0, 3, 0, 1, 0])).toBe(4);
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});
