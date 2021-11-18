function isValidOrder(matchInfo, goalList) {
  if (matchInfo.length != 3) return "NO";
  const [goalCount, firstExtraTime, secondExtraTime] = matchInfo;
  if (goalList.length != goalCount) return "NO";

  const HALF_TIME = 45;
  const FULL_TIME = 90;

  let x = goalList[0];
  for (let i = 1; i < goalList.length; i++) {
    if (x <= goalList[i]) {
      x = goalList[i];
    } else {
      if (x > HALF_TIME + firstExtraTime) {
        return "NO";
      }
    }
    if (goalList[i] > FULL_TIME + secondExtraTime) {
      return "NO";
    }
  }
  return "YES";
}

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var lineno = 0;
let inputLines = [];
rl.on("line", function (line) {
  lineno++;
  inputLines.push(line);
  if (lineno >= 2) {
    let functionInputs = inputLines.map((line) => Number(line.split(" ")));
    console.log(isValidOrder(functionInputs[0], functionInputs[1]));
    rl.close();
  }
});

module.exports = isValidOrder;
