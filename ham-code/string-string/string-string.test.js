const {hasOneExtraCharacter} = require("./string-string");

test("Check two strings to see if one of them have only one extra character", () => {
    expect(hasOneExtraCharacter("sstem", "system")).toBe(true);
    expect(hasOneExtraCharacter("hamKarani", "hamKaran")).toBe(true);
    // expect(hasOneExtraCharacter("pYstem", "system")).toBe(false);
    // expect(hasOneExtraCharacter("system", "pystem")).toBe(true);
})

const {hasOneDifferentCharacter} = require("./string-string");

test("Should check if two strings have only one different character or more", ()=> {
    expect(hasOneDifferentCharacter("abc", "axc")).toBe(true)
    expect(hasOneDifferentCharacter("abc", "axcd")).toBe(false)
})

const {replaceCharacter} = require("./string-string");

test("Should check if two strings have only one different character or more", ()=> {
    expect(replaceCharacter("abc", "x", 1)).toBe("axc")
    expect(replaceCharacter("abc", "d", 2)).toBe("abd")
    expect(replaceCharacter("abc", "d", 4)).toBe("abcd")
    expect(replaceCharacter("system", "", 3)).toBe("sysem")
    expect(replaceCharacter("system", "", 5)).toBe("syste")
})

const {checkSuspiciousStrings} = require("./string-string");

test("Should check two list of words to find similar words count in second list compared to first list", ()=> {
    const suspiciousWords = ["‫‪hamKaran‬‬", "‫‪system‬‬", "‫‪systemi‬‬"];
    const wordList = ["‫‪sstem‬‬", "‫‪hamKarani‬‬", "‫‪hamkaran‬‬", "‫‪hamkarani‬‬", "‫‪pYstem‬‬", "‫‪pystem‬‬", "‫‪pystemi‬‬", "‫‪systema‬‬"]
    const expectedResult = [1,1,1,0,0,1,1,2]
    console.log(checkSuspiciousStrings(suspiciousWords, wordList));
    expect(checkSuspiciousStrings(suspiciousWords, wordList)).toEqual(expectedResult)
})

