1. What does asynchronous JavaScript mean and at it’s core fundamental, how is it achieved in JavaScript?
2. What is a callback function in JavaScript, and how is it used in asynchronous programming?
    1. What are the potential drawbacks of using callbacks for handling asynchronous operations?
3. Difference between concurrency and parallelism programming paradigms?
4. How can you convert a callback-based function to a promise-based function?
5. What is promise chaining?
    1. What is the difference between resolved, settled, rejected, and fulfilled promise states?
6. What is the return type of the `.then()` function?
    1. How can you define a thenable?
7. What does the `async` keyword do when applied to a function?
    1. What are some alternatives or workarounds to use `await` at the top level in JavaScript?
8. What is AJAX and why is it important if so?
9. What is an API endpoint? 
10. How many states can an `XMLHttpRequest` object have and what are they?
11. What is an event loop?
12. How does  a `forEach()` and `map()` or `for...of` behave with promises?
13. What is the difference between microtasks and macrotasks in the context of the event loop?
     a. How does queueMicrotask work
14. Predict the output of the following code

```jsx

Promise.resolve()
.then(() => console.log(1));

queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();
```

1. What will this code of block give?

```jsx
// A promise 
const nums = [1, 2, 3, 4, 5];

const promise = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 200);
  });
};
```

```jsx
// Consuming the promise using forEach loop
function display(numbers) {
  numbers.forEach(async (num) => {
    const dis = await promise(num);
    console.log(dis);
  });
}

display(nums);
```

```jsx
// Consuming the promise using for...loop
async function display(nums) {
    for (const num of nums) {
        const dis = await promise(num)
        console.log(dis)
    }
}

display(nums);
```