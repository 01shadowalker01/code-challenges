const { longestCommonPrefix } = require("./longest-common-prefix");

test("Should retutn longest common prefix in given list", ()=> {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
    expect(longestCommonPrefix(["shadow","shadowalker","shadow"])).toBe("shadow")
    expect(longestCommonPrefix(["cir","car"])).toBe("c")
})
