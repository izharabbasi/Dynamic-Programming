function reccuringFirstItem(input){
    for (let i = 0; i < input.length; i++){
        for (let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined
}


console.log(reccuringFirstItem([6,3,1,3,5,1,2,4]));