

/*** WHILE LOOPS ***/
// Loops until conditions is false.  If first condition is false, exits immediately

// let i = 0;

// while (i < 5){
//     console.log(i);
//     i++;
// }

/** DO WHILE LOOPS */
//  Code block will executed at least once even if condition is false

// let i = 0;
// do {
//     console.log('hi there');
//     i++;
// } while (i < 5);

// let secretPassword = 'js is awesome';
// let answer;

// do{
//     answer = prompt('Please enter the secret password');
// } while (answer != secretPassword);

/***  FOR LOOPS ***/
// let i = 0;
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

/** NESTED LOOPS **/

// let arrOfArrays = [];

// for (let i = 0; i < 2; i++){
//     arrOfArrays.push([]);
//     console.log(arrOfArrays)
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//         console.log(arrOfArrays[i]);
//     }
// }

// console.log(arrOfArrays);

/*** LOOPS AND ARRAYS  ***/

// const numbers = [1, 4, 65, 5432, 4524354235];
// for(let i=0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

/***   FOR OF LOOP  ***/
// let numbers = [ 0,1,2,3,4,5]

// for (const number of numbers){
//     console.log(number);
// }

/*  LOOPS AND OBJECTS */
/* FOR IN LOOP WITH AN OBJECT*/
// const person = {
//     name: 'John',
//     age: 30,
//     profession: 'Teacher'
// }

// for (const key in person){
//     console.log(key, person[key])
// }

/* ANOTHER FOR IN LOOP WITH AN ARRAY */
// const colors = ['red', 'green', 'blue'];

// for (const index in colors){
//     console.log(`Index ${index}: ${colors[index]}`)
// }

/*  BREAK AND CONTINUE */

// for (let i = 0; i < 115; i++){
//     if (i === 2){
//         continue;
//     }
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
// }

// let someArray = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky'];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!"); 
//         notFound = false; 
//         } else{ 
//             someArray.shift();
//         } 
//     }


/*  Fibonacci Sequence */
// let nr1 = 0;
// let nr2 = 1;
// let temp;
// let fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }

// console.log(fibonacciArray);


/* Exercise 5.1 */

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// let answer = false;

// while(!answer){
//     let userAnswer = prompt('Enter a number between 1 and 5');
//     userAnswer = Number(userAnswer);
//     if(userAnswer === randomNumber){
//         answer = true;
//         console.log('you guessed correctly');
//     } else if(userAnswer < randomNumber){
//         console.log('Your answer was too low, try again');
//     } else console.log('Your answer was too high, try again');
// }


/* Exercise 5.2 */

// let counter = 0;
// let step = 3;

// do{
//     counter += step;
//     console.log(counter);
// } while (counter < 100);

/* Exercise 5.3 */




/*  Exercise 5.4 */

// let myTable = [];
// let rows = 5;
// let cols = 5;
// let counter = 0;


// for(let i = 0; i < rows; i++){
//         let tempTable = [];
//         myTable.push(tempTable);

//         for(let j = 0; j < cols; j++){
//                 tempTable.push(counter);
//                 counter++;
//         }
// }
// console.log(myTable);

// /* Exercise 5.5 */
// // goals:  create a series of nested arrays within an array.  
// //         each row will contain the same number of columns. each column will have a unique number from 1 - last number
// //         table will adjust dynamically depending on values for the variables


// // let gridArray = [];
// // let cellNum = 64;
// // let counter = 0;
// // let rowArray;

// // for(let i = 0; i < cellNum + 1; i++){
// //     if(counter % 8 === 0){
// //         if(rowArray != undefined){
// //                 gridArray.push(rowArray);
// //         }
// //         rowArray = []; 
// //     }
    
// //     counter++;
// //     let tempVal = counter;
// //     rowArray.push(tempVal);
// // }

// // console.log(gridArray);
