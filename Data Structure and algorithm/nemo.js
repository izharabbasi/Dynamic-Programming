const {performance} = require('perf_hooks');

const large = new Array(100000).fill('izhar')

function findNemo(arr){
    let t0 = performance.now();
    for (let i=0; i<arr.length; i++){
        if(arr[i] === "izhar"){
            console.log("Found NEMO");
        }
    }
    let t1 = performance.now();
    console.log('the process took ' + (t1 - t0) + ' ms');
}

findNemo(large);