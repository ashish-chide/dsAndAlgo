// A number N is given. The test is to check if N is a part of the Fibonacci series.

// A possible input is:
// N = 34
// Answer:
// Output:
// Yes

function fib(n, a = 0, b = 1) {
  if (n == 0) return true;
  if (n == 1) return true;

  let next = a + b;

  if (next === n) return true;
  if (next > n) return false;
  return fib(n, b, next);
}

function isPerfectSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isFibo(num) {
  const logic = 5 * Math.pow(num, 2);
  if (isPerfectSquare(logic - 4) || isPerfectSquare(logic + 4)) {
    return true;
  }
  return false;
}

console.log(isFibo(35));
