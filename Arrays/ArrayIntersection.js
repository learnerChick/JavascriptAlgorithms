/* O(m+n) */

function intersection(arr1, arr2){
    var i = 0,
        j = 0,
        m = arr1.length,
        n = arr2.length,
        arr = [];

    while(i < m && j < n){
        if(arr1[i] < arr2[j]){
            i++;
        }
        else if(arr1[j] < arr2[i]){
            j++;
            }
        else if(arr1[i] === arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
    }
    console.log(arr);
    return arr;
}


