// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'
function pyramid(n, row = 0, string = "") {
  //   for (let row = 0; row <= n; row++) {
  //     let string = "";
  //     const columnLen = 2 * n - 1;
  //     const midpoint = Math.floor(columnLen / 2);
  //     for (let column = 0; column <= columnLen; column++) {
  //       if (midpoint - row <= column && midpoint + row >= column) {
  //         string += "#";
  //       } else {
  //         string += " ";
  //       }
  //     }
  //     console.log(string);
  //   }
  if (n === row) {
    return;
  }
  const columnLen = 2 * n - 1;
  const midPoint = Math.floor(columnLen / 2);
  if (string.length === columnLen) {
    console.log(string);
    return pyramid(n, row + 1);
  }
  let add;
  if (midPoint - row <= string.length && midPoint + row >= string.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, string + add);
}
pyramid(4);
module.exports = pyramid;
