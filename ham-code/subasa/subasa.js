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

module.exports = isValidOrder;
