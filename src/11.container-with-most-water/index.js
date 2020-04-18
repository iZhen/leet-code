// https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let volume = 0;

  while (left < right) {
    const lHeight = height[left];
    const rHeight = height[right];
    const h = Math.min(lHeight, rHeight);
    const w = right - left;
    const area = w * h;
    volume = Math.max(area, volume);

    if (lHeight < rHeight) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return volume;
}

module.exports = maxArea;
