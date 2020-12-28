function min(arr, toReturn) {
    var val = Math.min.apply(Math, arr)
    console.log(val);
    return toReturn == 'value' ? val : arr.indexOf(val)
}

console.log(min([1,2,3,4,5,0], 'index'));