function highAndLow(numbers) {
  // ...
    numbers = numbers.split(' ');
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function descendingOrder(n){
//     let numbers = n.toString().split('');
//     return [...numbers].sort((a,b) => b-a).join('');

    
// }

// console.log(descendingOrder(123456789));
