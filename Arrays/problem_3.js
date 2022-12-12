/* 
    Question:

    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]

    Constraints:

    * 1 <= nums.length <= 10^4
    * -10^4 <= nums[i] <= 10^4
    * nums is sorted in non-decreasing order.
    
    Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

var sortedSquares = function(nums) {
    return nums.map(x => x * x).sort((a,b) => a - b )
};

// alternate solution through counting sort algorithm
var sortedSquares = function(nums) {

//squaring
for(let i=0; i<nums.length; i++){
    nums[i] = nums[i]*nums[i];
  }
  //sorting
  var max = Math.max(...nums);
  var temp_arr = new Array(max+1).fill(0);
  var result_arr = new Array(nums.length);
  
  for(let i= 0; i<nums.length; i++){
    temp_arr[nums[i]] += 1;
  }
  
  for(let i=1; i<temp_arr.length;i++){
    temp_arr[i] += temp_arr[i-1];  
  }
  
  for(let i=0;i<nums.length;i++){
    result_arr[temp_arr[nums[i]]-1] = nums[i];
    temp_arr[nums[i]] -= 1;
  }
}