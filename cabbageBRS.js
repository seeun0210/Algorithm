const fs = require("fs");

function makeMap(cols, rows, nums) {
  //지도 만들기
  const map = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (const testCase of nums) {
    for (const [y, x] of testCase.points) {
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        map[x][y] = 1;
      }
    }
  }

  return map;
}

function readTestCases(filename) {
  const data = fs.readFileSync(filename, "utf-8");
  const lines = data.split("\n").map((line) => line.trim());

  const numTestCases = parseInt(lines[0]);
  let currentIndex = 1;
  const testCases = [];

  for (let i = 0; i < numTestCases; i++) {
    const [cols, rows, numPoints] = lines[currentIndex].split(" ").map(Number);
    currentIndex++;

    const points = [];
    for (let j = 0; j < numPoints; j++) {
      const [x, y] = lines[currentIndex].split(" ").map(Number);
      points.push([x, y]);
      currentIndex++;
    }

    testCases.push({
      cols,
      rows,
      points,
    });
  }

  return testCases;
}

function solution(map) {
  const direction = [
    [1, 0], // 위
    [-1, 0], // 아래
    [0, 1], // 우
    [0, -1], // 좌
  ];

  const rows = map.length;
  const cols = map[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let count = 0;

  function bfs(row, col) {
    const queue = [{ row, col }];

    while (queue.length > 0) {
      const current = queue.shift();
      const { row, col } = current;

      for (const [dx, dy] of direction) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          map[newRow][newCol] === 1 &&
          !visited[newRow][newCol]
        ) {
          queue.push({ row: newRow, col: newCol });
          visited[newRow][newCol] = true;
          map[newRow][newCol] = 2; // 이미 방문한 배추는 2로 표시
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;
}

// 파일명 설정
const filename = "dev/stdin";

// 테스트케이스 읽어오기
const testCases = readTestCases(filename);
console.log(testCases);
// 각 테스트케이스에 대해 makeMap 함수를 사용하여 map 생성
for (const testCase of testCases) {
  const map = makeMap(testCase.cols, testCase.rows, [testCase]);
  console.log(map);
  console.log(solution(map)); // solution 함수는 앞서 구현한 함수로 가정합니다.
}
