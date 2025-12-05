- What are the main features introduced in ES6?

let - re-asssigning but not redeclearing

const - not reassigned and no redecleared it stored a value that will never change

arrow function - shorter function creation syntax, cannot be binded with this and a lexical bond

modules - use export and implorts to split codes into a reusable file

enhanced object literals - shorthand for defining object literals and method so codes are more reusable and less verbuse

template literals - using backtick that support multiline codes and function expression inside

- Write an arrow function that takes two numbers and returns their sum.

```jsx
const sum = function(num1, num2) => a+b;
console.log(sum(5, 2));
```

- What is destructuring in ES6, and how can it be used with arrays and objects? Can you destructure nested objects? Provide an example.

Destructuring is a feature introduced in ES6 that allows you to **unpack values from arrays or properties from objects into individual variables**. It makes your code shorter and easier to read.

- What is the purpose of the `spread` operator in ES6, and how is it different from the `rest` operator?

spread operator - Expands (spreads) elements of an array or object into individual items.

rest operator - Collects remaining arguments into an array (the opposite of spread).

- How can you use the `Set` object in ES6, and what are its benefits?

It is a **collection of unique values** (no duplicates allowed).

- What is the significance of the `this` keyword in ES6 arrow functions?

Arrow functions **do not have their own this**.

They **lexically inherit this** from the surrounding scope (the context where the arrow function was defined).

Regular functions have their own this, which can change depending on how the function is called.

- Explain how the `import` and `export` statements work in ES6 modules.

exports - used to make variables, functions or classes available outside of a module

imports - used to bring exported codes from another file into the current file

- How do template literals improve string manipulation in JavaScript?
- What is the purpose of the `default` parameter in ES6 functions? How do default parameters interact with rest parameters?
- Explain how the `map()` function works in ES6.
- map() is a **higher-order array method**.
- It **iterates** over each element of an array.
- It applies a **callback function** to every element.
- It always returns a **new array**
- What is the difference between `for...of` and `for...in` loops in JavaScript?
- I. Provide a practical example of using `for...of` to iterate over an array.
- II. Provide an example of using `for...in` to iterate over the properties of an object.
- III. Can you use `for...of` with objects? Why or why not?
- Explain how `Object.assign()` works in ES6.