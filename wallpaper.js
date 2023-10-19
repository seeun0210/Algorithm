function findMinMaxIndices(wallpaper) {
  let smallestX = wallpaper.length; // 초기값을 최대한 큰 값으로 설정
  let smallestY = wallpaper[0].length; // 초기값을 최대한 큰 값으로 설정
  let largestX = -1; // 초기값을 최대한 작은 값으로 설정
  let largestY = -1; // 초기값을 최대한 작은 값으로 설정

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        smallestX = Math.min(smallestX, i);
        smallestY = Math.min(smallestY, j);
        largestX = Math.max(largestX, i);
        largestY = Math.max(largestY, j);
      }
    }
  }

  return [smallestX, smallestY, largestX + 1, largestY + 1];
}

const wallpaper1 = [".#...", "..#..", "...#."];
const result1 = findMinMaxIndices(wallpaper1);
console.log(result1); // [0, 1, 3, 4]

const wallpaper2 = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];
const result2 = findMinMaxIndices(wallpaper2);
console.log(result2); // [1, 3, 5, 8]

const wallpaper3 = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];
const result3 = findMinMaxIndices(wallpaper3);
console.log(result3); // [0, 0, 7, 9]

const wallpaper4 = ["..", "#."];
const result4 = findMinMaxIndices(wallpaper4);
console.log(result4); // [1, 0, 2, 1]
