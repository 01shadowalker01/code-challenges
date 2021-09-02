function hasOneExtraCharacter(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length)
    for (let i = 0; i < maxLength; i++) {
        if (str1[i] != str2[i]) {
            let temp = replaceCharacter(str1, '', i);
            if(temp == str2) return true;
            temp = replaceCharacter(str2, '', i);
            if(temp == str1) return true;
        }
    }
    return false;
}

function replaceCharacter(str, char,i) {
    const part1 = str.substring(0, i);
    const part2 = str.substring(i +1, str.length);
    return part1 + char + part2
}

function hasOneDifferentCharacter(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLength; i++) {
        if (str1[i] && str2[i] && str1[i] != str2[i]) {
            if (str1[i].toLowerCase() == str2[i].toLowerCase()) return false;
            str1 = replaceCharacter(str1, str2[i], i)
            return str1 == str2
        }
    }
    return true;   
}

function checkSuspiciousStrings(suspiciousWords, wordList) {
    let resultArray = [];
    wordList.forEach(word => {
        let similarCount = 0;
        suspiciousWords.forEach(suspiciousWord => {
            if (hasOneExtraCharacter(suspiciousWord, word)) similarCount++;
            if (hasOneDifferentCharacter(suspiciousWord, word)) similarCount++;
            let temp1 = suspiciousWord.toLowerCase();
            let temp2 = word.toLowerCase();
            if (temp1 == temp2) similarCount++;
        });
        resultArray.push(similarCount);
    })
    return resultArray;
}

module.exports = {
    hasOneExtraCharacter,
    hasOneDifferentCharacter,
    replaceCharacter,
    checkSuspiciousStrings
};
