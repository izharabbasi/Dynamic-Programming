// function highAndLow(numbers) {
//   // ...
//     numbers = numbers.split(' ');
//     return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function descendingOrder(n){
//     let numbers = n.toString().split('');
//     return [...numbers].sort((a,b) => b-a).join('');

// }

// console.log(descendingOrder(123456789));

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     const newArray =[];
//     for(let i =0; i < l.length; i++){
//         if(typeof(l[i]) === 'number'){
//             newArray.push(l[i])
//         }
//     }
//     return newArray;
// }

// console.log(filter_list([1,2,'a','b']));
// console.log(filter_list([1,2,'aasf','1','123',123]));

// function findShort(s){
//     var arr = s.split(' ');
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if(arr[i].length < smallest.length){
//         smallest = arr[i];
//       }
//     }
//     return smallest.length;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function sumTwoSmallestNumbers(numbers) {
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];

// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// function longest(words) {
//   // your code
//     return words.reduce((a,word) => {
//         return Math.max(a, word.length)
//     }, 0)
// }

// console.log(longest(["simple", "is", "better", "than", "complex"]));


// function XO(str) {
//     //code here
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x.length) === (o.length);
// }

// console.log(XO("xxOo"));

// function friend(friends){
//     //your code here
//     const newArray = [];
//     for(let i=0 ; i< friends.length; i++){
//         if(friends[i].length === 4){
//             newArray.push(friends[i])
//         }
//     }
//     return newArray;
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));

// function solution(str, ending){
//     // TODO: complete
//     return str.endsWith(ending)
    
// }

// console.log(solution('abcde', 'cde'));


// function removeSmallest(numbers) {
//     const min = Math.min.apply(this, numbers);
//     return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

// console.log(removeSmallest([5, 3, 2, 1, 4]));


// function reverseWords(str) {
//     let newStr = '';
//     for(let i= str.length -1 ; i >= 0 ; i--){
//         newStr += str[i]
//     }
//     return newStr.split(' ').reverse().join(' ')
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// function stray(numbers) {
//     for(let i =0; i < numbers.length ; i++){
//         for(let j = i + 1; j < numbers.length ; j++){
//             if(numbers[i] != numbers[j]){
//                 return numbers[j]
//             }
//         }
//     }
// }

// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// var capitals = function (word) {
//     const arr = word.split('');
//     return arr.filter((item , index) => {
//         if(item === item.toUpperCase()){
//             return item
//         }
//     })
// };

// console.log(capitals('CodEWaRs'));

// function indexOfCapitals(word){
//     const arr = [];
//     for(let i =0; i< word.length; i++){
//         if(word[i] === word[i].toUpperCase()){
//             arr.push(i)
//         }
//     }
//     return arr;
// }

// console.log(indexOfCapitals('CodEWaRs'))

// function accum(s) {
//     // your code
//     let result = '';
//     for(let i =0; i < s.length ; i++){
//         for(let j =0; j < i + 1 ; j++){
//             if(j == 0){
//                 result += s[i].toUpperCase()
//             } else {
//                 result += s[i].toLowerCase()
//             }
//         }
//         if(i != s.length -1){
//             result += '-'
//         }
//     }
//     return result;
// }



// console.log(accum("ZpglnRxqenU"));

// function generatePairs(n) {
//     const newArray = [];
//     for(let i =0; i <=n ; i++){
//         for(let j = i; j <=n ; j++){
//             newArray.push([i,j])
//         }
//     }
//     return newArray;
// }

// console.log(generatePairs(2));


// function XO(str) {
//     let xCount = 0;
//     let oCount = 0;

//     for(let i=0 ; i<str.length; i++){
//         if(str[i].match(/x/i)){
//             xCount++;
//         } else if(str[i].match(/o/i)){
//             oCount++
//         }
//     }
//     if (xCount === oCount){
//         return true
//     }
//     return false;
// }

// console.log(XO("xxOo"));
// console.log(XO("xxxm"));

// function divisibleByLast(n) {
//     n = String(n);
//     const result = [];
//     for(let i = 0; i<n.length; i++){
//             result.push(n[i] % n[i-1] ===0)
//     }
//     return result
// }

// console.log(divisibleByLast(73312));

// function getProductId(url){
//     //your code here
//     return url.split("-").reverse()[1];
// }

// console.log(getProductId("http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html"));

function task(w, n, c) {
    const cost = c * n;
    if(w === 'Monday'){
        return `It is ${w} today, James, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
    }
    else if(w === 'Tuesday'){
        return `It is ${w} today, Jhon, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
    }
    else if(w === 'Wednesday'){
        return `It is ${w} today, Robert, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
    }
    else if(w === 'Thursday'){
        return `It is ${w} today, Michael, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
    }
    else if(w === 'Friday'){
        return `It is ${w} today, William, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
    }
    
}

console.log(task('Tuesday',6,1));
