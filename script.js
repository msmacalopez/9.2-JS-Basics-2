//data manipulation
// safe Number = -2^53-1 to 2^53-1 (for JS specific)
const value = 2_132_143_432_432_432_423_443;
console.log(typeof value); //number

const no_number = "1234";
//string to number
let number = +no_number;
console.log(typeof number); //number

//string to number
number = Number(no_number);
console.log(typeof number); //number

//Parse + isNaN();
const no_number2 = "1o2.34a";
console.log(isNaN(no_number2));
//NaN: true --> if value is a number
//NaN: false-->if a number

//check number from left, digit by digit
number = parseFloat(no_number2);
console.log(isNaN(number), number);

//check number from left, digit by digit
number = parseInt(no_number2);
console.log(isNaN(number), number);

//Some operations with string and numbers
let value_withStrings = "2" + (3 + 3); //26 string
console.log(value_withStrings, typeof value_withStrings);

value_withStrings = "2" + 3 + 3; //233 string
console.log(value_withStrings, typeof value_withStrings);

value_withStrings = 1 + 3 + "2"; //42 string
console.log(value_withStrings, typeof value_withStrings);

value_withStrings = 1 + "2" + 3; //123 string
console.log(value_withStrings, typeof value_withStrings);

//String, without quotations only TRUE/FALSE or javascript class
const hi = "Hello"; //'', "", ``

// skipt character: \
const hey = 'Hi, I\'m "Maca"\t \\ from Sydney';
console.log(hey);

const hola = `hi, i'm Macarena \t \ from chile`;
console.log(hola);

//concatenation
const n = "Maca";
const loc = "chile";
let bio = "Hi, this is " + n + " from " + loc;
console.log(bio);

//new method: template literal
bio = `${hi}, this is ${n} - Maca from ${loc} using string literals
-blank space-`;
console.log(bio);

//////////////////////////////////////////////////////////
console.log("--------------DATA MANIPULATION-------------");

//count the total characters
const counting = bio.length;
console.log(counting);

//indexOf, lastIndexOf, search (they return number-position)
const i1 = bio.indexOf("H"); //starts from 0
console.log(i1);

const i2 = bio.lastIndexOf("Maca"); //not found is -1
console.log(i2);
console.log(bio[i2]); //i2 got the position of M, of the last time maca appears on the "bio" string

const i3 = bio.search("z"); //not found is -1
console.log(i3);

//CharAt, [], split
let look = bio.charAt[1];
look = bio[1]; // same
console.log(look);

//split1
let split1 = bio.split(); //all 1 item of array
console.log(split1); //convert the whole string in 1 array with 1 item

split1 = bio.split(""); //split every single character, even blank spaces, and put them into an array [total elements = length??]
console.log(split1);

split1 = bio.split("Maca"); //split in Maca, but Maca disappears
console.log(split1); //Maca is 2twice so the final array has 3 elements

//slice, substring       //substr--> depricated
let slice1 = bio.slice(0, 5); //take string from 0 to 4, 5 is not included (5 is the length)
console.log(slice1);

slice1 = bio.slice(0); //takes everything from 0 to final
console.log(slice1);

// takes from left to right:
slice1 = bio.slice(-5); //last 5 characters
console.log(slice1);

//substring
let sub1 = bio.substring(0, 5);
console.log(sub1); //same than slice but slice better, allows negatives

//replace, trim
let replace1 = bio.replace("chile", "Chile"); //only the first "chile"
replace1 = replace1.replaceAll("i", "I");
console.log(replace1);

//trim only trims spaces at the beggining and end
console.log(replace1.length);
replace1 = replace1.trim(); //new trimmed string
console.log(replace1.length);

//to UPPER OR LOWERCASE
replace1 = replace1.toLocaleLowerCase();
console.log(replace1);
replace1 = replace1.toLocaleUpperCase();
console.log(replace1);

console.log("----------------OPERATIONS IN ARRAY----------------");
//Array properties //referential datatype
let arg = [];
console.log(arg);

arg = [
  "args",
  123,
  true,
  null,
  undefined,
  [23, 456, "args2"],
  { name: "maca", skills: ["AI", "JS"] },
  () => {
    console.log("from fx within array");
  },
  () => {
    console.log("from fx2 within array");
    return "you did it";
  },
];
console.log(arg);

let i4 = arg[5];
i4 = arg[5][1];
console.log(i4); //456

i4 = arg[6]["skills"][0];
console.log(i4); //AI

i4 = arg[6].skills[1];
console.log(i4); //JS

i4 = arg[7]();
console.log(i4); //doesn't return that's why returns undefined

i4 = arg[8]();
console.log(i4); //this fx returns

console.log("----------------MUTATING DATA----------------");
//Operations in Array - Mutating the data
let fruits = ["apple", "Banana", "mango"];

//ADDing item to the END and Beginning
fruits.push("orange"); // to END
fruits.unshift("tomato"); //to BEGINNING
console.log(fruits);

//Adding item to middle - delete -
fruits.splice(2, 0, "lettuce"); // index 2, delete 0, add lettuce
console.log(fruits);

//challenge add lettuce inside the array "arg" and inside the array skills, position 1
// arg = arg[6]["skills"];
// console.log(arg);
arg[6].skills.splice(1, 0, "lettuce"); //but added to the past code as well
console.log(arg);

//override
fruits[2] = "watermelon";
console.log(fruits);

// Remove from the END
fruits.pop();
console.log(fruits);

// Remove from the Beginning
fruits.shift();
console.log(fruits); //['apple', 'watermelon', 'Banana', 'mango']

//Splice, allows u to select only the items you want, modify the original array
let fruits2 = fruits.splice(2, 2); //new Array with items 2,3 (from index 2, 2 values)
console.log(fruits2); // ['Banana', 'mango']
console.log(fruits); //['apple', 'watermelon']

