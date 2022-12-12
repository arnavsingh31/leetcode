/* 
    Question: 
    Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
    Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

    Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

    Input: arr = [1,2,3]
    Output: [1,2,3]
    Explanation: After calling your function, the input array is modified to: [1,2,3]

    Constraints:

    1 <= arr.length <= 10^4
    0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    var result_arr = [];
    var result_arr_length = 0;
    for(let i=0; i<arr.length; i++){
        if (result_arr_length === arr.length) break;
        
        result_arr.push(arr[i]);
        result_arr_length +=1;
        
        if(arr[i] === 0 && result_arr_length !== arr.length){
            result_arr.push(0);
            result_arr_length +=1;
        }
    }
    for(let i =0; i<result_arr.length;i++){
        arr[i] = result_arr[i];
    }
};