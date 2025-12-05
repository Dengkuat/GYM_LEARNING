Intro to asynchronous programming in javascript

Definition

Asynchronous programming is where code runs line by line, waiting for eachstep to finish before moving on to the next 

```jsx
console.log("A");
console.log("B");
console.log("C");
// Output: A, B, C
```

so the order here is preserved on how the arguments are inserted

so they allow tasks run in the background while the rest of codes are excecuting

```jsx
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
// Output: A, C, B
```

Why does it exist

JavaScript runs in a **single thread**, meaning only one piece of code executes at a time.

If we made everything synchronous, long tasks (like downloading a file) would freeze the page.

So instead, JS uses async operations to **keep the app responsive**.

so before asyncronus

before es6 introducing asynceonuos codes, tasks would relay on callback

```jsx
doSomething(function(result) {
doSomethingElse(result, function(newResult) {
doThirdThing(newResult, function(finalResult) {
console.log(finalResult);
});
});
});
```

so it could create errors, more difficult to read code/highly verbose

how do promises help?

makes code easier to read, less verbose

make errors easier to catch

allow running of multiple tasks in parallel without freezing the page interactivity

Understanding promises

What is a promise?

this is a javascript object that represents the result of an asyncronus operation

Promise states

there are in mainly 3 states

1. pending -the async task is still running, result is not yet available
2. fullfiled - task completed successfully and the the result are available
3. rejected - task failed and the promise there is an error 

Promise Lifecycle

steps when u creating a promise, 

it starts from pending, if it is successfull then its state becames fullfiled, and when it fails then it state becames rejected

```jsx
let promise = new Promise((resolve, reject) => {
// Pending here
let success = true;
```

```jsx
if (success) {
resolve("✅ Task done!"); // Fulfilled
} else {
reject("❌ Task failed!"); // Rejected
}
});
```

```jsx
console.log(promise); // Shows a Promise object
```

Promise behavior

A promise is immutable once settled, so once it fullfiled or settles then it stays that way

so if we attach then and catch to get the result later, no change will be made even if the promie is already settles

Promise and event loops

When a promise resolves, its.then() callback is queued in the microtask queue, meaning it runs after async code finish but before other async task like settimeout

```jsx
console.log("A");
```

```jsx
Promise.resolve().then(() => console.log("B"));
```

```jsx
console.log("C");
```

```jsx
// Output: A, C, B
```

Creating promises

We use the new blueprint keyword  then the promise constructor to create a new promise

```jsx
let myPromise = new Promise((resolve, reject) => {
// async task goes here
});
```

resolves values marks the promise as fullfiled sending value to .then()

reject error marks the promise as rejected and send error to .catch()

Example

```jsx
let promise = new Promise((resolve, reject) => {
let success = true;
```

```jsx
if (success) {
resolve("✅ Task completed!");
} else {
reject("❌ Task failed!");
}
});
```

```jsx
console.log(promise); // Logs a Promise object (pending initially)
```

```jsx
let promise = new Promise((resolve, reject) => {
setTimeout(() => {
let dataFound = true;
```

```
if (dataFound) {
  resolve("✅ Data loaded");
} else {
  reject("❌ No data found");
}

```

```jsx
}, 2000);
});
```

```jsx
console.log("Fetching data...");
promise.then(result => console.log(result)).catch(error => console.error(error));
```

**What happens here:**

1. Fetching data... logs immediately.
2. Promise stays **pending** for 2 seconds.
3. If dataFound is true → .then() runs.
    
    If false → .catch() runs.
    

this are the important rules with promises

u must call either the resolve and reject once and not both

it must never stay pending forever in ur codes it must complete the other 2 stages reject and fullfile

not forgeting to handle the errors other wise u wil,l get an unhandled PromiseRejection warning

Consuming promises

.then() runs when a promise is resolved and fullfiled

```jsx
let promise = new Promise((resolve, reject) => {
setTimeout(() => resolve("✅ Data received"), 1000);
});
```

```jsx
promise.then(result => {
console.log(result); // ✅ Data received
});
```

the call back in .then() recieves the resoved value

.then retuns a new promise itself 

.catch() runs when promise is rejected

```jsx
let promise = new Promise((resolve, reject) => {
setTimeout(() => reject("❌ Something went wrong"), 1000);
});
```

```jsx
promise.catch(error => {
console.error(error); // ❌ Something went wrong
});
```

.finally() - code runs no matter if the promise is resolved or rejected

used for cleanup hiding a load spinner

```jsx
let promise = new Promise((resolve, reject) => {
setTimeout(() => reject("❌ Error loading data"), 1000);
});
```

```jsx
promise
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log("✅ Finished processing"));
```

Promise Chaining

This is when u attach multiple .then() calls in a sequence where the output of one becames the input of the next

they avoid nested callbacks and write cleaner codes

```jsx
new Promise((resolve, reject) => {
resolve(2);
})
.then(result => {
console.log(result); // 2
return result * 2;   // Passes 4 to the next .then
})
.then(result => {
console.log(result); // 4
return result * 3;   // Passes 12 to the next .then
})
.then(result => {
console.log(result); // 12
});
```

Error properganda in chains

if an error happens here it will skip to the nearest .catch

```jsx
new Promise((resolve, reject) => {
resolve(10);
})
.then(num => {
throw new Error("Something went wrong!");
})
.then(num => {
console.log("This won't run");
})
.catch(err => {
console.error("Caught:", err.message);
});
```

Static Promise Methods

so promises classes have many methods built in for help manage promises

1. Promise.resolve(value)

creates a promise that is already fullfilled with the given value

1. Promise reject(error)

Creates a primise that is already rejected

1. Promise.all(iterable)

runs multile Promise in parallel and waits untill all are fullfilled

```jsx
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);
```

```jsx
Promise.all([p1, p2, p3])
.then(values => console.log(values)) // [10, 20, 30]
.catch(err => console.error(err));
```

then with errors

```jsx
Promise.all([
Promise.resolve("A"),
Promise.reject("B failed"),
Promise.resolve("C")
])
.then(console.log)
.catch(console.error); // B failed
```

4.Promise.allSettled(iterable)

runs in parallel but never rejects - returns an array showing all fullfiled, rejected for each

```jsx
Promise.allSettled([
Promise.resolve("A"),
Promise.reject("B failed"),
Promise.resolve("C")
])
.then(results => console.log(results));
/*
[
{ status: "fulfilled", value: "A" },
{ status: "rejected", reason: "B failed" },
{ status: "fulfilled", value: "C" }
]
*/
```

1. promise.race(iterable)

returns the result of the first settled promise rejected or fullfild

```jsx
Promise.race([
new Promise(res => setTimeout(() => res("First"), 1000)),
new Promise(res => setTimeout(() => res("Second"), 2000))
])
.then(console.log); // First
```

1. promise.any(iterable)

returns the first fullfiled promise, ignoring the rejections if all are rejected it will throw an Aggregate Error