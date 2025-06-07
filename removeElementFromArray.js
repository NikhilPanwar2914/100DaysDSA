function removeElementFromArray(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[count] = arr[i];
      count++;
    }
  }
  return count;
}

console.log(removeElementFromArray([3, 2, 1, 5, 3, 4, 8, 3], 3));
