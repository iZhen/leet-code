const generateParenthesis = require('.');

test('22.generate-parentheses',  () => {
  expect(generateParenthesis(2)).toEqual(
    expect.arrayContaining([
      "(())",
      "()()",
    ]),
  );
  expect(generateParenthesis(3)).toEqual(
    expect.arrayContaining([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]),
  );
});
