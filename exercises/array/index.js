// function BaseBall(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (current === "C") {
//       result.pop();
//     } else if (current === "D") {
//       result.push(Number(result[result.length - 1] * 2));
//     } else if (current === "+") {
//       result.push(
//         Number(result[result.length - 1]) + Number(result[result.length - 2])
//       );
//     } else {
//       result.push(Number(current));
//     }
//   }

//   return result.reduce((total, current) => total + current);
// }

// console.log(BaseBall(["5", "-2", "4", "C", "D", "9", "+", "+"]));

// function minOperations(logs) {
//   let sum = 0;
//   for (let i = 0; i < logs.length; i++) {
//     const currentOperation = logs[i];
//     if (currentOperation === "../") {
//       if (sum > 0) {
//         sum--;
//       }
//     } else if (currentOperation === "./") {
//       sum = sum + 0;
//     } else {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(minOperations(["d1/", "../", "../", "../"]));

function canAttack(board) {
  let rookRow, rookCol;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] == "R") {
        rookRow = i;
        rookCol = j;
      }
    }
    if (rookRow && rookCol) break;
  }
  let count = 0;
  let moveUp = rookRow;
  while (moveUp >= 0) {
    if (board[moveUp][rookCol] == "p") {
      count++;
      break;
    }
    if (board[moveUp][rookCol] == "B") {
      break;
    }
    moveUp--;
  }

  let moveDown = rookRow;
  while (moveDown < 8) {
    if (board[moveDown][rookCol] == "p") {
      count++;
      break;
    }
    if (board[moveDown][rookCol] == "B") {
      break;
    }
    moveDown++;
  }

  let moveRight = rookCol;
  while (moveRight < 8) {
    if (board[rookRow][moveRight] == "p") {
      count++;
      break;
    }
    if (board[rookRow][moveRight] == "B") {
      break;
    }
    moveRight++;
  }

  let moveLeft = rookCol;
  while (moveLeft >= 0) {
    if (board[rookRow][moveLeft] == "p") {
      count++;
      break;
    }
    if (board[rookRow][moveLeft] == "B") {
      break;
    }
    moveLeft--;
  }

  return count;
}

canAttack([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  ["p", "p", ".", "R", ".", "p", "B", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
]);
