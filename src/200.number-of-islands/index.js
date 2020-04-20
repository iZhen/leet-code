// https://leetcode-cn.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const yLen = grid.length;
  if (yLen === 0) {
    return 0
  }
  const xLen = grid[0].length;
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;

  for (let y = 0; y < yLen; y += 1) {
    for (let x = 0; x < xLen; x += 1) {
      if (grid[y][x] === '1') {
        count += 1;
        grid[y][x] = -1;
        const queue = [[y, x]]

        while (queue.length > 0) {
          const origin = queue.shift();
          dir.forEach((move) => {
            const nextY = origin[0] + move[0];
            const nextX = origin[1] + move[1];

            if (nextY >= 0 && nextY < yLen && nextX >= 0 && nextX < xLen && grid[nextY][nextX] === '1') {
              grid[nextY][nextX] = -1;
              queue.push([nextY, nextX]);
            }
          })
        }
      }
    }
  }

  return count;
}

module.exports = numIslands;
