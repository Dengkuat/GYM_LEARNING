Arrow function in this we will learn how to use the arrow function in javascrit to write more concise code for future expression

So instead of writing a function expression es6 gives us a new future called the arrow function as a high order function( function that takes another function as its paameter,or a function that returns another function) to make the code more short and reusable 

```jsx
let add = function (x, y) {
  return x + y;
};

console.log(add(10, 20)); // 30

// so instead of having a real function we can use the 
//arrow function to

let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;

//however if you use a blocked function, you need
//expliily use the return keyword 

let add = (x, y) => {
  return x + y;
};
//hence this is a funtion if we check the typeof

```

if an arrow function has two or more parameters, you will the the syntax below

example

to sort an array

```jsx
let numbers = [4, 2, 6];

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [6,4,2]

//then with the arrow function
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);

console.log(numbers); // [6,4,2]
```

javascript arrow function can also allow function with a single parameter its like this

```jsx
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);
```

it also allows function without a paameter at all

but if ur arrow function has no parameter then we will need to p

ut it in the { } a blocked function

```jsx
let logDoc = () => console.log(window.document);
logDoc();
```

NB: There cannot be a line break between the parameter definition and the arrow function

Javasript allows function and object literals

```jsx
let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"

//instead with the arrow function
let setColor = color => {value: color };
```

Hence in summary

- Use the `(...args) => expression;` to define an arrow function.
- Use the `(...args) => { statements }` to define an arrow function that has multiple statements.
- An arrow function doesn’t have its binding to `this` or `super`.
- An arrow function doesn’t have `arguments` object, `new.target` keyword, and `prototype` property.