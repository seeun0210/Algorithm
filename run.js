// [두번째풀이] 반복문 한번만 돌도록...
function solution(players, callings) {
  const playerMap = {}; // 플레이어 이름을 인덱스로 매핑
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const calling = callings[i];
    if (playerMap[calling] !== undefined) {
      const callIdx = playerMap[calling];
      if (callIdx > 0) {
        // 스왑 연산 수행
        [players[callIdx], players[callIdx - 1]] = [
          players[callIdx - 1],
          players[callIdx],
        ];
        playerMap[calling] = callIdx - 1;
        playerMap[players[callIdx]] = callIdx;
      }
    }
  }

  return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));

// [처음 풀이]
// function solution(players, callings) {
//     for (let i = 0; i < callings.length; i++) {
//       const callidx = players.indexOf(callings[i]);
//       if (callidx !== -1 && callidx > 0) {
//         const temp = players[callidx];
//         players[callidx] = players[callidx - 1];
//         players[callidx - 1] = temp;
//       }
//     }
//     return players;
//   }
