// 'use strict';  //strict mode

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive');


// // const interface = 'Audio'; //error because these words are 
// // reserved because of strict mode

// // const private = 534;

//FUNCTIONS
/*
function logger() {
  console.log('I am Priya');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
//function declaration
function calcAge1(birthYear){
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear){ //anonymous function - function without name
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsuntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsuntilRetirement(1991, 'Jonas'));
console.log(yearsuntilRetirement(1980, 'Bob'));
*/

//Functions calling another function
/*
function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/

// ARRAYS
/*
const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'Peter';

//ways to create array
//1.
const friends = ['Michael', 'John', 'Peter'];
console.log(friends);
//2.
const y = new Array(1991, 1984, 2003, 2019);

console.log(friends[0]); //Michael
console.log(friends[2]); //Peter

console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Peter

friends[2] = 'Jay'; //replace Peter with Jay
console.log(friends);

const john = ['John', 'Bravis', 1982, friends]; //array with different types of elements
console.log(john);
console.log(john.length); //4

//Exercise

const calcAge = function (birthYear){
  return 2037 - birthYear;
}

const years = [1990, 2007, 2019, 1967, 2003];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*

//push - adds elements to the end of an array
const friends = ['Michael', 'John', 'Peter'];
friends.push('Jay');
//const newLength = friends.push('Jay'); //prints length of new array
console.log(friends);

//unshift - adds elements to the beginning of an array
friends.unshift('Max');
console.log(friends);

// Pop - remove element  - last element, returns the removed element
friends.pop();  //remove last elemetn, removes Jay
const popped = friends.pop(); // returns Peter
console.log(popped);
console.log(friends);

//shift - remove element  - first element
friends.shift(); //removes first element
console.log(friends); 

// indexOf - give index of element, if not present then -1
console.log(friends.indexOf('John')); //1
console.log(friends.indexOf('Steve'));  //-1

//include - uses strict equality - ===
console.log(friends.includes('John')); //true
console.log(friends.includes('Steve')); //false 
*/

//OBJECTS
/*
const jonasArray = [
  'John',
  'Braves',
  2037 - 1991,
  ['Michael', 'Max', 'Steve']  //array inside array
];
//creating object using curly braces
const jonas = {
  firstName: 'Jonas',
  lastName: 'Bravis',
  age: '2037 - 1991',
  friends: ['Michael', 'Max', 'Steve']
};
*/

//accessing objects - dot (.) and square brackets []
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Bravis',
  age: 2037 - 1991,
  friends: ['Michael', 'Max', 'Steve']
};
console.log(jonas);

//dot(.) notation
console.log(jonas.firstName); //Jonas
console.log(jonas['lastName']); //Bravis

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonay: Choose between firstName, lastName, age, and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
  console.log(jonas[interestedIn]);
} else{
  console.log('Wrong request!! Choose between firstName, lastName, age, and friends')
}

jonas.location = 'Spain';
jonas['twitter'] = '@jonasbravis';
console.log(jonas);

//Challenge 
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Bravis',
  birthYear: 1991,
  job: 'Teacher',
  friends: ['Michael', 'Max', 'Steve'],
  hasDriversLicense: true,

  // calcAge: function(birthYear){  //any function attached with object is called method
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //    //this keyword refers to current object i.e jonas
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} - year old
     ${thos.job}, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

//LOOPS

//for loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');
/*
for(let rep = 1; rep <= 10; rep++){
  console.log('Lifting weights repetition ' + rep);
}
  */
/*
const jonasArray = [
  'John',
  'Braves',
  2037 - 1991,
  'teacher',
  ['Michael', 'Max', 'Steve']  
];
const types = [];

for(let i = 0; i < jonasArray.length; i++){
  console.log(jonasArray[i], typeof jonasArray[i]);

  //filling types array
  //types[i] = typeof jonasArray[i]; //option 1
  types.push(typeof jonasArray[i]); //option 2
}
console.log(types);

const years = [1991, 2005, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
//continue - to exit the current iteration of loop and continue the next one
//break - to completely terminate the whole loop

console.log('---ONLY STRINGS---');
for(let i = 0; i < jonasArray.length; i++){
  // if typeof jonasArray is not equals to string then continue
  //i.e skip that iteration and continue to next iteration
  // i.e only print whose typeof is string
  if(typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < jonasArray.length; i++){
  if(typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/*
const jonasArray = [
  'John',
  'Braves',
  2037 - 1991,
  'teacher',
  ['Michael', 'Max', 'Steve']  
];

// 0, 1, ...., 4
//4, 3, ....,0
for(let i = jonasArray.length - 1; i>=0; i--){
  console.log(jonasArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
  console.log(`=======Starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++){
    console.log(`Exercises ${exercise}: Lifting weight repitition ${rep}`);
  }
}
  */

//WHILE LOOP

// for(let rep = 1; rep <= 10; rep++){
//   console.log('Lifting weights repetition ' + rep);
// }

// let rep = 1
// while(rep <= 10){
//   console.log('Lifting weights repetition ' + rep);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end..');
}


