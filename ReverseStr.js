// var str = "hello";
// let reverseStr = str.split('').reverse().join('');

// console.log(str);

// function reverse(str) {
//     if (!str || str.length < 2 || typeof str !== 'string'){
//         return 'thats not good';
//     }

//     const backward = [];
//     let totalItem = str.length-1;

//     for (let i = totalItem; i >= 0; i--){
//         backward.push(str[i])
//     }

//     return backward.join('');
// }

// console.log(reverse('JavaScipt progamming'));

function multiTable(number) {
    // good luck
        const table = []
        for (i=0; i <= 10; i++){
            table.push(`${number} * ${i} = ${number*i}`)
        }
        return table.join('\n')
    }
    

console.log(multiTable(100));

