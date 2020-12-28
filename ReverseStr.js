var str = "hello";
let reverseStr = str.split('').reverse().join('');

console.log(str);

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'thats not good';
    }

    const backward = [];
    let totalItem = str.length-1;

    for (let i = totalItem; i >= 0; i--){
        backward.push(str[i])
    }

    return backward.join('');
}

console.log(reverse('JavaScipt progamming'));