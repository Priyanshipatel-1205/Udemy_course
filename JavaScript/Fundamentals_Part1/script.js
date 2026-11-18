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

// STRING & LITERALS
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
