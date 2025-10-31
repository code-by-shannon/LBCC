// arrGroceries = ['Milk', 'Bread', 'Apples'];
// arrGroceries.splice(1, 1, 'Bananas', 'Eggs')
// console.log(arrGroceries);
// arrGroceries.pop();
// console.log(arrGroceries);
// console.log(arrGroceries.sort());
// console.log(arrGroceries.indexOf('Milk'));
// arrGroceries.splice(1, 0, 'Carrots', 'Lettuce');
// console.log(arrGroceries);

// arrDrinks = ['Juice', 'Pop'];
// console.log(arrDrinks);


// let combinedList = arrGroceries.concat(arrDrinks);
// console.log(combinedList);
// let combinedList2 = combinedList.concat(arrDrinks);
// console.log(combinedList2);
// console.log(combinedList2.lastIndexOf('Pop'));

// let newArr = [1,2,3];
// let nestedArr = [newArr, newArr, newArr];
// console.log(nestedArr[1][1]);

// let arr = [0,1,2];
// console.log(typeof arr);

// let myCar ={
//     make:'Ford',
//     model:'Mustang',
// }

// let newProp = 'color';

// myCar['newProp']='red';

// console.log(myCar);

// newProp = 'forSale';
// myCar['newProp'] = true;
// console.log(myCar);

// console.log(myCar['make'], myCar['model'], myCar['newProp']);

// let company = {
//     companyName: 'Healthy Candy',
//     activities: ['food manufacturing', 'improving kids\' health', 'manufacturing toys'],
//     address:{
//         street:'2nd street',
//         number:'123',
//         zipcode:'33116',
//         city:'Miami',
//         state:'Florida'
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company.address.street);
// company.address.number = '666';
// console.log(company);

// let activity = company.activities[0];
// console.log(activity);

// let people = {
//     friends: []
// }

// let friend1 = {
//     firstName: 'Jose',
//     lastName: 'Alaniz',
//     id: 123
// }

// let friend2 = {
//     firstName: 'Cesar',
//     lastName: 'Michel',
//     id: 456
// }

// let friend3 = {
//     firstName: 'Charlie',
//     lastName: 'Peterson',
//     id: 789
// }

// people.friends.push(friend1, friend2, friend3);
// console.log(people);

// const theList = [
//     'Laurence', 
//     'Svekis', 
//     true, 
//     35, 
//     null, 
//     undefined, 
//     {
//     test: 'one', 
//     score:55
//     }, 
//     ['one', 'two']
// ];

// console.log(theList);
// theList.shift();
// theList.pop();
// theList.unshift('FIRST');
// theList[3] = 'hello world';
// theList[2] = 'MIDDLE';
// theList.push('Last');
// console.log(theList);

// storeItems = [];

// glasses = {
//     name: 'glasses',
//     model: '3-D',
//     cost: 3.99,
//     quantity: 456
// };

// pills = {
//     name: 'schizo meds',
//     model: 'something-inol',
//     cost: 333.99,
//     quantity: 4567
// }

// dairy = {
//     name: 'almond mild',
//     model: 'central plateu',
//     cost: 9853.99,
//     quantity: 1
// }

// storeItems = [glasses, dairy, pills];
// console.log(storeItems);

// console.log(storeItems[2].quantity);

// 1. no,  wrong.  yes you can reassign values within an array declared with const, but cannot redeclare the array itself
// 2. length
// 3. 1, 6   wrong  -1, 1
// because indexOf is looking for whether the element exists or not.  if not -1.  if yes, the first index where it is found
//4  myArr[1] = 4;

// const myArr = [1,3,5,6,8,9,15];
// myArr[1] = 4;
// console.log(myArr);

// const myArr2 = [];
// myArr2[10] = 'test';
// console.log(myArr2);
// console.log(myArr2[1]);
// undefined x 10, 'test
//undefined

// 5. test, empty   wrong   empty x 10, 'test,   undefined
// 6. empty   wrong   undefined

// let deepPurple = {
//     album: 'In Rock',
//     year: 1970,
//     sideA: ['Speed King', 'Bloodsucker', 'Child In Time']
// }

// deepPurple.sideB = ['Flight of the Rat', 'Into the Fire', 'Living Wreck'];

// console.log(deepPurple);
// deepPurple.musicians = ['Ritchie', 'Jon', 'Ian', 'Ian', 'Roger'];
// console.log(deepPurple);
// console.log(deepPurple.album);
// console.log(deepPurple['year']);
// console.log(deepPurple.sideB)
// console.log(deepPurple['sideA']);
// deepPurple.gear = ['Ritchie', 'Jon', 'Ian', 'Ian', 'Roger'];
// deepPurple.gear[0] = {member: 'Ritchie Blackmore', guitar: 'Stratocaster', amp: 'Marshall', effect: 'Revox'};
// deepPurple.gear[1] = {member: 'Jon Lord', organ: 'Hammond B2'};
// deepPurple.gear.push({member: 'Roger Glover', bass: 'Rickenbacker'})   
// deepPurple.gear.splice(2, 3)   
// console.log(deepPurple);

