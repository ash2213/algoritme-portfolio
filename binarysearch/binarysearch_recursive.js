
const values = [21,22,23,25,27,28,29,31,32,34,35];

export function binarySearchRecursive(
  search,
  values,
  start,
  end,
  iterations = 0
) {
  let min = start;
  let max = end;

  if (min > max) {
    return {
      found: false,
      index: -1,
      iterations: iterations,
    };
  }

  let middle = Math.floor((min + max) / 2);
  iterations++;
  if (values[middle] === search) {
    return {
      found: true,
      index: middle,
      iterations: iterations,
    };
  }
  
  if (values[middle] < search) {
    console.log("Tallet er for lavt", values[middle]);
    return binarySearchRecursive(search, values, middle + 1, max, iterations);
  }
  if (values[middle] > search) {
    console.log("Tallet er for højt", values[middle]);
    return binarySearchRecursive(search, values, min, middle - 1, iterations);
  }

}

const result = binarySearchRecursive(35, values, 0, values.length - 1);
console.log("Result", result);
