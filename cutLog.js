// find the ideal price to sell a log,
// input is an array of prices, and the length of a log

function cutLog(prices, logLength, memo = { 0: 0, 1: 1 }) {
  var bestPrice = prices[Math.min(logLength, prices.length - 1)];
  for (let num of prices) {
    let key = '' + logLength - prices.indexOf(num);
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    } else {
      memo[key] = Math.max(
        bestPrice,
        cutLog(prices, logLength - prices.indexOf(num) - 1, memo) + num
      );
    }
  }
  for (key in memo) {
    if (memo[key] > bestPrice) {
      bestPrice = memo[key];
    }
  }
  return bestPrice;
}

console.log(cutLog([0, 1, 5, 8, 9, 10], 5));
