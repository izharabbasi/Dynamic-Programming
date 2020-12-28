function arrayPlusArray(arr1, arr2) {
    
    let array1 = arr1.reduce((a,b) => {
        return a + b;
    }, 0)

    let array2 = arr2.reduce((a,b) => {
        return a + b;
    }, 0)
    
    let sum = parseInt(array1) + parseInt(array2)
    
    return sum

    }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));