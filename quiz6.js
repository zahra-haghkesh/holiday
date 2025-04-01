/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/
function sum(str){
    let sum =0;
    for (let i of str){
        if (!isNaN(parseInt(i))){
            sum += parseInt(i);
        }
    }
    return sum;
}
let number = "adfr7s873ugdg8tr989";
console.log(sum(number));