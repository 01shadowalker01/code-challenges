const { reverse } = require("./reverse");

describe("reverse", () => {
  it("given a positive number, returns it in reverse", () => {
    const result = reverse(123);

    expect(result).toBe(321);
  });
});
