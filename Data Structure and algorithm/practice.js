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