const { plusOne } = require("./plus-one");

describe("plusOne", () => {
  describe("given a large numbers digits in an array", () => {
    it("returns the number added by one", () => {
      const digits = [1, 2, 3];

      const result = plusOne(digits);

      expect(result).toEqual([1, 2, 4]);
    });

    describe("if by adding the number turns to two digits", () => {
      it("increases next level by one", () => {
        const digits = [1, 9];

        const result = plusOne(digits);

        expect(result).toEqual([2, 0]);
      });
    });
  });
});
