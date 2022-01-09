// Uh-oh! There’s been an emergency on Isla Unfortunata and we need to find accommodation for some customers who are stuck with nowhere to stay.
// Fortunately we have some (magical) partners who can open hotels right now, anywhere we need them to – but it’s a big effort so we need to be as efficient as possible.
// Can you help us make sure everyone has somewhere to stay?
// There are N customers who are stranded on the island, which is spread on an x-axis.
// We have coordinates for each customer. Since they’re all really tired, they can’t walk more than K units.
// We’ve promised to accommodate all these customers, so we need you to find the minimum number of hotels that need to be setup to do so.
// Input Format
// First line contains T, the number of test cases.
// Each test case has 3 lines of input: First line contains N, number of customers.
// Second line contains N space separated integers, where Ni indicates the coordinates of the ith customer. Third line contains value K.

function solve(customer, k) {
  if (!customer.length) return 0;
  if (k < 1) return customer.length;
  const sorted = customer.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    const element = sorted[i];
    if (result.length) {
      if (Math.abs(result[result.length - 1] - element) >= k) {
        result.push(element + k);
      }
    } else {
      result.push(element + k);
    }
  }
  return result.length;
}

console.log(solve([1, 4, 2], 0));

// [1, 4, 2, 6, 8, 9]
// [1, 2, 4, 6, 8, 9,10]
// [3, 8]
