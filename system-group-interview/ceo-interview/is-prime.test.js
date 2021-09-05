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

const {getNextPrime} = require("./is-prime");

test("Should return next prime number every time it's called", () => {
    expect(getNextPrime()).toBe(2);
    expect(getNextPrime()).toBe(3);
    expect(getNextPrime()).toBe(5);
    expect(getNextPrime()).toBe(7);
    expect(getNextPrime()).toBe(11);
    expect(getNextPrime()).toBe(13);
    getNextPrime()
    getNextPrime()
    getNextPrime()
    expect(getNextPrime()).toBe(29);
    getNextPrime()
    getNextPrime()
    getNextPrime()
    expect(getNextPrime()).toBe(43);
    getNextPrime()
    expect(getNextPrime()).toBe(53);
})