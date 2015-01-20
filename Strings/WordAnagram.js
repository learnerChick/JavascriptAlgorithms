/*
Given an array of words, print all anagrams together.
For example, if the given array is {“cat”, “dog”, “tac”, “god”, “act”},
then output may be “cat tac act dog god”.
o(n!)
 */

function getWordAnagram(str){
  var arr = str.split(" ");
  getWordPerms([], arr);
}

function getWordPerms(prefix, arr){
  if(arr.length <= 1){
    console.log(prefix.join(' ') + ' ' + arr[0]);
    return prefix.join(' ') + ' ' +  arr[0];
  }

  for(var i = 0; i < arr.length; i++){
    var current = arr[i];
    var before = arr.slice(0, i);
    var after = arr.slice(i+1);
    getWordPerms(prefix.concat(current), before.concat(after));
  }
}
