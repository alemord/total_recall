////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
  
////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i+=2) {
console.log (i);
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++ 
1;
console.log (plantee);

wolfy [3] = "Gotham City";
console.log (wolfy);

dart.push("Hawkins");

wolfy[0] = "Gameboy";

console.log (wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}



////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log (favMovies [8]);

favMovies.push('La Dolce Vita');
console.log(favMovies);

favMovies.sort();
console.log(favMovies);


favMovies.pop();
console.log (favMovies);

favMovies.reverse();
console.log (favMovies);

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////