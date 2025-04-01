/*

1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i=0; i<word.length;i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("zahra"));