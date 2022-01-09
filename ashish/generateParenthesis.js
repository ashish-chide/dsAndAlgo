// An integer N is given, which represents the number of pairs of parentheses. The question is to generate all combinations of the well-formed parenthesis.

// The possible input is:
// Input:
// N = 3
// Answer:
// Output:
// ((()))
// (()())
// (())()
// ()(())
// ()()()

function createParenthesis(n) {
  const solution = [];

  const generate = (left, right, partial) => {
    if (left > right) return;
    if (!left && !right) solution.push(partial);
    if (left > 0) generate(left - 1, right, partial + "(");
    if (right > 0) generate(left, right - 1, partial + ")");
  };

  generate(n, n, "");

  return solution;
}

console.log(createParenthesis(3));
