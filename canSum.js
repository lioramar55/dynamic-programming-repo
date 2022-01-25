// a function takes a target sum as argument
// and a numbers array, should return true if
// there is at least one way to get to the target sum using those numbers

const canSum = (tSum, nums, memo = {}) => {
  if (memo[tSum]) return memo[tSum];
  if (!tSum) return true;
  if (tSum < 0) return false;
  for (let num of nums) {
    let nodeSum = tSum - num;
    if (canSum(nodeSum, nums, memo)) {
      memo[tSum] = true;
      return true;
    }
  }
  memo[tSum] = false;
  return false;
};

console.log(canSum(7, [2, 4, 9, 10, 20, 8, 4]));
