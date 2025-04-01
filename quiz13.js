/*
13. Write a function to check whether a given number is in a given range.
Example ===> 
(1,2,4) => 2 is between 1 and 4 ===> return ==> true
(1,2,-3) = 2 is not between 1 and -3 ===> return ==> false
*/
function whether (num1,num2,num3){
let largest = null;
let start = null ;
if (num1>num3){
    largest = num1;
    start = num3;
}else {
    largest = num3;
    start = num1;
}
for (let i =start ; i<= largest ; i++){
    if (num2==i){
        return true ;
    }
}
return false ;
}
console.log(whether(1,2,4));
console.log(whether(1,2,-3));