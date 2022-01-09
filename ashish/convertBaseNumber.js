function convertBase10ToAny(num, base) {
  let remainder = [];

  while (num > 0) {
    remainder.push(num % base);
    num = Math.floor(num / base);
  }
  let a = convertAlpa(remainder, base);
  return a.reduce((a, b) => b + a, "");
}

function convertAlpa(arr, base) {
  return arr.map((el) => {
    if (el >= 10 && el < base) {
      let diff = el - 10;
      return String.fromCharCode(65 + diff);
    }
    return el;
  });
}

// convertAlpa([1, 12, 13, 2], 16);
console.log(convertBase10ToAny(9, 2));
console.log(convertBase10ToAny(10, 2));
console.log(convertBase10ToAny(11, 2));
console.log(convertBase10ToAny(12, 2));
console.log(convertBase10ToAny(15, 2));
