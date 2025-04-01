/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/
function number (arr){
    arr= String(arr);
    let count =0 ;
    for (let i of arr){
        if (parseInt(i)%2===0){
            count +=1 ;
        }
    }
    return count ;
}
console.log(number(545));