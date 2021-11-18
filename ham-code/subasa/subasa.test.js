const isValidOrder = require("./subasa");

test("Shoud retun YES if number order is valid", ()=> {
    expect(isValidOrder([4, 2, 4], [4, 45, 48, 93])).toBe("YES");
    expect(isValidOrder([5, 3, 2], [4, 47, 45, 80, 91])).toBe("YES");
});

test("Shoud retun NO if number order is invalid", ()=> {
    expect(isValidOrder([4, 2, 2], [4, 48, 45, 80])).toBe("NO");
    expect(isValidOrder([6, 3, 2], [8, 48, 45, 70, 81, 94])).toBe("NO");
});
