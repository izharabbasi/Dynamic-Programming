// function highAndLow(numbers) {
//   // ...
//     numbers = numbers.split(' ');
//     return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
// }


// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function descendingOrder(n){
//     let numbers = n.toString().split('');
//     return [...numbers].sort((a,b) => b-a).join('');

    
// }

// console.log(descendingOrder(123456789));

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     const newArray =[];
//     for(let i =0; i < l.length; i++){
//         if(typeof(l[i]) === 'number'){
//             newArray.push(l[i])
//         }
//     }
//     return newArray;
// }

// console.log(filter_list([1,2,'a','b']));
// console.log(filter_list([1,2,'aasf','1','123',123]));

function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
