//Q 2 - Rotate Array by K
//Given an integer array nums, roatate the array to the right by k steps
//where k is non-negative

//Input: nums = [1,2,3,4,5,6]  k = 3 -----> output: [4,5,6,1,2,3]

//Explanation
//Rotation 1 - [6,1,2,3,4,5]
//Rotation 2 - [5,6,1,2,3,4]
//Rotation 3 - [4,5,6,1,2,3]

function rotateArray(nums, k){
    let size = nums.length;

    if(size < k) {//If k = 7 and size = 6, then k % size will give 1. So effectively, you only need to rotate the array by 1 step
        k = k % size; //7%6 =1
    }
    const rotated = nums.splice(size-k, k);
    console.log(rotated)
    nums.unshift(...rotated)
    return nums;
}

console.log(rotateArray([1,2,3,4,5,6], 2));