//Concatenate arrays: result = a.concat(b, c); //concatenate a,b,c arrays
let conc_fruits = fruits.concat(fruits2);
console.log(conc_fruits); //['apple', 'watermelon', 'Banana', 'mango']

//Slice, read data but doesn't modify the original
let my_slice = conc_fruits.slice(1, 3);
console.log(my_slice); //['watermelon', 'Banana']

//join --> Array to String
const join = fruits.join("-");
console.log(join);

//split --> String to Array
const join_split = fruits.join("-").split("-");
console.log(join_split);

//Sort Array ---This one works good only for numbers
let sort1 = conc_fruits.sort((a, b) => b - a); //descendant -not working
let sort2 = conc_fruits.sort((a, b) => a - b); //ascendant -not working

sort1 = conc_fruits.slice().sort(); // A–Z (ASCII-based)
sort2 = conc_fruits.slice().sort().reverse(); // Z–A (ASCII-based)
console.log(sort1); // ['Banana', 'apple', 'mango', 'watermelon']
console.log(sort2); // ['watermelon', 'mango', 'apple', 'Banana']

//Correct sorting (no ASCII):
sort2 = conc_fruits.slice().sort((a, b) => a.localeCompare(b)); //A-Z
sort1 = conc_fruits.slice().sort((a, b) => b.localeCompare(a)); //Z-A
console.log(sort1); // ['watermelon', 'mango', 'Banana', 'apple']
console.log(sort2); // ['apple', 'Banana', 'mango', 'watermelon']

//COnvert array to String (adds a comma in between)
// doesnt change the original array
fruits2.toString();
console.log(fruits2.toString());

//mutates array to Reverse - turn around the elements
fruits.reverse(); // change the array
console.log(fruits); //["watermelon", "apple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

//Specific Loops for Array

//FOR item OF array
for (let item of fruits) {
  console.log(item);
}

//for each --> use the anonymous function
// array.FOREACH((item,i)) =>{}
//doesnt return anything
fruits.forEach((item, i) => {
  console.log(item, i);
});

// Map, transform data--> new array without modifying the old one!!!!
//returns array
const value_map = fruits.map((f, i) => {
  return "DT-" + f.toUpperCase();
});
console.log(value_map);
//Map with Arrow FX:
const values1 = fruits.map((f) => {
  return "DT-" + f.toUpperCase();
});

//Includes-->returns true or false
const yes_no = fruits.includes("watermelon");
console.log(yes_no);

//Filter
const value_filter = fruits.filter((fruit, index) => {
  // return true;
  return fruit.includes("e");
});
console.log(value_filter);

//Reduce (as an accumulator, items and a starting value, in this case acc=100)
const money = [1, 1, 1, 1, 1];
const suma = money.reduce((acc, num) => {
  return acc + num;
}, 100);
console.log(suma); //105

//Find
const find = fruits.find((item) => {
  return item === "watermelon";
});
console.log(find); //return the item or undefined

//Every --check if all includes "a" returns True, if one missing, returns False
const retu = fruits.every((fruit) => {
  return fruit.includes("a");
});
console.log(retu);

//Array
const new_array = Array(100).fill("😊");
console.log(new_array);

////////////////////CHALLENGE 2////////////////////////////////////////////////
//1. create an array of 50 random unique numbers range between 1-100 programmatically
console.log("-------------CHALLENGE  Q1----------------------");
let challenge = [];

for (let a = 0; a < 50; a++) {
  challenge.push(Math.floor(Math.random() * 100) + 1);
}
console.log(challenge);

//2.Sort the array in the descending order
console.log("-------------CHALLENGE  Q2----------------------");
let sort_Mtom = challenge.slice().sort((a, b) => b - a);
console.log(sort_Mtom);

//3.get the total value of the array
console.log("-------------CHALLENGE  Q3----------------------");
const total = challenge.reduce((total, item) => {
  return total + item;
}, 0);
console.log(total);

//4.create 2 new arrays. create odd numbers and even numbers for array based on the original array, use filter
console.log("-------------CHALLENGE  Q4----------------------");
const evens = challenge.filter((number) => {
  return number % 2 === 0;
});
const odds = challenge.filter((number) => {
  return number % 2 != 0;
});
console.log("--------Evens");
console.log(evens);
console.log("--------Odds");
console.log(odds);

//5.remove all the duplicate number from array if there is any
console.log("-------------CHALLENGE  Q5----------------------");
const unique = sort_Mtom.filter((fruit, i) => {
  return sort_Mtom[i] != sort_Mtom[i + 1];
});
console.log(unique);
console.log(unique.length);

// const value_filter = fruits.filter((fruit, index) => {
//   // return true;
//   return fruit.includes("e");
// });
// console.log(value_filter);

/////////////////Create the array from the beginning with array of UNIQUE 50 items
console.log("-------------CHALLENGE  Q6----------------------");
let challenge2 = [];
challenge2 = [Math.floor(Math.random() * 100) + 1];
const size = 50;
let random1;
let hold1;

while (challenge2.length < size) {
  random1 = Math.floor(Math.random() * 100) + 1;

  for (let item of challenge2) {
    if (item != random1) {
      hold1 = random1;
    } else continue;
    challenge2.push(hold1);
    break;
  }
}
console.log(challenge2);

////////////////approach 2
const uniqArr = [];
const arrSize = 50;

for (let i = 0; uniqArr.length < arrSize; i++) {
  const num = Math.ceil(Math.random() * 100);
  if (uniqArr.indexOf(num) == -1) {
    uniqArr.push(num);
  }
}
console.log(uniqArr);
