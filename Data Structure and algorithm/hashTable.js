// class HashTable {
//     constructor(size){
//         this.data = new Array(size);
//     }

//     _hash(key){
//         let hash =0;
//         for(let i=0; i < key.length ; i++){
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if(!this.data[address]){
//             this.data[address] = []
//         }

//         this.data[address].push([key,value])
//         return this.data
//     }

//     get(key){
//         let address = this._hash(key);
//         let currentBucket = this.data[address];
//         if(currentBucket){
//             for (let i = 0; i < currentBucket.length; i++){
//                 if (currentBucket[i][0] === key){
//                     return currentBucket[i][1]
//                 }
//             }
//         }
//         return undefined;
//     }
//     keys(){
//         const keyArray = [];
//         for (let i = 0; i < this.data.length; i++) {
//             if(this.data[i]){
//                 keyArray.push(this.data[i][0][0])
//             }
//         }
//         return keyArray;
//     }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes' , 10000);
// myHashTable.set('apples' , 10000);
// myHashTable.set('banana' , 10000);
// myHashTable.set('apples' , 10000);
// console.log(myHashTable.keys());


function recurringNumber (arr){
    // Solution with array

    // for(let i =0; i < arr.length; i++){
    //     for(let j = i + 1 ; j < arr.length; j++){
    //         if(arr[i] === arr[j] ){
    //             return arr[i];
    //         }       
    //     }
    // }
    // return arr

    // Solution with Objects
    let map = {};
    for (let i =0; i< arr.length; i++){
        if(map[arr[i]] !== undefined){
            return arr[i]
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined;
}




console.log(recurringNumber([1,2,5,5,6,2,5]));