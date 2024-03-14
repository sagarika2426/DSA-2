// Declaring Array 
var arr = [];

// Array can store any data type
let Person = {
    name:"Sagarika",
    age: 24
}

// Putting data in Array 
var arr = ["Banana", "Mango", "Apple", Person]

// Accessing the element from the array
// console.log(arr[0]);
// console.log(arr[3].name)

// Length of the array
// console.log(arr.length)

// Add and Remove Elements from End
arr.push("cherry") //Add element in the end of the array
arr.pop() //Remove last element from the array

// Add and Remove Elements from top
arr.unshift("Kiwi") //Add element 
arr.shift(); //Remove Element
// console.log(arr);



// Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);   
}

let i = 0;
while (i<arr.length) {
    // console.log(arr[i]);
    i++   
}



// InBuilt Loop Methods
const num = [1,2,3,4]

// 1. Map
num.map((item, index, array) => {
    // console.log(item, index, array)
})
const newNum = num.map((item, index, array) => {
    return item+2;

});
// console.log(newNum)

// 2. Filter
const newNum2 = num.filter((item, index, array) => {
    return item>2;

});
// console.log(newNum2)

// 3. Reduce
const sum = num.reduce((prev, item) => {
    return prev+ item;
}, 0) //here default value  of prev is 0, whatever you put the value of prev is going to get added to item

// 4.Some
const res = num.some((item, index, array) => {
    return item>2;
    //if any item on the array is satisfying this condition it will return true
});
// console.log(res)

// 5.every
const res2 = num.every((item, index, array) => {
    return item>2;
    //if every element satisfies the condition then it will return true or else it will return false
});
// console.log(res2)

// 6. Find
 const res3 = num.find((item, index, array) => {
    return item>2;
    //it will return the 1st element which satisfies the condition
    //here in this case, it will return 3
});
// console.log(res3)




// Spread And Rest Operators

// Spread 
const num1 = [1,2,3]
const num2 = [4,5,6]
// if we want to add both the array and make it one
const finalNum = [num1, num2] //by doing this you will get 2 arrays in one single array
const finalNum2 = [...num1, ...num2];
// console.log(finalNum2)

// Rest 
function sum2(...numbers){ // if you dont put rest opertor, it will only take num1 as parameter
    return numbers;
}
// console.log(sum2(num1, num2, "Hello", 10)) // with rest you can take anything as param



// concat
const newArr = num.concat(num1, num2)
// console.log(newArr);

// Slice
var arr2 = ["Apple", "Banana", "Mango"]
const newArr2 = arr2.slice(0,2) //give the element 0,1
const newArr3 = arr2.slice(-2) //gives you last and 2nd last element
// console.log(newArr3)

// Splice
arr2.splice(1, 2, "Maggie")//starts from index 1, remove 2 elements (1,2) and replace with Maggie
// console.log(arr2)

// Fill
const dummy =[1,2,3,4,5]
dummy.fill(0)//Replace all the elements to 0
dummy.fill(0,2) //fron 2nd index replace every element to 0

// findIndex
var arr3 = [1,2,3,4,5]
const index = arr3.findIndex((i) => i===3 )
// console.log(index)

// Flat
 const flatEx =[1, [2,3], [[4,5],6]] // we want = [1,2,3,4,5,6]
 var flattenedArray = flatEx.flat(); // if you keep it empty it will flat only 1 level - [ 1, 2, 3, [ 4, 5 ], 6 ]
 flattenedArray = flatEx.flat(2); // [ 1, 2, 3, 4, 5, 6 ]
//  console.log(flattenedArray); 


//  Reverse
flattenedArray.reverse() 
// console.log(flattenedArray)

// Sort()
const unsorted = [5,2,3,6,1,4]
unsorted.sort( (a,b) => a-b); //Ascending 
console.log(unsorted)
unsorted.sort( (a,b) => b-a)//Decending
console.log(unsorted)

















