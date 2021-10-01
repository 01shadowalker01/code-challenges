const isPrime = (number) => {
  if (typeof number != "number") return;
  if (number === 1) return false;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const getNextPrime = (() => {
  let current = 1;
  return () => {
    do {
      current++;
    } while (!isPrime(current));
    return current;
  };
})();

module.exports = {
  isPrime,
  getNextPrime,
};
