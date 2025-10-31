// function greet(name, age){
//     console.log(`Hello ${name} your age is ${age}`);
// }

// greet('Bobby', 32);

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(5,9));

// function greet() {
//     console.log('Hello');
//     return 'literally anything';
// }

// console.log(greet());

// function add(a,b){
//     return a+b;
// }

// const add = (a,b) => a+b;

// const musicianVitals = (guitar, amp, player) => `${guitar}, ${amp}, ${player}`; 

//  console.log(musicianVitals('Stratocaster', 'Marshall', 'Ritchie Blackmore'));

// function addTwoNumbers(a,b){
//     return a + b;
// }

// let var1 = 5;
// let var2 = 6;

// console.log(addTwoNumbers(var1, var2));
// console.log(addTwoNumbers(1,99));

// let promptVal = function(){
//     let userName = prompt('what is your name');
//     let descriptiveArr = ['funky', 'illustrious', 'ethereal', 'cosmic', 'odiferous'];
//     let randomNumber = Math.floor(Math.random() * descriptiveArr.length);
//     let descriptor = descriptiveArr[randomNumber];
//     console.log(`${userName} ${descriptor}`);
// } 

// promptVal();

// let var1 = 100;
// let var2 = 10;
// let operator = '+';

// function calculator(p1, p2, p3){
//     if(p3 === '-'){
//         let sum = p1 - p2;
//         return sum; 
//     }
//     else {
//         let sum = p1 + p2;
//         return sum;
//     }
// }

// console.log(calculator(var1, var2, operator));

// const arr = ['squirrel', 'alpaca', 'buddy'];
// arr.forEach(e => console.log(e));

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result = addTwoNumbers(4,5);
// console.log(result);

// function addTwoNumbers(x,y){
//     return x+y;
// }

// let resultsArr = [];

// for(let i = 0; i < 10; i++){
//     let result = addTwoNumbers(i, 2*i);
//     // i = 0 ... 0 + 0 = 0
//     // i = 1 ... 1 + 2 = 3
//     // i = 2 ... 2 + 4 = 6
//     resultsArr.push(result);
//     // resultsArr = [0, 3, 6 ...]
// }
// console.log(resultsArr);


// let calculatedVals = [];

// for(let i =0; i < 10; i++){
//     let val1 = i*5;
//     let val2 = i * i;

//     let response = addValues(val1, val2);

//     calculatedVals.push(response);

// }

// function addValues(para1, para2){
//     return para1 + para2;
// }


// console.log(calculatedVals);

// function testAvailability(x){
//     console.log('Available here:', x);
// }

// testAvailability('hi!');
//     console.log('Not available here:', x);

// function testAvailability(){
//     let y = `I'll return`;
//     console.log('available', y);
//     return y;
// }

// let z = testAvailability();
// console.log(`outside`, z);  
// outside available i'll return
// console.log(`not available`, y);  
// not avail undefined

// function logRecursive(nr){
//     console.log('started function:', nr);
//     if(nr > 0){
//         logRecursive(nr - 1);
//     } else {
//         console.log('done with recursion');
//     } console.log('ended function:', nr);
// } 

// logRecursive(3);

// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z = 10;
//     }
//     console.log('not acces', z)
// }

// doOuterFunctionStuff(2);

// let start = 10;

// function countDown(value) {
//     console.log(value);

   
//     if (value < 1) {
//         return;
//     };

    
//     if (value >= 1) {
//         value--;
//         countDown(value);
//     }
// }

// countDown(start);

// let start = 10;
// function loop1(val){
//     console.log(val);
//     if(val < 1){
//         return;
//     }
//     return loop1(val-1);
// }
// loop1(start);

// function loop2(val){
//     console.log(val);
//     if(val>0){
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);

let varName = function(arg){
    console.log(arg);
}

varName('this book sux');
