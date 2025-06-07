function reverseString(arr) {
  // Approach: run loop till half of array and swap first element with last and so on
  // take care of even and odd array

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
