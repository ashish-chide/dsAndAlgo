// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   const reverseString = str.split("").reduce((rev, char) => char + rev, "");
  //   return reverseString === str;

  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// for integers

function palindromeInteger(num) {
  let rem;
  let final = 0;
  let temp = num;
  while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    final = final * 10 + rem;
  }
  return final == temp;
}

module.exports = { palindrome, palindromeInteger };
