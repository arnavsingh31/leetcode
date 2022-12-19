/**
    Question:

    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.

    Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Constraints:

    1 <= nums.length <= 3 * 10^4
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// use two pointer approach.
var removeDuplicates = function(nums) {
    var count = 1;
    var unique_pos = 1;

    for(let curr_pos=1; curr_pos< nums.length;curr_pos++){
        if (nums[curr_pos] !== nums[curr_pos-1]) {
            nums[unique_pos] = nums[curr_pos];
            unique_pos += 1;
            count +=1;
        }
    }
    return count;
    
};

/**
    [1,1,2,2,3,3,3,4]
    [1,2,3,4,----] and count
    curr_pos =1 unique_pos=1-->
        value at curr_pos(1) and before that (1) are equal so no insertion
    curr_pos =2 unique_pos=1-->
        value are different so we insert value at index 2 into unique_pos and inc unique pos
        [1,2,2,2,3,3,3,4]
    curr_pos =3 unique_pos=2-->
        value at curr_pos(2) and before that (2) are equal so no insertion
    curr_pos =4 unique_pos=2-->
        value different so we insert and inc unique pos
        [1,2,3,2,3,3,3,4]
    curr_pos =5 unique_pos=3-->.....so on
 */