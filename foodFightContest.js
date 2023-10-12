function solution(food) {
  const n = food.length;
  const foodArr = []; // 음식 개수를 담을 배열

  // 음식 개수를 foodArr 배열에 저장
  for (let i = 0; i < n; i++) {
    if (food[i] % 2 === 1) {
      foodArr.push(food[i] - 1);
    } else {
      foodArr.push(food[i]);
    }
  }

  // 음식을 문자열로 변환하는 함수
  function foodString(foodArr) {
    const foods = [];
    const foodsReverse = [];
    for (let i = 0; i < n; i++) {
      foods.push(`${i}`.repeat(foodArr[i] / 2)); // 수정: '*' 대신 repeat 사용
    }

    // foods 배열을 뒤집어서 foodsReverse 배열에 저장
    for (let i = foods.length - 1; i >= 0; i--) {
      foodsReverse.push(foods[i]);
    }

    return foods.join("") + "0" + foodsReverse.join(""); // foods, "0" 그리고 foodsReverse를 합쳐서 반환
  }

  const result = foodString(foodArr);
  return result;
}

const food1 = [1, 3, 4, 6];
console.log(solution(food1)); // "1223330333221"

const food2 = [1, 7, 1, 2];
console.log(solution(food2)); // "111303111"
