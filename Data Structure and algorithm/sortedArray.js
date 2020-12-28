function sortedArray(array1,array2) {
    const mergedArray = [];
    let arrayItem1 = array1[0];
    let arrayItem2 = array2[0];

    let i = 1;
    let j = 1;

    //check inputs
    if (array1.length === 0 ){
        return array2;
    } else if (array2.length === 0 ) {
        return array1;
    }

    //merged Array
    while(arrayItem1 || arrayItem2) {
        if(!arrayItem2 || arrayItem1 < arrayItem2) {
            mergedArray.push(arrayItem1);
            arrayItem1 = array1[i];
            i++
        } else {
            mergedArray.push(arrayItem2);
            arrayItem2 = array2[j];
            j++
        }
    }
    return mergedArray;
}

console.log(sortedArray([1,2,3,45], [1,3,4,6,8,90]));