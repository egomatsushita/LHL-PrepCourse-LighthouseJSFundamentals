function range(start, end, step) {
  var arrayOfNumbers = [];
  for (start; start <= end; start += step) {
    arrayOfNumbers.push(start);
  }
  return arrayOfNumbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));