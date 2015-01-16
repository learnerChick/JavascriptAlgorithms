function firstNonRepeatingChar(str){
  //use an array to hold the data since we want it ordered
  var allChars = [],
    charMap = {},
    singles = [],
    matchups = {};

  for(var i = 0; i < str.length; i++){
    var ch = str[i];

    if(ch === ' '){
      continue;
    }

    ch = ch.toLowerCase();

    allChars[i] = ch;
    if(typeof charMap[ch] === 'undefined'){
      charMap[ch] = 1;
    }
    else{
      charMap[ch] = charMap[ch] + 1;
    }
  }

  //check for ones that only has one
  for(i in charMap){
    if(charMap[i] === 1){
      singles.push(i);
    }
  }

  var lowest = Infinity;
  var lowestChar = str[0];

  for(var j = 0; j < singles.length; j++){
    var ch2 = singles[j];
    var pos = findPosition(ch2, allChars);
    if(pos < lowest){
      lowest = pos;
      lowestChar = ch2;
    }
  }
  return lowestChar;

}

function findPosition(ch, org){
  for(var i = 0; i < org.length; i++){
    if (org[i] === ch){
      return i;
    }
  }
}
