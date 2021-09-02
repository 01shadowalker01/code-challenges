function hasOneExtraCharacter(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length)
    for (let i = 0; i < maxLength; i++) {
        if (str1[i] != str2[i]) {
            let temp = removeCharacterByIndex(str1, i);
            if(temp == str2) return true;
            temp = removeCharacterByIndex(str2, i);
            if(temp == str1) return true;
        }
    }
    return false;
}

function removeCharacterByIndex(str, i) {
    const part1 = str.substring(0, i);
    const part2 = str.substring(i +1, str.length);
    return part1 + part2
}

function replaceCharacter(str, char,i) {
    const part1 = str.substring(0, i);
    const part2 = str.substring(i +1, str.length);
    return part1 + char + part2
}

function hasOneDifferentCharacter(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLength; i++) {
        if (str1[i] != str2[i]) {
            str1 = replaceCharacter(str1, str2[i], i)
            return str1 == str2
        }
    }
    return true;   
}

module.exports = {
    hasOneExtraCharacter,
    removeCharacterByIndex,
    hasOneDifferentCharacter,
    replaceCharacter
};
