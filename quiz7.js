/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/
function elements (arr1,arr2){
    let num =0 ;
    for (let i of arr1){
        for (let j of arr2){
            if (i===j){
                num +=1;
            }
        }
    }
    return num ;
}
console.log(elements([1, 2, 3, 4], [1, 2, 3, 5]));