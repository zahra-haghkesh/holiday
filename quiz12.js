/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/
function number(arr){
let largest = arr[0];
for (let i =0; i<arr.length ;i++){
    if (arr[i]%2===0 && largest<arr[i]){
        largest = arr[i] ;
    }
}
return largest ;
}
console.log(number([20, 40, 200, 301]));