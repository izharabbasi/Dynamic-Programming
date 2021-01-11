// function orderBreaker(input) {
//     const sortedArray = [...input].sort((a ,b) => a - b);

//     for(let i =0; i < input.length; i++){

//         if(sortedArray[i] !== input[i]){
//             if(input.indexOf(sortedArray[0]) > 1){
//                 return sortedArray[0]
//             }
//             else if (sortedArray[i] < input[i]){
//                 return input[i]
//             }
//         }
//     }
// }

// console.log(orderBreaker([1,2,3,4,17,5,6,7,8]));
