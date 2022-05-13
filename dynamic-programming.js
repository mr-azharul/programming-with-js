<!=== Problem 01 ===!>
// Given n, calculate F(n) by fibonacci series
// n = 2 => 2, n = 4 => 3, n = 8 => 21

var fib = function(n) {
    let obj = {}
    return sum(n, obj);
};

var sum = function(n, obj) {
    if(n in obj) return obj[n];
    if(n < 2) return n;
  
    obj[n] = sum(n-1, obj) + sum(n-2, obj);
    return obj[n];
}

fib(5);
