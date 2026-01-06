// Write a generic function wrapInArray that:
// 	•	takes one value
// 	•	returns an array containing that value
// 	•	keeps exact type

// Expected behavior:
// wrapInArray(5);        // number[]
// wrapInArray("hi");    // string[]


function wrapInArray<T>(value: T) :T[]{
  return [value];
}
console.log(wrapInArray(5));
console.log(wrapInArray('Deng'));

//so l created a function wrapInArray with a generic type because we expect any input but want to preserve the input type (type safety)
//the return type is an array of that value regardly of the type because ts inferrs its type from the input 