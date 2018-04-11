function countLetters(value) {
  var noSpace = value.split(" ").join("");
  var obj = {};
  for(var i = 0; i < noSpace.length; i++){
    var count = 0;
    for(var j = 0; j < noSpace.length; j++){
      if(noSpace.charAt(i) == noSpace.charAt(j)){
          count+=1;
      }
    }
        obj[noSpace[i]] = count;
  }

    return obj;
}


console.log(countLetters("lighthouse in the house"));