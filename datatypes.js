// // Example of What your JS File in VS Code should look like


// /*
// 	Remember!!! Once you’ve completed a problem,
// 	COMMENT OUT YOUR WORK before moving on to the next one.
// 	This makes it easier to read and debug the current 
// 	Solution you are working on.
// */


// // I. Variables & Data Types
// // A. Q + A
// // 1. let x = "tree"  
// // 2. x = "flower"
// // 3.let x = 17;
// // let y = x; 
// // 4.Declaring a variable means defining the variable. Assigning a variable means giving it a value. Defining a variable is used to either declare or assign the variable.
// // 5. Pseudocode allows you to use plain english to walk through the steps you will take to create a program or solve a problem.
// // 6. 75 % thinking, 25% writing
// // // B. Strings
// // 1. let firstVariable = "Hello World!";
// // let firstVariable = 77;
// // let secondVariable = firstVariable
// // let secondVariable = "Student"
// // the value of firstVariable is "Student".
// // 2. const name = "Alessandro";
// // console.log ("my name is" + name);

// // C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name'==='Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false ||false ||false ||false ||false ||true);
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a + b === c);
// console.log(a * a  === d);
// console.log(48 == '48');
// // D. The Farm
// let animal = 'cow';

// if (animal === 'cow') {
//   console.log('mooooo');
// } else {
//   console.log("Hey! You're not a cow.");
// }
    

// // E. Driver's Ed

// let age = 18;
// if (age >=16) {
//     console.log ("Here are the keys!");
// } else {
// console.log ("You are not 16 yet!")
// }

// //_____________________________________________________________


// // II. Loops
// // A. The Basics
// for (let i=0; i <=10; i++) 
// {console.log (i);}
// for (let i=10; i <= 400; i++)
// {console.log (i);}
// for (i=12; i <=4000; i+=3)
// {console.log (i);}
// // B. Get even
// for (let i=1; i<=100; i++)
// {console.log (i);}
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i + ' <-- is an even number');
//     } else {
//       console.log(i);
//     }
//   }
// // C. Give me Five

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("I found a " + i + ". Three is a crowd. High five!");
//     } else if (i % 3 === 0) {
//       console.log("I found a " + i + ". Three is a crowd.");
//     } else if (i % 5 === 0) {
//       console.log("I found a " + i + ". High five!");
//     }
//   }
// // D. Savings account
// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//   bank_account += i;
// }
// console.log(bank_account);


// let bank_Account = 0;

// for (let i = 1; i <= 100; i++) {
//   bank_Account += i * 2;
// }

// console.log(bank_Account);

// //_____________________________________________________________



// // III. Arrays & Control Flow
// // A. Talk about it:

// // The things in an array are called elements.

// // Arrays do guarantee that the items will be in a specific order.

// // An array can be compared to a grocery list. 

// // B. Easy Does It
// let quotes = ("","","");
// // C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// console.log (randomThings [0]);
// console.log (randomThings [2]= "World")

// randomThings[2] = "World";
// console.log(randomThings);
// // D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass [2];

// console.log (ourClass [4] = "Octocat");  

// ourClass.push ("Cloud City");
// console.log (ourClass);

// // E. Mix It Up

// // const myArray = [5, 10, 500, 20]

// // myArray.push ("Aegon", "Ciao");
// // console.log (myArray);

// // myArray.shift (0);
// // console.log (myArray);

// // myArray.unshift ("Bob Marley");
// // console.log (myArray);

// // const myArray = ['Bob Marley', 10, 500, 20, 'Aegon', 'Ciao'];
// // myArray.reverse();
// // console.log(myArray);

// // F. Biggie Smalls

// // const num = 73;

// // if (num < 100) {
// //   console.log("little number");
// // } else {
// //   console.log("big number");
// // }
// // G. Monkey in the Middle

// // if (num < 5) {
// //     console.log("little number");
// //   } else if (num > 10) {
// //     console.log("big number");
// //   } else {
// //     console.log("monkey");
// //   }
  

// // H. What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//   kristynsCloset.splice(6, 0, "raybans");
//   console.log(kristynsCloset);
  
//   kristynsCloset[5] = "stained knit hat";
//   console.log(kristynsCloset);

//   const thomsOutfit = thomsCloset[0][0];
//   console.log(`Thom will wear his ${thomsOutfit} today.`);
  
//   const thomsPants = thomsCloset[1];
//   const thomsPantsItem = thomsPants[1];
//   console.log(thomsPantsItem);  
  
//   // Accessing one item from Thom's accessories array
//   const thomsAccessories = thomsCloset[2];
//   const thomsAccessoriesItem = thomsAccessories[0];
//   console.log(thomsAccessoriesItem);


//   console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][1] + "!");

//   thomsCloset[1][2] = "Footie Pajamas";

// //_____________________________________________________________



// // IV. Functions
// // A. 
// const name = "Slimer";
// printGreeting = ("Hello there, " + name); 
// console.log (printGreeting);

// // B.
// const printCool = (argument) => {
// 	return argument + " is cool";
// };
// console.log(printCool("Captain Reynolds"));
// // C.

// const calculateCube = ( num ) => {
//     return Math.pow( num , 3 );
//  }
 
//  console.log(calculateCube( 5 ));
// // D.
// const isAVowel = (character) => {
// 	if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isAVowel("a"));

// // E.
// function getTwoLengths(str1, str2) {
//     return [str1.length, str2.length];
//   }
  
//   console.log(getTwoLengths("Hank", "Hippopopalous"));
// // F.
// function getMultipleLengths(arr) {
//     var result = [];
  
//     for (var i = 0; i < arr.length; i++) {
//       result.push(arr[i].length);
//     }
  
//     return result;
//   }
  
//   console.log(getMultipleLengths(["hello", "world", "javascript"]));
  
// // G.
// function maxOfThree(num1, num2, num3) {
//     var max = num1;
  
//     if (num2 > max) {
//       max = num2;
//     }
  
//     if (num3 > max) {
//       max = num3;
//     }
  
//     return max;
//   }
  
//   console.log(maxOfThree(6, 29, 1));  
  
// H.


 function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
 => "Peanutbutter"



//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra

