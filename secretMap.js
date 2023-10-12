const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  function binaryNumArray(arr) {
    const binaryArr = [];
    for (let j = 0; j < n; j++) {
      let binaryRow = "";
      for (let i = n - 1; i >= 0; i--) {
        if (arr[j] >= Math.pow(2, i)) {
          binaryRow += "1";
          arr[j] -= Math.pow(2, i);
        } else {
          binaryRow += "0";
        }
      }
      binaryArr.push(binaryRow);
    }
    return binaryArr;
  }

  const binaryArr1 = binaryNumArray(arr1);
  const binaryArr2 = binaryNumArray(arr2);

  var answer = [];
  for (let i = 0; i < n; i++) {
    const result = (parseInt(binaryArr1[i], 2) | parseInt(binaryArr2[i], 2))
      .toString(2)
      .padStart(n, "0")
      .replace(/1/g, "#")
      .replace(/0/g, " ");
    answer.push(result);
  }
  return answer;
}

console.log(solution(n, arr1, arr2));
