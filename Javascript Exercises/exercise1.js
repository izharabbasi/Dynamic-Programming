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

function sorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return "Please Sort Array";
    }
  }
  return "Sort Array";
}

console.log(sorted([2, 3, 454, 6, 78, 9]));
