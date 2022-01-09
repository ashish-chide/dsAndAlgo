
function maxRectInHistogram(array) {
  if (array.length == 0) return 0;
  let temp = array;
  const result = [];
  const min = Math.min(...temp);
  const rect = min * temp.length;
  temp = temp.map((el) => el - min);
  result.push(rect);
  const subArrays = splitArray(temp);

  subArrays.forEach((el) => {
    console.log(maxRectInHistogram(el));
  });
}

function splitArray(array) {
  const result = [];
  let start = -1;
  array.forEach((el, i) => {
    if (el === 0) {
      result.push(array.slice(start + 1, i));
      start = i;
    }
  });
  result.push(array.slice(start + 1));

  return result;
}

console.log(maxRectInHistogram([1, 2, 3, 4]));
