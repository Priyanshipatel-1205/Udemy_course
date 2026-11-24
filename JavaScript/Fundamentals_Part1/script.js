/*
let js = 'amazing';
console.log(40 + 8 +23 - 10);

console.log('Priya');

let firstName = "Priyanshi";
console.log(firstName);

// let 3years = 3; Cannot have digit at start
// variables name can only have letter, numbers, dollar sign, underscore
// let name& = 'Priya' error because '&'

let Person = 'jonas' //do not start with captial letter

// keep variable names descriptive
*/

// DATA TYPES

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); //boolean
console.log(typeof 23); // number
console.log(typeof 'Priya'); //string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); //string

let year; //undefined - no value assigned
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2003;
console.log(typeof year)

console.log(typeof null); //error
*/

// let, const, var

/*
let age = 30;
age = 31; //reassigning the value to a variable

const birthYear = 2003;
birthYear = 2005; //error beacuse const variable cannot be reassigned - immutable

// const job; //undefined in const is not possible

var job = 'programmer';
job = 'teacher'; // var is function-scoped
*/

//OPERATORS
/*
// Math Operators
const now = 2027;
const agePriya = now - 2003;
const ageSara = now - 2018;
console.log(agePriya, ageSara);

console.log(agePriya * 2, agePriya / 10, 2**3);

const firstName = 'Priya';
const lastName = 'Patel';
console.log(firstName + ' ' + lastName); // + -> to concatenate two strings

//Assignment Operators
let x = 10 + 5; //15
x += 10 // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(agePriya > ageSara); // outcome - true or false, >, <, <=, >=
console.log(ageSara >= 18); // outcome - true or false

const isFullAge = ageSara >= 18;
*/

//OPERATOR PRECEDENCE

/* const now = 2027;
const agePriya = now - 2003;
const ageSara = now - 2018;

console.log(now - 2003 > now - 2018);

console.log(25-10-5); //left to right = 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 assignment operators -> right to left
console.log(x, y); // 10 10

const averageAge = (agePriya + ageSara) / 2;
console.log(agePriya, ageSara, averageAge);
*/

// STRING('' or "") & TEMPLATE LITERALS(``)
/*
const firstName = 'Priya';
const job = 'teacher';
const birthYear = 2003;
const year = 2027;

const priya = "i'm" + firstName + ', a' + (year - birthYear) + 'year old'
+ job + '!';
console.log(priya);

const priyaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; 
console.log(priyaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
  multiple\
  lines');

  console.log(`String
    multiple
    lines`);
*/

// IF-ELSE

/*
const age = 19;

if(age >= 18){
  console.log('Sara can start driving license!!');
} else{
  const yearsLeft = 18 - age;
  console.log(`Sara is too young to drive, wait for ${yearsLeft} years!`);
}

const birthYear = 2003;

let century;
if(birthYear<=200){
  century = 20;
}else{
  century = 21;
}

console.log(century);
*/

//TYPE CONVERSION

/*
const inputYear = '1991';
console.log(Number(inputYear) + 18); //1991 + 18
console.log(inputYear+18); //199118

console.log(Number('Priya')); //Nan
console.log(typeof NaN);  //number
console.log(String(23), 23); //23 23
*/

//TYPE COERCION - when we have two different data types then 

/*
// javascript will convert one datatype to another
// '+' will convert number to string

console.log('I am ' + 23 + 'years old'); //number is converted to string

//'-' will convert string to number
console.log('23' - '10' - 3); //23-10-3 = 10
console.log('23' + '10' + 3);  //23103
console.log('23' * '2'); //converted to number - 46
console.log('23' / '2'); //11.5

let n = '1' + 1; // '+' so number to string // '11'
n = n - 1;  //'-' so string to number // '11' to 11 //11 - 1 = 10
console.log(n); //10
 */

//TRULY AND FALSY VALUES

//5 Falsy VALUES -> 0, '', undefined, null, Nan

/*
console.log(Boolean(0));  //false
console.log(Boolean(undefined)); // false
console.log(Boolean('Priya')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false*/

// const money = 0;
// if(money){ // if(0) therefore execute false statement
//   console.log('Dont spend it at all');
// } else{
//   console.log('You should get a job') //output
// }

/*
const money = 100;
if(money){ // if(100) therefore execute true statement
  console.log('Dont spend it at all'); //output
} else{
  console.log('You should get a job') 
}

let height; //height is undefined therefore false value
if(height){ //falsy value
  console.log('YAY! Height is defined');
} else{
  console.log('Height is undefined'); //output
}
  */

//== and ===
// === very strict
// == does type coercion, less strict

// const age = 18;
// if(age === 18) console.log("You are adult (strict)");
/*
const age1 = '18';
if(age1 === 18) console.log("You are adult (strict)");
if(age1 == 18) console.log("You are adult (loose)");

const fav = Number(prompt("Whats your favouite number?"));
console.log(fav);
console.log(typeof fav); //number

if(fav === 7){  //7 === 7 -> true
  console.log('7 is an amazing number');
} else if(fav === 23){
  console.log('23 is also an amazing number');
} else{
  console.log('Number is not 23 or 7');
}

// !== and != 
if (fav !== 23) console.log('Why not 23');
*/

//BOOLEAN OPERATOR - AND, OR and NOT
/*
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

if(hasDriversLicense && hasGoodVision){
  console.log('Sara can drive');
}else{
  console.log('Someone else can drive');
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);
*/

//SWITCH statement
/*
const day = 'monday';

switch(day){
  case 'monday': //day === monday
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;

  case 'tuesday':
    console.log('Prepare theory videos');
    break;

  case 'wednesday':
  case 'thursday':
    console.log('Write coding examples');
    break;

  case 'friday':
    console.log('Record videos');
    break;

  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  
  default:
    console.log('Not a valid day');
}
    */

// 3 + 4
// 1991
// true && false && !false

//Ternary operator

const age = 23;
age >= 18 ? console.log('I like to drink wine') : 
  console.log('I link to drink water');

const drink = age >= 18 ? 'drink wine' : 'drink water';
console.log(drink);