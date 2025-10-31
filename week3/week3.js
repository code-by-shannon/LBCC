// Week 3 Lecture Tlatchi
// console.log(1 ==3); // false
// console.log(1 == true) // true because with only == instead of ===, js classifies 1 as 'truthy'
// console.log(0 == true); // false as 0 is a falsy value
// for DATA TYPE comparison use ===
// console.log(1 === true); // output false


// console.log(5 > 4 && 7 < 9); //true
// console.log(5<1 && 5 > 2);   //false
// console.log( 3>5) && 1 > 2;  //false

// console.log( 5 === 2 || 0 === 0);  //true
// console.log(5 === '5') //false
// console.log(5 !== '5') //true

// if(5 > 2){
//     console.log('true');
// } else console.log('false');  // true

// if(5 > 12){
//     console.log('true');
// } else console.log('false');  // false

// Practice exercise 4.1
// let myVar = true;
// console.log(myVar);
// if(myVar){
//     console.log('myVar is true'); // true
// }

// if(!myVar){
//     console.log('myVar is false');
// }

//or . . . 

// myVar = false;
// console.log(myVar);
// if(myVar){
//     console.log('myVar is true'); // true
// }

// if(!myVar){
//     console.log('myVar is false'); // false
// }

// Practice exercise 4.2

// let age = prompt("How old are you?");
// age = Number(age);
// let message = '';

// if (age >= 21){
//     message = 'You are allowed to enter and purchase alcohol';
// } else if (age >= 19) {
//     message = 'You are allowed to enter but may NOT purchase alcohol';
// }  else {
//     message = 'Entry denied';
// }

// console.log(message);

// Practice exercise 4.3

// let id = true;
// let resultCheck = id ? 'access granted' : 'access denied';
// console.log(resultCheck);

// id = false;
// console.log(resultCheck);


//Practice exercise 4.4
// let prize = Math.floor(Math.random() * 6);
// prize = Number(prize);
// console.log(prize);
// let promptResult = prompt('I\'m Mr. Magic 8-ball!  Ask me ANYTHING!');
// switch(prize){
//     case 0:
//     console.log(`${promptResult} : 'No way, Jose!'`);
//     break;
//     case 1:
//     console.log(`${promptResult} : 'Totally, dude!'`);
//     break;
//     case 2:
//     console.log(`${promptResult} : 'Well, anything's possible, I suppose ...'`);
//     break;
//     case 3:
//     console.log(`${promptResult} : 'Don't count on it!'`);
//     break;
//     case 4:
//     console.log(`${promptResult} : 'Are you sure you want to know that?'`);
//     break;
//     case 5:
//     console.log(`${promptResult} : 'Ask a different question!'`);
//     break;
// }

// 4.5

// let prize = prompt('Select a number between 0 and 10');
// prize = Number(prize);
// console.log(prize);
// console.log(typeof prize);


// switch(prize){
//     case 0:
//     case 1:
//     console.log(`'You entered ${prize}:  You win a free can of biscuits!'`);
//     break;
//     case 2:
//     case 3:
//     console.log(`'You entered ${prize}:  You win a free trip to the shadow realm!'`);
//     break;
//     case 4:
//     case 5:
//     console.log(`'You entered ${prize}:  You win one free cheeseburger!'`);
//     break;
//     case 6:
//     case 7:
//     console.log(`'You entered ${prize}:  You win a free trip around the world in a hot air balloon!'`);
//     break;
//     case 8:
//     case 9:
//     console.log(`'You entered ${prize}:  You win a free day with your in-laws!'`);
//     break;
//     case 10:
//     console.log(`'You entered ${prize}:  You win a free can of whoop - ass!'`);
//     break;
//     default:
//     console.log('You did not enter a valid number');
// }

// let userNumber = prompt('enter any whole number between 1 and 100');
// userNumber = Number(userNumber);
// let computerNumber = Math.floor(Math.random() * 101);
// computerNumber = Number(computerNumber);

// console.log(`Your number: ${userNumber}`);
// console.log(`Computer's number: ${computerNumber}`);
// if(userNumber > computerNumber){
//     console.log('Your number is bigger!');
// } else if (computerNumber > userNumber){
//     console.log('Your number is smaller!');
// } else console.log('Amazing coincidence!  You and the computer both chose the same number!');

// let friendName = prompt('Enter your name');

// switch(friendName){
//     case "Ace": 
//     case "Coach":
//     case "Mario":
//     console.log(`Your name is ${friendName} and you are a super good friend`);
//     break;

//     case "Natalie":
//     case "Bruce Tweeter":
//     case "Otto":
//     case "Mean Joe Greene":
//     console.log(`Your name is ${friendName} and you are a very dead friend`);
//     break;

//     default:
//         console.log(`Your name is ${friendName} and you ain't no friend of mine!`);
// }


/* ROCK, PAPER, SCISSORS GAME */

// let weapons = ['Rock', 'Paper', 'Scissors'];
// // Player chooses a number
// let playerNumber = prompt('Enter 0 for rock, 1 for paper or 2 for Scissors');
// playerNumber = Number(playerNumber);
// console.log(`You chose ${weapons[playerNumber]}`);
// // computer chooses a number
// let computerNumber = Math.floor(Math.random() * 3);
// computerNumber = Number(computerNumber);
// console.log(`The computer chose ${weapons[computerNumber]}`);


// if(playerNumber !== 0 && playerNumber !== 1 && playerNumber !== 2){
//     console.log('You did not enter a valid number.  Please try again and enter 0, 1 or 2');
// }   else if(playerNumber === computerNumber){
//         console.log('Tie, please play again');
//     } else if (playerNumber === 0 && computerNumber === 2){
//         console.log('Player wins!  Rock beats Scissors');
//     } else if (playerNumber === 1 && computerNumber === 0){
//         console.log('Player wins, Paper beats Rock');
//     } else if (playerNumber === 2 && computerNumber === 1){
//         console.log('Player wins!  Scissors beats Paper')
//     } else console.log ('Sorry the computer beat you!');





