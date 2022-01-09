// An integer N is given and a print of the desired pattern is required.

// A possible input is:
// N = 3
// Answer:
// Output:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

function printPattern(n) {
  let length = 2 * n - 1;
  let string = "";
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let res = n;
      string += res;
    }
    console.log(string);
    string = "";
  }
}

printPattern(3);
