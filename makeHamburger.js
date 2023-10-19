function solution(ingredient) {
  var answer = 0;

  function restIngredient(arr) {
    const arrString = arr.join("");
    if (arrString.includes("1231")) {
      const withoutSubarray = arrString.replace("1231", "");
      answer++;

      if (withoutSubarray.length < 4) {
        return;
      }
      arr = withoutSubarray.split("").map(Number);
      if (arr.length === ingredient.length) {
        return; // 종료 조건: 배열이 더 이상 바뀌지 않을 때
      }
      restIngredient(arr);
      return;
    }
    return;
  }

  restIngredient(ingredient);


  return answer;
}

const originalArray = [2, 1, 1, 2, 3, 1, 2, 3, 1];
const result = solution(originalArray);
console.log("Result:", result);
// 무한루프 돌아서 내 머리도 돌아버림
