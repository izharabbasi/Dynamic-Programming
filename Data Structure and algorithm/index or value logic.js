// function min(arr, toReturn) {
//     var val = Math.min.apply(Math, arr)
//     return toReturn == 'value' ? val : arr.indexOf(val)
// }

// console.log(min([1,2,3,4,5,0], 'value'));

// function evenChars(string) {
//     //keep coding!
//     let str = string.length;
    
//     if(str< 2 || str >= 100) {
//         return "invalid string";
//     }
//     return [...string].filter((x , i) => i % 2)

    
//     }


// console.log(evenChars ("abcdefghijklm"));


// function sumStr(a,b) {

//     if(a === ''){
//         return b
//     } else if (b === '') {
//         return a
//     } else if (a === '' && b === ''){
//         return '0'
//     }
    
//     let totalSum = parseInt(a) + parseInt(b) ;
//     return String(totalSum)
    
//     }

//     console.log(sumStr("12","12"));


// function sum (numbers) {

//     //input Logic
//     if(numbers.length === 0 ){
//         return 0;
//     }

//     //Main Logic
//     return numbers.reduce((a,b) => a + b)
// };

// console.log(sum([1, 5.2, 4, 0, -1]));



