function lastIndexOf(array, value) {
  var flag = false;
  var lastIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      lastIndex = i;
      flag = true;
    }
  }
  if (!flag) {
    return -1;
  }
  return lastIndex;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);