/**
    Question: Valid Mountain Array

    Given an array of integers arr, return true if and only if it is a valid mountain array.

    Recall that arr is a mountain array if and only if:

    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

    Input: arr = [2,1]
    Output: false   

    Input: arr = [3,5,5]
    Output: false

    Input: arr = [0,3,2,1]
    Output: true

    Constraints:

    1 <= arr.length <= 10^4
    0 <= arr[i] <= 10^4
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */


var validMountainArray = function(arr) {
    var max=arr[0],pos=0;
    
    for (let i=1; i<arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
            pos = i;
        }
    }

    var i= pos, j = pos;
    if (pos === 0 || pos === arr.length -1) return false;

    while( i > 0 && j < arr.length-1) {
        if((arr[i] > arr[i-1]) && (arr[j] > arr[j+1]) ){
            i-=1;
            j+=1;
        }else {
            return false;
        }
    }
    while (i > 0 ) {
        if(arr[i] > arr[i-1]) {
            i-=1;
        }else {
            return false;
        }
    }

    while (j < arr.length-1) {
        if(arr[j] > arr[j+1]){
            j+=1;
        }else {
            return false;
        }
    }

    return true;
};