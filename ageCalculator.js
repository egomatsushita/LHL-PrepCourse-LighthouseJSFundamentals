function ageCalculator(name, yearOfBirth, currentYear) {
  var ageInYears = currentYear - yearOfBirth;
  return name + " is " + ageInYears + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdiand", 1988, 2015));