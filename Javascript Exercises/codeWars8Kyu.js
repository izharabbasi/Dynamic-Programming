// var yourString = "/installers/services/";

// var result = yourString.slice(1,-1);

// console.log(result);

// function repeatStr (n, s) {
//     console.log(n * s);
//   }

// console.log(6, "s");

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {                  
        total += arr[i];               
      }
    }
    return total;  
  }

console.log(positiveSum([1,2,3,4,5,-5]));