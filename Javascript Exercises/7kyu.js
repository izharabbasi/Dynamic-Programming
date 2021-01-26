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

// function mathEngine(arr) {
//     if(arr === null){
//         return 0
//     }

//     let nSum = 0;
//     return arr.find((item) => {
//         if(item < 0){
//             nSum += item
//             return nSum
//         }
//     })
    
// }

// console.log(mathEngine([1, 2, 3, -4, -5]));


// function range(startNum, endNum)   {  
//     //code goes in here
//     const arr = [];
//     for(let i = startNum + 1; i< endNum; i++){
//         arr.push(i)
//     }
//     return arr;
// };  

// console.log(range(2,9));

// function onesComplement(n) {
//     // your code here
//     n = n.toString().split('');
//     let str = ''
//     for(let i = 0; i < n.length; i++){
//         if(n[i] === "0"){
//             str += '1'
//         }
//         else {
//             str +="0"
//         }
//     }
//     return str;
// }

// console.log(onesComplement(1001));

//String.fromCharCode(str.charCodeAt(0) - 1)

// var input = "Hello";
// var result = ""
// for(var i=0;i<input.length;i++)
// {
//     var curr = String.fromCharCode(input.charCodeAt(i)+1);
//     result = result +curr;
// }
// console.log(result);

// function solution(string,limit){
//     return string.substring(0,limit) + '...'
// }

// console.log(solution('Testing String', 8));

// function digitSum (str) {
//     //Your code goes here
//     let newStr = 0;
//     for(let i =0 ;  i < str.length; i++){
//         newStr += Number(str[i]);
//     }
//     return String(newStr).substring(0,1);
// }

// console.log(digitSum('2468'));


// function oddOrEven(array) {
//     //enter code here
//     let sum = 0;
//     for(let i=0; i< array.length; i++){
//         sum += array[i];
//     }
//     return sum % 2 === 0 ? 'even' : 'odd'
// }

// console.log(oddOrEven([0, 1, 5]));

// function arithmetic(a, b, operator){
//     //your code here!
//     switch(operator){
//         case 'add':
//             return a + b;
//         case 'subtract':
//             return a - b;
//         case 'multiply':
//             return a * b;
//         case 'divide':
//             return a / b;
//     }
// }

// console.log(arithmetic(1, 2, "add"));

// function sumDigits(number) {

//     var values = String(Math.abs(number)).split("");
//     var product = 0;

//     for (var i = 0; i < values.length; i++) {
//         product += Number(values[i]);
//     }
//     return product;
    
// }

// console.log(sumDigits(-32));

// function noOdds( values ){
//     // Return all non-odd values
//     const newArray = [];
//     values.forEach(element => {
//         if(element % 2 === 0){
//             newArray.push(element)
//         }
//     });
//     return newArray;
// }

// console.log(noOdds([0,1,2,3]));

// function solution(nums){
//     return nums.sort((a,b) => a - b)
// }

// console.log(solution([1, 2, 10, 50, 5]));

// function removeDuplicateWords (s) {
//     // your perfect code...
//     s = s.split(' ')
//     const arr = [];
//     for(let i = 0 ; i < s.length; i++){
//         if(!arr.includes(s[i])){
//             arr.push(s[i])
//         }
//     }
//     return arr.join(' ');
// }

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

// function capitalize(s){
//     let newarr1 = [];
//     let newarr2 = [];
//     s = s.split('');
//     s.filter((item, index) => {
//         if(index % 2 === 0){
//             let uItem = item.toUpperCase();
//             newarr1.push(uItem)
//         } else {
//             newarr1.push(item)
//         }
//     })

//     s.filter((item, index) => {
//         if(index % 2 !== 0){
//             let uItem = item.toUpperCase();
//             newarr2.push(uItem)
//         } else {
//             newarr2.push(item)
//         }
        
//     })
//     let aa = newarr1.join('');
//     let bb = newarr2.join('');

//     return [aa, bb]
// };

// console.log(capitalize("abcdef"));


// var gimme = function (inputArray) {
//     var order = inputArray.sort(function(a,b) { return a-b;});
//     console.log(order);
//     return inputArray.indexOf(order[2]);

// };

// console.log(gimme([2, 3, 1]));


// function minValue(values){
//     //your code here
//     const arr = []
//     let ort = values.sort((a,b) => a-b);
//     for(let i =0; i < ort.length; i++){
//         if(!arr.includes(ort[i])){
//             arr.push(ort[i])
//         }
//     }
//     let arr1 = arr.join('');
//     let results = Number(arr1);
//     return results
// }

// console.log(minValue([4, 7, 5, 7]));

