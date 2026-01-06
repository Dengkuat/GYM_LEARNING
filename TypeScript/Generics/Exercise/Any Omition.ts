// starter code 
// function firstElement(arr: any[]) {
//   return arr[0];
// }
// Rewrite this using generics so:
// 	•	no any
// 	•	return type matches array element type

function firstElement<T>(arr: T[]){
  return arr[0];
}
console.log(firstElement([1, 2, 3]));    
console.log(firstElement(["Deng", "Kuat"]));
console.log(firstElement([true, false]));  


//explanation
//1. we create a generic type T that can be inferred to the input type instead of using any
//2. so the array type return will be an the first item from any array regardless of the type
//ts will get use the inferred type from the input so the input should be similar to the output typewise
//so l use generics T[] so the function accepts an array of any type and returns the same element type ensuring type safety

