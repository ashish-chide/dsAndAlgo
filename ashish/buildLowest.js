// Remove K digits | Build lowest number | Leetcode #402

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

function buildLowest(string, k) {
  if (string.length === k) return "0";
  const result = [];
  let max = 0;
  string.split("").forEach((element) => {
    if (element > max) {
      result.push(element);
      max = element;
    } else {
      while (k > 0 && element < max) {
        result.pop();
        max = result[result.length - 1];
        k--;
      }
      result.push(element);
      max = element;
    }
  });
  while (k > 0) {
    result.pop();
    k--;
  }
  while (result[0] == 0) {
    result.shift();
  }
  if (result.length === 0) return "0";
  return result.join("");
}

console.log(buildLowest("1432219", 3));
console.log(buildLowest("112", 1));
console.log(buildLowest("10200", 1));
