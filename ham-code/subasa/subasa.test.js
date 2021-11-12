const isValidOrder = require("./subasa");

test("Shoud retun YES if number order is valid", ()=> {
    expect(isValidOrder([4, 2, 4], [4, 45, 48, 93])).toBe("YES");
});
