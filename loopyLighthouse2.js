function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];
  for(start; start <= end; start++) {
    if((start % multiples[0] === 0) && (start % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (start % multiples[0] === 0) {
      console.log(words[0]);
    } else if (start % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(start);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);