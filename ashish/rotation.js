// Check if the strings are rotations of each other or not.

// Two strings s1 and s2 are given. The test is to check if s2 is the reversed version of s1.

// A possible input is:
// Input:
// letuslet
// usletlet
// Answer:
// Output: 1
// This means that the result is true.

function rotation(str1, str2) {
  if (str1.length === str2.length) {
    return str1.concat(str1).indexOf(str2) !== -1;
  }
  return false;
}

console.log(rotation("letuslet", "usletlet"));
