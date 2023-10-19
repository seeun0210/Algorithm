function solution(board, moves) {
  var answer = 0;
  const arr = [];
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        if (arr.length > 0 && arr[arr.length - 1] === board[j][move]) {
          arr.pop();
          answer += 2;
        } else {
          arr.push(board[j][move]);
        }
        board[j][move] = 0;
        break;
      }
    }
  }
  return answer;
}
board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = solution(board, moves);
console.log(result);
