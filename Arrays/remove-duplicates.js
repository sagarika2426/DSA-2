// Q 3 - Remove duplicates from the sorted array
// given an interger array nums sorted in non-decreasing order, 
//remove the dupplicats in-place such that each unique element appears only once.

//The relative orde of the elements should be kept the same. Then return the number of unique elements in nums


function removeDuplicates(nums){
    if(nums.length === 0) {
        return 0;
    }
    let i = 0;
    for(let j = 0; j< nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] =  nums[j]
        }
    }
    return 1+i;

}
console.log(removeDuplicates([0,1,1,2,3,3,3,4,5]))

