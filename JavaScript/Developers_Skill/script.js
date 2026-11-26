'use strict';

//PROBLEM:
// We work for a company building a smart home thermometer. Our most recent
//task is this: "Given an array of temperatures of one day, calculate the temperature
// amplitude. Keep in mind that sometimes there might be a sensor error".

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude?
//Answer - difference between highest and lowest temp
// How to compute max and min temp?
// what is sensor error? what to do if there is sensor error?

// 2) Breaking up into sub-problems
//How to ignore error?
// Find max value in temp array
// Find min value in temp array
// Substract min from max (amplitude) and return it
/*
const calcTemAmplitude = function(temps){
  let max = temps[0];
  let min = temps[0];

  for(let i = 0; i < temps.length; i++){
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //for sensor error - 'error'
    if(curTemp > max){
      max = temps[i];
    }
    if(curTemp < min){
      min = temps[i];
    }
  }
  console.log(max, min);
  return max-min;
};

const amplitude = calcTemAmplitude(temp);
console.log(amplitude);

//PROBLEM 2: 
//Function should receive 2 arrays of temps

//Solution - Merge two arrays
const calcTemAmplitudeNew = function(t1, t2){
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for(let i = 0; i < temps.length; i++){
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //for sensor error - 'error'
    if(curTemp > max){
      max = temps[i];
    }
    if(curTemp < min){
      min = temps[i];
    }
  }
  console.log(max, min);
  return max-min;
};

const amplitudeNew = calcTemAmplitudeNew([2,9,4], [3, 5, 1]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function(){
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //C. FIX
    value: Number(prompt('Degrees celsius')) //prompt always returns string
  }

  //B. FIND
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}
//A. IDENTIFY
console.log(measureKelvin());
*/

//CHALLENGE - 1

const printForecast = function(arr){
  let str='';
  for(let i = 0; i < arr.length; i++){
    str = str + `${arr[i]}deg C in ${i+1} days...`;
  }
  console.log(str);
}
const arr1 = [17,21,23];
printForecast(arr1);