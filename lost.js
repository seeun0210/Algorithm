function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);

  // 여벌 체육복이 있는 학생 처리
  reserve.forEach((student) => {
    students[student - 1] += 1;
  });

  // 체육복을 잃어버린 학생 처리
  lost.forEach((student) => {
    students[student - 1] -= 1;
  });

  // 체육복 빌려주기
  students.forEach((s, i) => {
    if (s === 0) {
      if (i > 0 && students[i - 1] === 2) {
        students[i] = 1;
        students[i - 1] = 1;
      } else if (i < n - 1 && students[i + 1] === 2) {
        students[i] = 1;
        students[i + 1] = 1;
      }
    }
  });

  // 전체 학생 중에서 체육복을 가지고 있는 학생 수 세기
  return students.filter((s) => s > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
