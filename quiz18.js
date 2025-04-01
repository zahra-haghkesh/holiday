/*
18. Write a function to check whether the first and last elements in an array of integers are the same..
Example ===>
[50, 20, 130, 50] = true
[50, 20, 130, 52] = false
*/
function elements(arr){
    if (arr[0]===arr[arr.length-1]){
        return true;
    }else {
        return false;
    }
}
console.log(elements([50, 20, 130, 50]));