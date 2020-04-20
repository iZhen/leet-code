// https://leetcode-cn.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  const len = nums.length;
  let far = 0;
  for (let i = 0; i < len; i += 1) {
    if (i > far) {
      return false;
    }
    far = Math.max(far, i + nums[i]);
  }
  return true;
}

module.exports = canJump;
