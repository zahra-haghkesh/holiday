/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = azaraaaam
*/
// function sentence (sen){
//     let count = null ;
//     let longest = 0 ;
//     let word = "";
//     for(let i of sen){
//     if (i!==" "){
//         count += 1;
//         word += i;
//     }else if(longest<count){
//       longest = count ;
//       count=0;
//       word ="";

//     }else {
//         count = 0;
//         word =   "";
//     }
//     }
//     return word;
// }
// console.log(sentence("kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam"));


function sentence(str){
    let array = str.split(" ");
    let longest = array [0] ;
    for ( let i of array){
        if (longest.length < i.length){
            longest = i ;
        }
    }
    return longest ;
}
console.log(sentence("kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam"));