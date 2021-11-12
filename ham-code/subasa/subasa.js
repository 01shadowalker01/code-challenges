function isValidOrder(matchInfo, goalList) {
    if (matchInfo.length != 3) return false;
    const [goalCount, firstExtraTime, secondExtraTime] = matchInfo;
    if (goalList.length != goalCount) return false;
     
    return "YES";
}

module.exports = isValidOrder;
