// simple solution to find the n'th number of finbonacci
// this solution is good but when the number is bigger than 50 it would get stuck
// this is because the O(2^n) time complexity
const findFibNum = (n) => {
  if (n <= 2) return 1;
  if (n == 0) return 0;
  return findFibNum(n - 1) + findFibNum(n - 2);
};

//
console.log(findFibNum(6));

// this is a better practice solution with memoization
// that will use a O(n) time complexity

const betterFindFibNum = (n, memo = { 0: 0, 1: 1, 2: 1 }) => {
  // check if the number n is in the object memo
  if (n in memo) return memo[n];
  // if it is not in the object calculate it and store it inside under the key n
  else memo[n] = betterFindFibNum(n - 1, memo) + betterFindFibNum(n - 2, memo);
  // then return the calculated number
  return memo[n];
};

console.log(betterFindFibNum(50));
