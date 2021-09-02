const vowels = require("./vowels");

test("Should count vowels and return 2 ** (vowels count)", ()=> {
    expect(vowels("mamad")).toBe(4);
    expect(vowels("sdfg")).toBe(1);
    expect(vowels("anvari")).toBe(8);
    expect(vowels("anvarici")).toBe(16);
    expect(vowels("mimamunijole")).toBe(64);
})