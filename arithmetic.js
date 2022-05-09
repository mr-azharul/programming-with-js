<!=== Problem 01 ===!>
// return number of odds number into a range
// 8, 10 => 1

function countOdds(low, high) {
  return high%2 == 0 ? Math.floor(((high-low) + 1)/2) : Math.round(((high-low) + 1)/2)
}

console.log(countOdds(8, 10));
