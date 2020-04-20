// https://leetcode-cn.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((prev, next) => prev[0] - next[0]);
  const queue = [];

  while (intervals.length) {
    const next = intervals.shift();
    const len = queue.length;

    if (len === 0 || next[0] > queue[len - 1][1]) {
      queue.push(next);
    } else if (next[1] > queue[len - 1][1]) {
      queue[len - 1][1] = next[1];
    }
  }

  return queue;
}

module.exports = merge;
