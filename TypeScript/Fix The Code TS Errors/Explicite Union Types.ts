type Input = string|number|null;
function processInput(value:Input):Input {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}

const result1 = processInput("hello");
const result2 = processInput(42);
const result3 = processInput(null);

console.log(result1)
console.log(result2)
console.log(result3)

// Your task:
// 	1.	Make this TypeScript-safe
// 	2.	Fix all type problems
// 	3.	The function should:
// 	•	Work correctly for valid inputs
// 	•	Not crash at runtime
// 	4.	Do not use any
// 	5.	Do not remove any of the function calls

// You decide:
// 	•	what the function should accept
// 	•	what it should return
// 	•	how to handle invalid cases

//yap so we cannt use any that is correct 
//l will use generic because
//it takes in any type and return the type of the input (it inherits the type from the input )

//aparently generic didnt really work so we switched to using a union type
//so l defined the Input explicitly and gave it one of 3 inputs
//same as outputs 

//them used typenarrowing to make transoframtion on the String
//and return the other input as they are to be our outputs