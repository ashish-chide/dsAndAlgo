// Winner of an election.

// An array of candidate names is given and the test is to print the candidate’s name that received the maximum votes.

// A possible input is:
// N = 13
// Votes [] = {john, "johnny", "jackie", "johnny", "jackie", jamie, jamie, john, johnny, jamie, johnny, john, john}
// Answer:
// Output: john 4

function winner(array) {
  const electionMap = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!electionMap[element]) {
      electionMap[element] = 1;
    } else {
      electionMap[element]++;
    }
  }
  let winner;
  let maxVotes = 0;
  for (let name in electionMap) {
    if (electionMap[name] > maxVotes) {
      maxVotes = electionMap[name];
      winner = name;
    } else if (electionMap[name] === maxVotes && winner > name) {
      winner = name;
    }
  }
  return winner;
}

console.log(
  winner([
    "johnny",
    "jackie",
    "jackie",
    "johnny",
    "jackie",
    "jackie",
    "jamie",
    "jamie",
    "johnny",
    "jamie",
    "johnny",
  ])
);
