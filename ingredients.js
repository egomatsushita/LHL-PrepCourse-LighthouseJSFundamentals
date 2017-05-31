var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
count = 0;
console.log("# Using while loop.");
while(count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("# Using for loop.");
for(var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("# Using for loop - ingredients backwards");
for(var i = 0; i < ingredients.length; i++) {
  ingredientsReverse = ingredients.reverse();
  console.log(ingredientsReverse[i]);
}