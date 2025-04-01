/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/
function letter (alfa){
    let num = null ;
    let str = "" ;
    for (let i of alfa){
        let num =0 ;
        for (let j of alfa){
            if (i===j){
                num +=1;
            }
        }
        if (num <=1){
            str += i
        }
    }
    return str;
}
console.log(letter("hellooo"));