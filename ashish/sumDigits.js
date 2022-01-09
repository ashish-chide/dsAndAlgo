// We're provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?

// Here's an example: if the input was 49, we'd go through the following steps:
// SNIPPET

// // start with 49

// 4 + 9 = 13

// // move onto 13

// 1 + 3 = 4

// We would then return 4.

function sumDigits(num) {
  while (num > 10) {
    let temp = num;
    const result = [];
    while (temp > 0) {
      let rem = temp % 10;
      temp = Math.floor(temp / 10);
      result.unshift(rem);
    }
    num = result.reduce((a, b) => a + b);
  }
  return num;
}
console.log(sumDigits(439230)); // 3
console.log(sumDigits(12345)); // 6
console.log(sumDigits(0)); // 0
console.log(sumDigits(9)); //9
console.log(sumDigits(10)); //1
console.log(sumDigits(99)); // 9
