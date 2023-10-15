function solution(babblings) {
  const validPhrases = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (const babbling of babblings) {
    let phrase = babbling;

    while (phrase !== "") {
      let isValid = false;

      for (const validPhrase of validPhrases) {
        if (phrase.startsWith(validPhrase)) {
          const prefix = phrase.substring(0, validPhrase.length);
          const remaining = phrase.substring(validPhrase.length);
          if (isValidPart(remaining, validPhrases)) {
            isValid = true;
            phrase = remaining;
            break;
          }
        }
      }

      if (!isValid) {
        break;
      }
    }

    if (phrase === "") {
      count++;
    }
  }

  return count;
}

function isValidPart(part, validPhrases) {
  if (part === "") {
    return true;
  }

  for (const validPhrase of validPhrases) {
    if (part.startsWith(validPhrase)) {
      const remaining = part.substring(validPhrase.length);
      if (isValidPart(remaining, validPhrases)) {
        return true;
      }
    }
  }

  return false;
}

const babbling1 = ["aya", "yee", "u", "maa", "wyeoo"];
const babbling2 = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling1)); // 기대값 1
console.log(solution(babbling2)); // 기대값 3
