//Space Complexity

function sumnum (arr){
    var sum = 0
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index]        
    }
    return sum;
}
var num = [1,2,3,4]
console.log(sumnum(num));
//space complexity - O(1) - as it is returning a single number

//boolen, num, undefined, null => constant
//string, arrays, object => dynamic



const sumnum2 = (arr) => {
    const newarr2 = []
    for (let index = 0; index < arr; index++) {
        newarr2.push(index *3)        
    }
    return newarr2
}
console.log(sumnum2(4));