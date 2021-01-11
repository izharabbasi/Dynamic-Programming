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

// function task(w, n, c) {
//     const cost = c * n;
//     if(w === 'Monday'){
//         return `It is ${w} today, James, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
//     }
//     else if(w === 'Tuesday'){
//         return `It is ${w} today, Jhon, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
//     }
//     else if(w === 'Wednesday'){
//         return `It is ${w} today, Robert, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
//     }
//     else if(w === 'Thursday'){
//         return `It is ${w} today, Michael, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
//     }
//     else if(w === 'Friday'){
//         return `It is ${w} today, William, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`
//     }
    
// }

// console.log(task('Tuesday',6,1));

// const rotateToMax = n => {
//     n = n.toString().split('');
//     let result = n.sort((a, b) =>  b - a).join('');
//     return Number(result)

// }

// console.log(rotateToMax(786));

// function createArrayOfTiers(num) {
//     let stamp = String(num)
//     let tiers = []

//     for (let index = 0; index < stamp.length; index += 1) {
//         tiers.push(stamp.slice(0, index + 1))
//     }
//   return tiers
// }

// console.log(createArrayOfTiers(420));


// function largest(n,xs){
//     // Find the n highest elements in a list
//     return xs.sort((a,b) => a -b).slice(-n)

// }

// console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]));

// function uniqueNumbers(numbersArray) {
//     //you must return unique numbers array
//     const newArray = [];
//     for(let i =0; i< numbersArray.length; i++){
//         if(!newArray.includes(numbersArray[i])){
//             newArray.push(numbersArray[i])
//         }
//     }
//     return newArray;
// }

// console.log(uniqueNumbers([1,2,3,1]));

// function fizzBuzz(n) {
//     // Write your code here
//     const newArr = []
//     for(let i = 1; i<=n ; i++){
//         if( i % 3 === 0){
//             newArr.push('Fizz')
//         }
//         if(i % 5 === 0){
//             newArr.push("Buzz")
//         }
//         if(i % 3 === 0 && i % 5 === 0){
//             newArr.push('FizzBuzz')
//         } 
        
//     }
//     return newArr.join(' ');

// }

// console.log(fizzBuzz(15));

// for(i = 0; i <= 20; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//     console.log("fizzBuzz");
//     }else if(i % 3 == 0){
//     console.log("fizz");
//     }else if(i % 5 == 0){
//     console.log("buzz");
//     }else{
//     console.log(i);
//     };
    
// };

// function divisibleByLast(n) {
//     const newArray = [];
//     n = n.toString().split('')
//     for(let i = 0; i < n.length ; i++){
//         newArray.push((n[i] % n[i-1] === 0))
//     }
//     return newArray;
// }

// console.log(divisibleByLast(73312));


// function uniqueNumbers(numbersArray) {
//     const newArray = [];
//     for(let i =0 ; i<numbersArray.length; i++){
//         if(!newArray.includes(numbersArray[i])){
//             newArray.push(numbersArray[i]);
//         }
//     }
//     return newArray;
// }

// console.log(uniqueNumbers([1,2,3,1]));

// function openOrSenior(data){
//     const arr = []
//     for(let i = 0; i< data.length; i++){
//         if(data[i][0] >= 55 && data[i][1]>= 7){
//             arr.push("Senior")
//         }
//         else {
//             arr.push('Open')
//         }
//     }
//     return arr;

// }

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
// function maskify(cc) {
//     cc = cc.split('');
//     for(let i =0; i < cc.length-4; i++){
//         cc[i] ="#"
//     }
//     cc = cc.join("")
//     return cc

// }
// console.log(maskify('4556364607935616'));

// function isIsogram(str){
//     str = str.split('');
//     for(let i =0 ; i < str.length; i++){
//         for(let j = i + 1 ; j < str.length ; j++){
//             if(str[i] === str[j]){
//                 return false
//             }
//         }
//         }
    
//     return true
// }

// console.log(isIsogram("aba"));

// function minMax(arr){
//     const array = [];
//     array.push(Math.min(...arr))
//     array.push(Math.max(...arr))
//     return array;
// }

// console.log(minMax([1,2,3,4,5]));


// function getCount(str) {
//     var vowelsCount = 0;
//     const newString = str.split('');
    
//     for (let i = 0; i <  newString.length; i++){
//         let x = newString[i];
//         if(x === 'a' | x === 'e' | x === 'i' | x === 'o' | x === 'u'){
//             vowelsCount++
//         }
//     }
//     return vowelsCount;
// }

// console.log(getCount("abracadabra"));


// function smaller(nums) {
//     //code me
//     const arr = [];
//     for(let i =0; i< nums.length; i++){
//             arr.push(nums[i] -1);
//     }
//     return arr;
// }

// console.log(smaller([5, 4, 3, 2, 1]));

function mathEngine(arr) {
    if(arr === null){
        return 0
    }

    let nSum = 0;
    return arr.find((item) => {
        if(item < 0){
            nSum += item
            return nSum
        }
    })
    
}

console.log(mathEngine([1, 2, 3, -4, -5]));

