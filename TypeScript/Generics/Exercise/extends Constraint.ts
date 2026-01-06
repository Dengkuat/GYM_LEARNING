// bad practice
// function merge(a: object, b: object) {
//   return { ...a, ...b };
// }
// Your task:
// 	•	Use two generics
// 	•	Preserve full type information

function merge<T extends object, K extends object>(a:T, b:K): T&K{
  return {
      ...a,
      ...b
  }
}
const person = merge({name:'Deng'},{age:20})
console.log(person)
console.log(person.name)
console.log(person.age)

//so l use the generic type T and K since we have no idea on what type could be returned from the 2
//extends is a generic constraint 
//extends tell type that it should only match a specific type or rule

/*
Why do we use extends
- to prevent invalid usage 
- so the type guarge and type safety are still guarged

we can also use extends any type number, string just to safety return a value without guese work
*/