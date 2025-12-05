Definitions

async/await is syntactic sugar over promisses in javascript

it allows you to write asynchronous code that looks synchronous, makeing it easier to read and maintain

helps in avoiding the callback hell and long then() chains

keypoints

async keyword

decleares a function as asynchronous

always returns a promise even if you return is a regular function

```jsx
async function greet() {
return "Hello";
}
```

```jsx
console.log(greet());
// Output: Promise { 'Hello' }
```

await keyword

can only be used inside an async function

pauses excecution untill the promise resolves

returns the resolved value of the promise

```jsx
async function getNumber() {
const result = await Promise.resolve(42);
console.log(result); // Output: 42
}
getNumber();
```

Why do we use them

Make asyncronous codes look like asyncronous code

suplify error catching 

improves readibility and maintablilty of your codes

Common mistakes

using await outside of an async function that will through a syntax error

forgetting the async function always returns a promise

sequentially awaiting independent tasks when they could run in parallel

```jsx
async function example() {
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
```

```jsx
const result1 = await promise1; // Waits here
const result2 = await promise2; // Waits here
```

```jsx
console.log(result1, result2); // Output: First Second
}
```

```jsx
example();
```