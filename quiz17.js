/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/
function whether(arr){
    if(arr.include(4)||arr.include(6)){
        return true
    }else {
       return false
    }
}
console.log(whether([9,6]));