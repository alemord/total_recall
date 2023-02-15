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



// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


console.log (favMovies.indexOf("Titanic"));

favMovies.sort();

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

favMovies.shift();

console.log (favMovies.unshift("I am Sam"));

let index = favMovies.indexOf("Django Unchained");
favMovies.splice(index,1,"Avatar");

let lastHalf = [];
let length = favMovies.length;
lastHalf = favMovies.slice (Math.floor(length / 2),length +1); 

console.log (lastHalf);

console.log (favMovies);


////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice (1 ,1 );
console.log (whereIsWaldo);
////////////////////////////////

whereIsWaldo.slice (4);
console.log (whereIsWaldo);

whereIsWaldo[1][2] = "No One";

console.log(whereIsWaldo[2][1][1]);


//  Excited Kitten
////////////////////////////////
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

///

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    const messages = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
  }
}


////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
console.log (nums);
let len = Math.ceil (nums.length/2);
console.log (len);
console.log (nums [len]);

//
