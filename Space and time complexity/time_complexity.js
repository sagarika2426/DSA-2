const numbers = (array) => {
    for(let i = 0; i<array.length; i++){ // 4 operations
        if(i === 3) return array[i] //task 1 which will operate 4 times inclusing 0
    }
};
const nums = [1,2,3,4,5]
console.time("numbers");
console.log(numbers(nums))
console.timeEnd("numbers");
//time - 10 ms



const numbers2 = (array) => {
 return array[3] // 1 operations
};
const nums2 = [1,2,3,4,5]
console.time("numbers2");
console.log(numbers(nums2))
console.timeEnd("numbers2");
//time - 0.3ms


function someOps(n){
    return(n*(n+9)) / 3; // 3 operations
}
console.log(someOps(2));
//wheather it's 2 or 1000 it will take same time as it has 3 constant operations which doesnt depend on anything



//if it has constant operations like 3 - O(1)
// if the operation depends on n like the 1st example - O(n)


function printBoth(n){
    for(var i = 0; i<n; i++){ //n
        for(var j = 0; j<n; j++){ //n 
            console.log(i,j)
        }
    }
}

printBoth(3);
//time complexity - n^2 - O(n^2)


//o(1) < O(n) < O(n^2) = time complexity


