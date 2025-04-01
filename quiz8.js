/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/
function number(str){
    str = String(str);
    for (let i of str){
        if (str[i]===str[0]){
            return true;
        }else {
            return false;
        }
    }
}
console.log(number(1795));