//Excercise No 1

// const getFileExtention = (str) => {
//     return str.slice(str.lastIndexOf('.'));
// }

// console.log(getFileExtention("hello.html"));

//Excercise No 2

function newString (str) {
    return str.indexOf('New!') === 0 ? str : `New! ${str}`

}

console.log(newString('New! Izhar'));