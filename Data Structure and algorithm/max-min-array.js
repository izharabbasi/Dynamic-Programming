function solve(arr){
    let res = []
    let len = arr.length
    for(let i=0; i<len; i++) {

        if(i%2===0) {
        let max = Math.max(...arr)
        arr.splice (arr.indexOf(max), 1);
        res.push(max)
        
        }else {
        let min = Math.min(...arr)
        arr.splice (arr.indexOf(min), 1);
        res.push(min)
        }
    }
    return res
    };

console.log(solve([15,11,10,7,12]));