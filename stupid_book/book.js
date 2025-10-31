console.log('BMI Calculator in metric:');
console.log(`1 inch = 2.54cm.`);
console.log(`2.2046 lbs = 1kg.`);

// inches to cm
let myInches = 12 * 5 + 10;
console.log(`My height in inches = ${myInches} inches.`);
let cm = 2.54;
let myCm = cm * myInches;
console.log(`My height is ${myCm} in cm.`);

// lbs to kg
let myLbs = 200;
let kg = 1/2.2046;
console.log(`My weight is ${myLbs}lbs.`);
let myWeightInKg = myLbs * kg;
console.log(`My weight in kg = ${myWeightInKg}kg.`);

// BMI formula
let BMI = myWeightInKg / (myCm / 100)**2;
console.log(`My BMI is ${BMI}.`);


