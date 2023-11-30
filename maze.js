function solution(maps) {
  const direction = [
    [1, 0], // 위
    [-1, 0], // 아래
    [0, 1], // 우
    [0, -1], // 좌
  ];

  const rows = maps.length;
  const cols = maps[0].length;
  let count = 0;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // BFS; 큐가 빌 때까지 실행한다.
  function findStart() {
    // 시작 노드 찾기
    const queue = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (maps[row][col] === "S") {
          queue.push({ row, col, answer: 0 });

          return queue[0];
        }
      }
    }

    return null;
  }

  function findLever() {
    const queue = [findStart()];
    console.log("ququ", queue);
    while (queue.length > 0) {
      count++;
      const current = queue.shift();
      const { row, col, answer } = current;

      if (maps[row][col] === "L") {
        // 레버의 위치
        return current;
      }

      visited[row][col] = true; // 방문한 곳 체크
      console.log(visited);
      for (const [dr, dc] of direction) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols && // 배열 끝이 아닐 조건
          maps[newRow][newCol] !== "X" && // 통로이고
          !visited[newRow][newCol] // 방문한 적이 없어야 함
        ) {
          queue.push({ row: newRow, col: newCol, answer: answer + 1 }); // 통로를 지나갈 때마다 answer + 1
        }
      }
    }

    return null;
  }

  const leverLocation = findLever();

  if (leverLocation === null) {
    return -1;
  } else {
    function findExit() {
      const queue = [leverLocation];

      console.log("ququ", queue);

      while (queue.length > 0) {
        count++;
        console.log("$$", count);
        const current = queue.shift();
        const { row, col, answer } = current;

        if (maps[row][col] === "E") {
          // 출구의 위치
          return answer;
        }

        visited[row][col] = true; // 방문한 곳 체크
        console.log("저벅저벅,,,", visited);

        for (const [dr, dc] of direction) {
          const newRow = row + dr;
          const newCol = col + dc;

          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols && // 배열 끝이 아닐 조건
            maps[newRow][newCol] !== "X" && // 통로이고
            !visited[newRow][newCol] // 방문한 적이 없어야 함
          ) {
            queue.push({ row: newRow, col: newCol, answer: answer + 1 });
          }
        }
      }

      return -1;
    }

    return findExit();
  }
}
const maps = ["SOOOL", "OOOOO", "OOOOO", "OOOOO", "OOOOE"];

// const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
const result = solution(maps);
console.log(result);
