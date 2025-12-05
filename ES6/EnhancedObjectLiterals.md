by defininition  this is a shorthand syntax that was brough up in es6 that makes objects creation more expressive and less repetitve

**So why this new feature**

- they reduce redunancy
- they are essential in defining config objects, react components and state management
- they are fequently used in functional programming patter such as reducers, dynamic key/value logic

**What is acctually enhanced**

so it added 3 main ehnancment

1. Property shorthand

if the keyname and the variable name are the same then we can just write onl the name once
no need to make it twice again after it was decleared outside the object

```jsx
 { name } instead of { name: name }
 
 //code example 
 let name = "Deng";
let age = 20;

// Normal (ES5)
let student1 = {
  name: name,
  age: age
};

// Shorthand (ES6)
let student2 = {
  name,
  age
};

```

So we use this when we are;

returning or exorting objects with local variable

great for redux actions, props and config files

 Property shorthand only works when the variable name and the object key are exactly the same. If they differ, you must use the full syntax.

```jsx
let myName = "Deng";
let obj = {
name: myName // ❌ You can't use shorthand here unless variable is also called name
};
```

1. Method shorthand

Es6 allows u to define methods in objects without using the function keyword

```jsx
before es6
const person = {
  greet: function() {
    console.log("Hello!");
  }
};

after es6
const person = {
  greet() {
    console.log("Hello!");
  }
};

so here the results are the same only that the new shorthand for es6 is more cleaner
and modern

```

When is it used

- defining object methods
- usesfull in class-like structure, especially in react components
- keeps the code dry and clean

NOTE it will only work for regular methods unlike the arrow function

1. Computed property name

Allows dynamic property names using expression inside square brakets which is not possible in es5

```jsx
{ [keyName]: value }

example
**let key = "score";

let player = {
  [key]: 95
};

console.log(player); // 👉 { score: 95 }

insead of defining it manually we can just use this shorthand**

```

Where this is commomly used

- Redux reducers
- React prosps/state object
- Factory function
- Module that export config/logic
- Dynamic UI rendering logic

**Interview quesion** 

how can u build an object key from an aray

```jsx
const keys = ["name", "age"];
const values = ["Deng", 20];
```

```jsx
let obj = {};
for (let i = 0; i < keys.length; i++) {
obj[keys[i]] = values[i];
}
```

**Interview Questions**

1. **What are Enhanced Object Literals in ES6**

Are new ES6 features that make it easier to cleaner with less syntax to create an object

they include property shorthand, mathod shorthand and computed property name

1. **What’s the difference between property shorthand and computed property names**

Property shorthand allows u to omit the name if the variable name and the key name are the same

computed property allows u to define a key dynamically with a variable in braces[ ]

1. **When would method shorthand fail or behave unexpectedly**

Since method shorthand work with regular functions only, using an arrow function they cause unexpected behavior **why?**  when u expexting this keyword to refer to an object they dont bind their own this

1. **Given the code below, what does the final object look like**

```jsx
const key = "level";
const score = 100;
```

```jsx
const game = {
[key]: score,
status: "playing"
};
```

answer

```jsx
{
level: 100,
status: "playing"
}
```

1. **Fix the following object to use all three ES6 enhancements properly**

```jsx
let name = "Deng";
let age = 20;
let key = "score";
```

```jsx
const student = {
name,
age,
greet() {
console.log("Hello!");
},
[key]: 95
};
```

1. **What’s the benefit of using method shorthand in large codebases like React**

keeps ur codes clean, and redable.