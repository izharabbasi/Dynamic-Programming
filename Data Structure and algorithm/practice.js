function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    let total = 0;
    for (let i=0; i < marks.length; i ++){
      total += marks[i];
    }
    console.log(marks.length);
    let avg = total / marks.length;
    
      return avg
    
  }


console.log(getAverage([1,2,3,4,5,]));


function divisibleByLast(n) {
    // TODO
    const newArray = [];
    let values = 1;
    for (i=values ; i <= n.length; i++){
      if(values[i] / n[i]){
          newArray.push(true)
      } else {
        newArray.push(true)
      }
    }
    return newArray;
  }

console.log(divisibleByLast(1337));


function sortedArray(arr1, arr2){
  let newArray = []
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 1;
  let j = 1;

  while(item1 || item2){
    if(!item2 || item1 < item2){
      newArray.push(item1);
      item1 = arr1[i]
      i++

    } else {
      newArray.push(item2)
      item2 = arr2[j]
      j++
      
    }
  }
  return newArray;
  
}

console.log(sortedArray([0,3,4,31],[4,6,30]));