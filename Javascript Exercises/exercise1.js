//Excercise No 1

// const getFileExtention = (str) => {
//     return str.slice(str.lastIndexOf('.'));
// }

// console.log(getFileExtention("hello.html"));

//Excercise No 2

// function newString (str) {
//     return str.indexOf('New!') === 0 ? str : `New! ${str}`

// }

// console.log(newString('New! Izhar'));

//Excercise No 3

// function addStrings(str) {
//     if(str.length < 3 ){
//         return str
//     }

//     let fStr = str.substring(0,3);
//     let lStr = str.substring(str.length -3);
//     let sumStr = fStr + lStr;
//     return sumStr;

// }

// console.log(addStrings("hello World!"));

//Excercise No 4

// function firstEvenHalf(str){
//     return str.slice(0, str.length / 2);
// }

// console.log(firstEvenHalf('temp'));
// console.log(firstEvenHalf('temple'));
// console.log(firstEvenHalf('temples'));

//Excercise No 5

// function concatStr (str1, str2) {
//     return `${str1.slice(1)} ${str2.slice(1)}`
// }

// console.log(concatStr('hello', "world"));

//Excercise No 6

// function near(a, b){
//     if(100 - a < 100 - b){
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(near(98,97));

//Excercise No 7

// function findEven(arr){
//     const newArray = []

//     for (let i= 0 ; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }

// console.log(findEven([1,2,3,4,5,6,7,8,9,10]));

//Excercise No 8

// function findEven(num) {
//     let arr = []
//     for(let i = Number(num); i >= 1; i--){
//         if (i % 2 == 0 ){
//             arr.push(i)
//         }
//     }
//     return arr.reverse();
// }

// console.log(findEven("10"));

//Excercise No 9

// function sorted(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) {
//       return "Please Sort Array";
//     }
//   }
//   return "Sort Array";
// }

// console.log(sorted([2, 3, 454, 6, 78, 9]));

//Excercise No 10

// function lEvenNum(arr) {
//   const lNum = arr.filter((ar) => {
//     if (ar % 2 === 0) {
//       return ar;
//     }
//   });
//   return Math.max(...lNum)
// }

// console.log(lEvenNum([1, 2, 3, 4, 5,10,99,100]));


//Excercise No 11

// function replace(str){
//     return str.replace(/[0-9]/ , "$")
// }

// console.log(replace("1helo!"));
// console.log(replace("hel1o!"));


//Excercise No 12

// function leapYear(year){
//     if(year % 4 === 0 ){
//         return `${year} is a leap year`
//     }
//     return `${year} is not a leap year`
// }

// console.log(leapYear(2016));

//Excercise No 13

// const obj1 = {a:1,b:2,c:5}
// const obj2 = {a:1,b:2,c:5}


// function checkObj(obj1, obj2){
//     return Object.keys(obj1).every(key => obj2[key])
// }

// console.log(checkObj(obj1, obj2));

//Excercise No 14

// function random(){
//     return Math.floor(Math.random() * 16).toString(16);
// }

// function hexaDecimal(){
//     const randomNumbers = random().split('');
//     const newArray = [];
//     for (let i = randomNumbers.length; i >=6 ; i++) {
//         console.log(i);
        
//     }
//     return newArray
// }

// console.log(hexaDecimal());

//Excercise No 15


// function sortStr(str){
//     const newStr = str.split('')
//     const arrStr = newStr.sort();
//     return arrStr.join('')
// }

// console.log(sortStr("webmaster"));

//Excercise No 16

// function countVowels(str) {
//     return str.match(/[aeiou]/gi).length;
// }

// console.log(countVowels('sAxxcxceasjxs'));

//Excercise No 17

// function notRepeated(str){
//     str.split('')
//         .filter((item, index, array) => 
//             array.filter(arrayitem => arrayitem === item).length === 1
//     )
    


// }

// console.log(notRepeated('asaxmsdasdeddvd'));

