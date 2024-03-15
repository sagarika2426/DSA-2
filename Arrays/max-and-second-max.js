// Q 1 - Second Largest Number
// Given an array Arr of size N, print second Largest distint element from an Array

// input: [12,35,2,10,1,32] ----> output: 32
//input: [10,2,3,10] ----> output: 3

// Approch:
// 1. Find all unique numbers by using set, convert it to array and sort it in decending order
// 2. Get the 2nd element - you will get 2nd lasrgest num

//1
function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr)); //O(n)
    uniqueArr.sort((a,b) =>{
        return b-a;
    });
    if(uniqueArr.length >= 2){ // O(nlog)
        return uniqueArr[1];
    }
    else{
        return -1;
    }
}

console.log(secondLargest([12,35,2,10,1,32]))
// Time complexity : O(nlog)


//2 - Optimised
function secondLargestOptimised(arr){
    let Largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for(let i = 0; i<arr.length; i++){ //O(n)
        if(arr[i] >Largest){
            secondLargest = Largest;
            Largest = arr[i];

        }
        else if( arr[i != Largest && arr[i] > secondLargest] ){
            secondLargest= arr[i];
        }

    }
    return secondLargest;

}
console.log(secondLargest([12,35,2,10,1,32]))

