// Create a generic function lastItem that:
// 	•	takes an array
// 	•	returns the last element
// 	•	returns undefined if array is empty

function lastItem<T>(array: T[]): T|undefined {
  return array[array.length - 1];
  // or
  // return array.pop()
}
console.log(lastItem([1, 2, 3]))
console.log(lastItem(['deng', 'kuat']))

//so l create a function that takes in an array of T[] T is our generic inferred to by the input so no ServiceWorkerRegistration
//l want to return the last value from an array meaning l shall have to get the last indexed value
//lastely our return type is eiter lastItem or undefined at all if the array is empty