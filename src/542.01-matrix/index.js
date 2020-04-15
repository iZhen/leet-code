/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function updateMatrix(matrix) {
  const yLen = matrix.length;
  const xLen = matrix[0].length;
  const result = new Array(yLen);
  let loop = []

  for (let y = 0; y < yLen; y += 1) {
    result[y] = new Array(xLen);
    for (let x = 0; x < xLen; x += 1) {
      const val = matrix[y][x];
      if (val === 0) {
        result[y][x] = 0;
        loop.push([y, x]);
      }
    }
  }

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (loop.length) {
    const point = loop.shift();
    const originVal = result[point[0]][point[1]];
    dir.forEach((move) => {
      const y = point[0] + move[0];
      const x = point[1] + move[1];
      if (y >= 0 && y < yLen && x >= 0 && x < xLen && result[y][x] === undefined) {
        result[y][x] = originVal + 1;
        loop.push([y, x]);
      }
    })
  }

  return result;
}

module.exports = updateMatrix;
