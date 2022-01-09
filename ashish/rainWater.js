// Suppose you are given an elevation map that shows the amount of rain over the topology of a region. Say the map is simplified, and is thus composed of varying bars of different heights. You can assume that each bar has the same width. Can you figure out how much rain it will collect?

// There are several different ways of representing an elevation map. We only need to consider the simplest method of using a one dimensional array of non-negative numbers, each number representing the height at different places. The goal is to find out how much rain can be "trapped" when given an elevation map.

// The figure below shows various elevation maps and the units of rain water they can catch. Notice how the rain collected is similar to Tetris-- we're trying to figure out how many units of rain would "fit" in certain slots.

// trappingRainWater([0,0,1,0,2,1,0,1,3,2,1,2,1,0,0]) should return 6

// example {4,1,0,2,0}
/*
    # 
    #     #
    # R R #
    # # R # 

    where "R" is rain and "#"" is terrain height
*/

function getLeftMax(array, index) {
  let max = 0;
  let temp = index;
  while (temp > 0) {
    max = Math.max(max, array[temp - 1]);
    temp--;
  }
  return max;
}

function getRightMax(array, index) {
  let max = 0;
  let temp = index;
  while (temp < array.length - 1) {
    max = Math.max(max, array[temp + 1]);
    temp++;
  }
  return max;
}

function trappingRainWater(array) {
  const waterLevelArray = array.map((el, index) => {
    const leftMax = getLeftMax(array, index);
    const rightMax = getRightMax(array, index);
    const waterLevel = Math.min(leftMax, rightMax);
    if (waterLevel < el) return 0;
    return waterLevel - el;
  });
  return waterLevelArray.reduce((a, b) => a + b, 0);
}

function trappingRainWaterOptimal(array) {
  let [leftMax, rightMax, left, right, max] = [0, 0, 0, array.length - 1, 0];

  while (left < right) {
    if (array[left] <= array[right]) {
      if (array[left] > leftMax) {
        leftMax = array[left];
      } else {
        max += leftMax - array[left];
      }
      left++;
    } else {
      if (array[right] > rightMax) {
        rightMax = array[right];
      } else {
        max += rightMax - array[right];
      }
      right--;
    }
  }
  return max;
}

console.log(
  trappingRainWaterOptimal([0, 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 0, 0])
);
console.log(trappingRainWaterOptimal([4, 1, 0, 2, 0]));
console.log(trappingRainWaterOptimal([4, 2, 0, 6, 2, 3, 5]));

console.log(trappingRainWater([0, 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 0, 0]));
console.log(trappingRainWater([4, 1, 0, 2, 0]));
console.log(trappingRainWater([4, 2, 0, 6, 2, 3, 5]));
