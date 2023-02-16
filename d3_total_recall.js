// Creating Classes & Factories

class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }
console.log (Hamster);

//
class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

  const timmy = new Person('Timmy');

// Age Timmy five years
for(let i = 0; i < 5; i++) {
  timmy.ageUp();
}

// Have Timmy eat five times
for(let i = 0; i < 5; i++) {
  timmy.eat();
}

console.log(timmy);

//Excercise Five Times

for (let i= 0; i < 5; i++) {
    timmy.exercise();
}

// 9 Years

for (let i = 5; i <= 9; i++) {
    timmy.ageUp ();
}

//Hamster name and ex.

const gus = new Hamster ("Gus");

gus.owner = ("Timmy");

console.log (gus.owner);

timmy.buyHamster (gus);

// Age Timmy

for (let i = 14; i <= 29; i++) {
    timmy.ageUp ();
}

// Timmy excercises and eats twice

// for (let i = 0; i < 2; i ++) {
//     timmy.eat();
// }

// for (let i = 0; i < 2; i++); {
// timmy.exercise ();
// }


timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()

console.log (timmy.age);

//Chef Make Dinners

class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  
    serve() {
      console.log(`The chef tonight cooks: ${this.appetizer}, ${this.entree}, and ${this.dessert}.`);
    }
  }
  
  class Chef {
    makeDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  const chef = new Chef();
  
  const dinner1 = chef.makeDinner('Bruschette', 'Spaghetti alla Carbonara', 'Ice Cream');
  const dinner2 = chef.makeDinner('Caprese salad', 'Chicken alla Cacciatora', 'Tiramisu');
  const dinner3 = chef.makeDinner('Minestrone', 'Steak', 'Cheesecake');
  
//Print all dinners 
//   dinner1.serve();  
//   dinner2.serve();  
//   dinner3.serve();  

//Print a random dinner
  const dinners = [dinner1, dinner2, dinner3];
  const randomIndex = Math.floor(Math.random() * dinners.length);
  const randomDinner = dinners[randomIndex];
  randomDinner.serve();
  



  // How do we assign a value to a variable? let somevar = 10
// How do we change the value of a variable? somevar = 12
// How do we assign an existing variable to a new variable? let newvar = somevar


 