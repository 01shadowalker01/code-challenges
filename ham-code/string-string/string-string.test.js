const {hasOneExtraCharacter} = require("./string-string");

test("Check two strings to see if one of them have only one extra character", () => {
    expect(hasOneExtraCharacter("sstem", "system")).toBe(true);
    expect(hasOneExtraCharacter("hamKarani", "hamKaran")).toBe(true);
    // expect(hasOneExtraCharacter("pYstem", "system")).toBe(false);
    // expect(hasOneExtraCharacter("system", "pystem")).toBe(true);
})

const {removeCharacterByIndex} = require("./string-string");

test("Should remove character at given index", ()=> {
    expect(removeCharacterByIndex("system", 3)).toBe("sysem")
    expect(removeCharacterByIndex("system", 5)).toBe("syste")
    expect(removeCharacterByIndex("abcdef", 5)).toBe("abcde")
    expect(removeCharacterByIndex("abcdef", 0)).toBe("bcdef")
    expect(removeCharacterByIndex("abcdef", 10)).toBe("abcdef")
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
})

