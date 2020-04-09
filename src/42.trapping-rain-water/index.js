// https://leetcode-cn.com/problems/trapping-rain-water/

function trap(height) {
  const len = height.length
  const max = height.reduce((prev, value, index) => {
    if (prev.value < value) {
      return {
        index,
        value,
      }
    }
    return prev
  }, { value: 0, index: 0 })
  let result = 0
  let pointer = 0
  let leftMax = 0
  let rightMax = 0

  // left to max
  while (pointer < max.index) {
    const currentHeight = height[pointer]
    if (leftMax < currentHeight) {
      leftMax = currentHeight
    } else {
      result += leftMax - currentHeight
    }
    pointer += 1
  }

  // right to max
  pointer = len - 1
  while (pointer > max.index) {
    const currentHeight = height[pointer]
    if (rightMax < currentHeight) {
      rightMax = currentHeight
    } else {
      result += rightMax - currentHeight
    }
    pointer -= 1
  }

  return result
}

module.exports = trap
