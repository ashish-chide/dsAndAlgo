// LongestSubstringKDistinct
function SlidingWindowDynamic(str, k) {
  const array = str.split("");
  let charMap = new Map();
  let longestSubstring = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    const currentElement = array[windowEnd];
    if (charMap.has(currentElement)) {
      let val = charMap.get(currentElement) + 1;
      charMap.set(currentElement, val);
    } else {
      charMap.set(currentElement, 1);
    }
    while (charMap.size > k) {
      if (charMap.get(array[windowStart]) == 1) {
        charMap.delete(array[windowStart]);
      } else {
        let val = charMap.get(array[windowStart]) - 1;
        charMap.set(array[windowStart], val);
      }
      windowStart++;
    }
    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  }
  return longestSubstring;
}

console.log(SlidingWindowDynamic("aaahhibc", 2));
console.log(SlidingWindowDynamic("aaabc", 3));
console.log(SlidingWindowDynamic("aaa", 2));

// LongestSubstringDistinct  all char needs to be distinct
function LongestSubstringDistinct(str) {
  const array = str.split("");
  let charMap = new Map();
  let longestSubstring = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    let currentElement = array[windowEnd];
    if (!charMap.has(currentElement)) {
      charMap.set(currentElement, 1);
    } else {
      while (charMap.has(array[windowEnd])) {
        charMap.delete(array[windowStart]);
        windowStart++;
      }
      charMap.set(array[windowStart], 1);
    }
    console.log(charMap);
    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  }
  return longestSubstring;
}

console.log(LongestSubstringDistinct("aaahhibcdcc"));
console.log(LongestSubstringDistinct("aaabasdd"));
console.log(LongestSubstringDistinct("aabkjhb"));
