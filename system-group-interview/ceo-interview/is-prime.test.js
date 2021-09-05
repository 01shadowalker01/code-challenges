const {isPrime} = require("./is-prime");

test("Should return if the number is prime or not", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(37)).toBe(true);
    expect(isPrime(49)).toBe(false);
    expect(isPrime(177)).toBe(false);
    expect(isPrime(257)).toBe(true);
    expect(isPrime(1023)).toBe(false);
})