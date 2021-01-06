// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];


// function findNeedle(haystack) {
//     // your code here
//     let result = ''
//     haystack.filter((item,index) => {
//         if(item === 'needle'){
//             let results =  `found the ${item} at position ${index}`;
//             result = results
//         }
//     })
//     return result;
// }

// console.log(findNeedle(haystack_3));

// var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
//     let count = 0;
//     let newArray = input[0];
//     for(let i = 0; i < input.length; i ++){
//         if(input[i] >= 0){
//             count++
//         }
//         else if(input[i] < 0) {
//             newArray += input[i]
//         }
//     }
//     let result = [count , newArray];
//     return result;
// }

// console.log(countPositivesSumNegatives(testData));

// function areYouPlayingBanjo(name) {
//     // Implement me
//     if(name.charAt(0) === "R"){
//         return `${name} plays banjo`;
//     }

//     return `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Martin"));
// console.log(areYouPlayingBanjo("Rikke"));

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         return name = 'Mercury'
//       case 2:
//         return name = 'Venus'
//       case 3:
//         return name = 'Earth'
//       case 4:
//         return name = 'Mars'
//       case 5:
//         return name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         return name = 'Uranus'
//       case 8:
//         return name = 'Neptune'
//     }
    
//   }

// console.log(getPlanetName(2));
// console.log(getPlanetName(5));
// console.log(getPlanetName(3));


// function sumArray(array) {
//     if(array === null || array.length <= 1){
//         return array
//     }
//     let max = Math.max(...array);
//     let min = Math.min(...array);
//     let sum = 0;
//     for(let i=0; i < array.length; i++){
//         sum += array[i]
//     }
//     return sum -max - min;
// }

// console.log(sumArray([ 6, 2, 1, 8, 10 ]));

// function grow(x){
//     return x.reduce((acc, next) => {
//         return next * acc
//     })
// }

// console.log(grow([1, 2, 3]));

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

console.log(countBy(1,5));
console.log(countBy(2,5));