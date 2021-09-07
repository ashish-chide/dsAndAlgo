// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
// anagrams("rail safety", "fairy tales");
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // const processedStringA = stringA.replace(/[^\w]/gi, "").toLowerCase();
  // const processedStringB = stringB.replace(/[^\w]/gi, "").toLowerCase();
  // let charMapA = {};
  // let charMapB = {};
  // for (let char of processedStringA) {
  //   charMapA[char] = charMapA[char] + 1 || 1;
  // }
  // for (let char of processedStringB) {
  //   charMapB[char] = charMapB[char] + 1 || 1;
  // }
  // const keysA = Object.keys(charMapA);
  // const keysB = Object.keys(charMapB);
  // if (keysA.length !== keysB.length) {
  //   return false;
  // }
  // for (let key in charMapA) {
  //   if (charMapA[key] !== charMapB[key]) {
  //     return false;
  //   }
  // }
  // return true;

  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
module.exports = anagrams;
