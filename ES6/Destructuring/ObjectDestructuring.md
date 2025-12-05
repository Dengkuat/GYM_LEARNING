Whats is object destructuring 

This is a shorthand for extracting properties from an object and assigning then to variables

```jsx
const user = { name: "Deng", age: 20, country: "South Sudan" };
const name = [user.name](http://user.name/);
const age = user.age;

const { name, age } = user;
```

So how this is helpfull

this reduces repeatation of codes so that the codes look more cleaner and easier to read

basic syntax

```jsx
const { property1, property2 } = object;
```

note , the property name must be similar to the one in the object unless we are reassigning them to another name

so this is a quick example

```jsx
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25
```

So lets talk about renaming 
so when renaming a propety name, we often use a slighty different name from the initial property name

```jsx
const person = { name: "Alice", age: 25 };
const { name: fullName, age: years } = person;
```

```jsx
console.log(fullName); // Alice
console.log(years);    // 25
```

• name: fullName means “take the name property and store it in a variable called fullName.”

So we can aswell provide default values  for our properties

so that it can cater for the case of a missing value in the object so we can omit undefined

```jsx
const person = { name: "Alice" };
const { name, age = 18 } = person;
```

```jsx
console.log(name); // Alice
console.log(age);  // 18

as we can see default values can be expressions
const { score = Math.random() * 100 } = {};
console.log(score); // some random number
```

When using Nested objects with destructuring 

we can destructure properties inside of other properties

```jsx
const user = {
name: "Deng",
address: {
city: "Juba",
country: "South Sudan"
}
};
```

```jsx
const { address: { city, country } } = user;
```

```jsx
console.log(city);    // Juba
console.log(country); // South Sudan
```

so this is when we want both to be destructired mind u that address isnt being created

```jsx
const { address, address: { city } } = user;
```

When we talk about using rest in destructuring 

yes it can be used in destructuring, to collect or grab the remaming properties.

```jsx
const user = { name: "Deng", age: 20, country: "South Sudan" };
const { name, ...others } = user;
```

```jsx
console.log(name);   // Deng
console.log(others); // { age: 20, country: "South Sudan" }
```

Detructuring in function parameters

Whena function takes in an object then we can use destructuring right in the parameter list

```jsx
function greet({ name, age }) {
console.log(Hello ${name}, you are ${age} years old.);
}
```

```jsx
greet({ name: "Deng", age: 20 });
```

When combining them with an array

If an object contains an array then we can destructure them both

```jsx
const person = {
name: "Deng",
hobbies: ["coding", "football", "reading"]
};
```

```jsx
const { hobbies: [first, second] } = person;
console.log(first);  // coding
console.log(second); // football
```

How about when we computing the property names

```jsx
const key = "age";
const user = { name: "Deng", age: 20 };
```

```jsx
const { [key]: years } = user;
console.log(years); // 20
```