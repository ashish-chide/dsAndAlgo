// Parenthesis checker

// An expression string x is given. The test is to check the parenthesis.

// The possible input is:
// Input: { ( [ ] ) }
// Answer:
// Output: true

let Stack = require("../exercises/stack");

function checker(string) {
  const stack = new Stack();
  const array = string.split("");
  const opening = "({[";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (opening.includes(element)) {
      stack.push(element);
    } else {
      if (
        (stack.peek() == "(" && element == ")") ||
        (stack.peek() == "{" && element == "}") ||
        (stack.peek() == "[" && element == "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (!stack.peek()) return true;

  return false;
}

console.log(checker("[()](){}]"));
console.log(checker("{(})"));
console.log(checker("[()]()[{}"));
console.log(checker("[({())}]"));
console.log(checker("[({()})]"));
console.log(checker("{()}[]()([{}])"));
