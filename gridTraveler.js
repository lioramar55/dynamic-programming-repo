console.log('gridTraveler(5,5)', gridTraveler(5, 5));
console.log('gridTraveler(20,20)', gridTraveler(20, 20));

function gridTraveler(n, m, memo = {}) {
  if (n === 1 || m === 1) return 1;
  if (memo[`${n},${m}`]) return memo[`${n},${m}`];
  memo[`${n},${m}`] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[`${n},${m}`];
}
