function wrapValue(value: string | number) {
  if (typeof value === "string") {
    return { value };
  }
  return value;
}

const a = wrapValue("hello");
const b = wrapValue(100);

if(typeof a === 'object') a.value.toUpperCase();
if(typeof b === 'number') b.toFixed(2);

// Your rules
// 	•	Do not use any
// 	•	Do not remove any lines
// 	•	Fix issues step by step
// 	•	Make it TypeScript-safe
// 	•	Make it runtime-safe

//we have a function a wrapValue with a parameter of a union type either a string or a number
//so later we narrow it so its a string return an object of the value
//else we return the value the way it is when its a number
//then if a is a string and b is a value
//so meaning this should work for a number not a string again the string value is wraped in an object meaning we need to access it first