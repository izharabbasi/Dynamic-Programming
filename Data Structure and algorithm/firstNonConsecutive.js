function firstNonConsecutive (arr) {
    for (var i = 1; i < arr.length; i++) {
      var cur = arr[i];
      var prev = arr[i-1];
      
      if (cur - prev > 1) {
        return cur;
      }
    }
    return null;
  }


console.log(firstNonConsecutive([1,2,3,4,5,7,8]));