// function twoOldestAges(ages){
//     let ort = ages.sort((a,b) => b - a);
//     return [ ort[1] , ort [0] ]
// }

// console.log(twoOldestAges([1, 2, 10, 8]));

// function sumOfMinimums(arr) {
//     // your code here
//     let total = 0;
//     for(let i =0 ; i < arr.length; i++){
//         total += Math.min(...arr[i])
//     }
//     return total;
// }

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

// function findUniq(arr) {
//     // do magic
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let res = arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]);
//         result.push(res)
//     }
//     console.log(result.indexOf(true));
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// function findUniq(arr) {
//     return arr.filter(l => {
//         return arr.indexOf(l) === arr.lastIndexOf(l)
//     })[0]
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// function dontGiveMeFive(start, end){
//     const res = [];
//     for(let i = start; i <= end; i++){
//         if(!i.toString().includes('5')){
//             res.push(i)
//         }
//     }
//     return res;
// }

// console.log(dontGiveMeFive(4,17));

// const sequenceSum = (begin, end, step) => {
//     // May the Force be with you
//     let res = 0;
//     if( begin > end){
//         return 0
//     }
//     for(let i = begin; i <= end; i+=step){
//         res += i
//     }
//     return res;
// };

// console.log(sequenceSum(2, 6, 2));

// function capitalize(s,arr){
//     s = s.split('');
//     for(let i = 0; i < s.length; i++){
//         for(let j =0; j < arr.length; j++){
//             if(i === arr[j]){
//                 s[i] = s[i].toUpperCase();
//             }
//         }
//     }
//     return s.join('')
// };

// console.log(capitalize("abcdef",[1,2,5]));

// function solve(arr){
//     //..
//     const array = [];
//     for(let i =0; i < arr.length; i++){
//         if(!array.includes(arr[i])){
//             array.push(arr[i])
//         }
//     }
//     return array
// }

// console.log(solve([3,4,4,3,6,3]));

// function flattenAndSort(array) {
//     // Good luck, brave code warrior
//     return [].concat(...array).sort((a,b) => a - b)
// }

// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));

// function rowWeights(array){
//     //your code here
//     let res1 = 0;
//     let res2 = 0;
//     for(let i = 0 ; i < array.length; i++){
//         if(i % 2 === 0){
//             res1 += array[i];
//         } else if ((i % 2 !== 0)) {
//             res2 += array[i];
//         }
//     }
//     const newArray = [res1, res2];
//     return newArray;
// }

// console.log(rowWeights([100,51,50,100]));

// function maxNumber(n){
//     //your code here
//     n = n.toString().split('');
//     const res = n.sort((a,b) => b -a );

//     const arr = []
//     for(let i =0; i < res.length; i++){
//         arr.push(Number(res[i]))
//     }
//     let result = arr.join('');
//     return Number(result)
// }

// console.log(maxNumber(213));


// function reverseWords(str) {
//     // Go for it
//     var rev = '';
//     for(let i = str.length - 1; i  >= 0 ; i--){
//         rev += str[i]
//     }
//     return rev.split(" ").reverse().join(' ')
// }


// console.log(reverseWords('double  spaced  words'));

// function dontGiveMeFive(start, end){
//     let res = [];
//     for(let i = start; i <= end; i++){
//         if(!i.toString().split('').includes('5')){
//             res.push(i)
//         }
//     }
//     return res.length
// }


// console.log(dontGiveMeFive(4,17));

// function sortByLength (array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     return array.sort((a,b) => a.length - b.length);
// }

// console.log(sortByLength(["Beg", "Life", "I", "To"]));


// function inAscOrder(arr) {
//     // Code your algorithm here :)
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] > arr[i + 1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(inAscOrder([1,6,10,18,2,4,20]));

// function isSortedAndHow(array) {
//     for(let i =0; i < array.length; i++){
//         if(array[i] < array[i + 1]){
//             return "yes, ascending"
//         }
//         else if (array[i] > array[i + 1]){
//             return "yes, descending"
//         } 
//         else if(array[i] > array[i + 2] || array[i] < array[i + 2]) {
//             return "no"
//         }
//     }
// }

// console.log(isSortedAndHow([1, 2]));

// function numberOfOccurrences(q){
//     var arr = [0, 1, 2, 2, 3]
//     let count = 0;
//     for (let i =0; i < arr.length; i++){
//         if(arr[i] === q){
//             count++
//         }
//     }
//     return count

// }

// console.log(numberOfOccurrences(4));

function repeats(arr){
    let n = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((v) => v == arr[i]).length != 2) {
      n.push(arr[i]);
    }
  }
  return n[0]+n[1]
}

console.log(repeats([4,5,7,5,4,8]));