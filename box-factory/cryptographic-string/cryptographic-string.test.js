const {getCipherString} = require("./cryptographic-string");

test("Should take a string & return cypher(k times)", ()=> {
    expect(getCipherString("abc", 1)).toBe("dbc");
    expect(getCipherString("ABc", 1)).toBe("dbc");
    expect(getCipherString("abz", 1)).toBe("abc");
    expect(getCipherString("abcd", 4)).toBe("efgh");
    expect(getCipherString("abcd", 5)).toBe("ifgh");
})

const {shiftString} = require("./cryptographic-string");

test("Should shiftString, to left or right", ()=> {
    expect(shiftString("abz", true)).toBe("bza");
    expect(shiftString("abcd", false)).toBe("dabc");
    expect(shiftString("Saeed", true)).toBe("aeedS");
    expect(shiftString("Saeed", false)).toBe("dSaee");
})