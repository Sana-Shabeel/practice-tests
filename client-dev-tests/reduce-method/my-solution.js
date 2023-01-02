/*
    Exercise 1/5
    Use array.reduce to return the sum of all the numbers in the array
    The function should return 0 if the array is empty 
  */
export function sumArray(array) {
  return array.reduce((sum, curr) => sum + curr, 0);
}

/* 
    Exercise 2/5
    Use array.reduce to return the product of all the numbers in the array
    The function should return 1 if the array is empty 
  */
export function productArray(array) {
  return array.reduce((sum, curr) => sum * curr, 1);
}

/*
    Exercise 3/5
    Use array.reduce to return the largest number in the array
    The function should return -Infinity if the array is empty
  */
export function maxArray(array) {
  return array.reduce(
    (sum, curr) => (curr > sum ? (sum = curr) : curr),
    -Infinity
  );
}

/*
    Exercise 4/5
    Use array.reduce to return the smallest number in the array
    The function should return Infinity if the array is empty
  */
export function minArray(array) {
  return array.reduce((sum, curr) => (sum < curr ? sum : curr), Infinity);
}

/* 
    Exercise 5/5
    Use array.reduce to return the average of all the numbers in the array
    The function should return 0 if the array is empty
  */
export function averageArray(array) {
  if (array.length === 0) return 0;

  const sum = array.reduce((a, b) => a + b, 0);

  return sum / array.length;
}
