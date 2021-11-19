const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const dotCount = calculateDots(input.value);
  result.innerHTML = dotCount;
});

function calculateDots(term) {
  term = term.trim();

  const dotsDict = {
    ب: 1,
    پ: 3,
    ت: 2,
    ث: 3,
    ج: 1,
    چ: 3,
    خ: 1,
    ذ: 1,
    ز: 1,
    ژ: 3,
    ش: 3,
    ض: 1,
    ظ: 1,
    غ: 1,
    ف: 1,
    ق: 2,
    ن: 1,
    ی: 2,
  };

  const charachters = term.split("");

  let result = 0;
  charachters.forEach((char) => {
    result += dotsDict[char] || 0;
  });

  if (charachters[charachters.length - 1] === "ی") {
    result -= 2;
  }

  const spaceIndex = charachters.indexOf(" ");
  if (
    spaceIndex != -1 &&
    spaceIndex - 1 < charachters.length &&
    charachters[spaceIndex - 1] === "ی"
  ) {
    result -= 2;
  }

  return result;
}

// module.exports = calculateDots;
