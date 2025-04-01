/*
2. Write a function that converts a 2D array into a 1D array.
Example ===> [[1, 2, 3], [4, 5, 6], [7, 8, 9]] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
// with .map()
let array =  [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newArray=[];
function name(arr){
    arr.map((i)=> i.map((j)=>newArray.push(j)))
}
name(array)
console.log(newArray);


/*
let num =  [[1, 2, 3], [4, 5, 6]]; */