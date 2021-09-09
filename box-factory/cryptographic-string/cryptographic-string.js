const {replaceCharacter} = require("../../ham-code/string-string/string-string")

const getCipherString = (str, k) => {
    str = str.toLowerCase();
    for (let i = 0; i < k; i++) {
        str = shiftString(str, false);
        for (let j = 0; j < str.length; j++) {
            let asciiCode = str[j].charCodeAt(0);
            asciiCode++;
            if (str[j] == 'z') asciiCode = 97; // ASCII code for 'a'
            const newChar = String.fromCharCode(asciiCode);
            str = replaceCharacter(str, newChar, j);
        }
    }
    return str;
}

const shiftString = (str, leftShift) => {
    if (leftShift) {
        const firstCharacter = str[0];
        return str.substr(1, str.length) + firstCharacter;
    } else {
        const lastCharacter = str[str.length -1];
        return lastCharacter + str.substr(0, str.length - 1)
    }
}

module.exports = {
    getCipherString,
    shiftString
}