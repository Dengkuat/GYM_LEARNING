Definiton; They let u gather the remaining argument into an array

**so we use it when we dont know** 

- dont know how many arguments are passed
- when we want a new and clean alternative to the old argument object

Basic use

we use it to collect tremaining arguments into an array 

```jsx
function printAll(...items) {
console.log(items);
}
```

```jsx
printAll("a", "b", "c");
// Output: ["a", "b", "c"]
```

Syntax rule

Only one rest prameter can be used per function

it has to be the last parameter

```jsx
function test(a, b, ...rest) {}

❌ Invalid:

function test(...rest, a, b) {} // SyntaxError

```

Real use cases

1. flexible function

```jsx
function sum(...nums) {
return nums.reduce((acc, val) => acc + val, 0);
}
```

```jsx
sum(1, 2, 3); // 6
```

1. Logging unknown number of arguments

```jsx
function logger(...args) {
args.forEach(arg => console.log(arg));
}
```

1. Mixing named and rest parameters

```jsx
function greet(greeting, ...names) {
console.log(${greeting}, ${names.join(" & ")});
}
```

```jsx
greet("Hi", "Deng", "Alex", "John");
// Output: Hi, Deng & Alex & John
```

1. Difference between the rest and argument

| feature |                 ...rest |                    arguments |
| --- | --- | --- |
| type | Real array | Array like object |
| method | can use array methods  | Coverted first to array |
| behavior in arrow function | yes they do  | cannot |

```jsx
function oldWay() {
console.log(arguments); // Not a real array
}
```

```jsx
const newWay = (...args) => {
console.log(args); // Real array
};
```

1. Rest in Destructuring

Array

```jsx
const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]
```

Objects

```jsx
const user = { name: "Deng", age: 20, country: "South Sudan" };
const { name, ...otherInfo } = user;
// name = "Deng", otherInfo = { age: 20, country: "South Sudan" }
```

How they are unsefull in destructuring 

- they separate what we need from what we donot need
- searate known and unkown data
1. Common mistakes

```jsx
function bad(...a, ...b) {} // ❌ Only one rest param allowed
function wrong(...args, lastArg) {} // ❌ Rest must be last
```

Interview like questions 

1. What is a rest parameter in es6, and how does it difffer from arguments

The rest parameter (...rest) allows a function to accept an indefinite number of arguments as an **array**. Unlike arguments, which is array-like, the rest parameter creates a **real array** and works in **arrow functions** too.

1. **Rewrite the following function using rest parameters instead of arguments**

```jsx
function total() {
return Array.from(arguments).reduce((a, b) => a + b, 0);
}

function total(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

  **3.  What happens if you place a rest parameter before a regular parameter in a function declaration**

It throws a syntax error. **Rest parameters must always come last** in the parameter list.

1. **Can you use more than one rest parameter in a function? Why or why not**

No, a function can only have **one rest parameter**, and it must be the **last**. This is to avoid ambiguity in how arguments are collected.

1. **In what ways can the rest parameter improve code readability or flexibility**

• It avoids manual use of arguments

• Allows writing **clean, flexible, variadic functions**

• Improves readability and supports modern patterns like destructuring