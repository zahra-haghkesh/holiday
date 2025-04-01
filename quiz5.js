/* 
5. Define a function that takes an array of numbers as its parameter. The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/
function data (arr){
    let length = arr.length;
    let smallest = arr [0];
    let largest = arr [0];
    let sum = 0;
    for (let i of arr){
        if (largest<i){
            largest=i;
        }else if (smallest>i){
            smallest=i;
        }
        sum += i;
    }
    return [length,smallest,largest,sum/length]
}
let complete = [7,4,1,2];
console.log(data(complete));