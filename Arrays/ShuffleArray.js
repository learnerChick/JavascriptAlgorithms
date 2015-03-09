//fisher yates algorithm

function shuffleArray(arr){
    var i = arr.length;
    if(i === 0){
        return false;
    }

    while(--i){
        //choose a random number between 0 and the current i
        var j = Math.floor(Math.random() * (i+1));
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    return arr;
}