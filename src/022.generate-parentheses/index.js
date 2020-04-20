// https://leetcode-cn.com/problems/generate-parentheses/

function generateParenthesis(n) {
  const result = []

  function dfs(left, right, str) {
    if (left === 0 && right === 0) {
      result.push(str)
    }

    if (left > 0) {
      dfs(left - 1, right, str + '(')
    }

    if (right > left) {
      dfs(left, right - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return result
}

module.exports = generateParenthesis
