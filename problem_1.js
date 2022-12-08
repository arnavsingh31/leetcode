/*
    Question:

    Given a binary array nums, return the maximum number of consecutive 1's in the array.
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

    Input: nums = [1,0,1,1,0,1]
    Output: 2

    Constraints:
    1 <= nums.length <= 10^5
    nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    var max = 0;
    var count = 0;
    
    for(let i=0; i < nums.length; i++){
        if (nums[i] == 1) {
            count += 1;
            max = count > max ? count : max;
        }
        else if (nums[i] == 0) {
            max = count > max ? count : max;
            count = 0;
        }
    }
    return max
};