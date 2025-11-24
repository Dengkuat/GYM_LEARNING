**Asynchronous And Event based programming mental model session**

1. **Explain the difference between synchronous and asynchronous code execution in JavaScript. How does the JavaScript runtime handle each type of operation?**
Synchronous function is where each code runs after the other in a sequence where is the first isnt finished then the second one wont continue the excecution
Asynchronous code allow js to start long running tasks without blocking the other thread or tasks 
2. **Why do we need asynchronous programming in JavaScript? Give two common examples where it's useful.**
JS runs on a single thread so it can only excecute one task at a time so if we waited for long running task like network request or file read then this would freeze the app 
So asynchronous programming prevents that by start the long running task while continuing other tasks and then later one handle that result later without freezing the main thread
3. **What are Promise and call back function in simple terms. How using promise is different from using callbacks while handling asynchronous operations?
A callback** is a function that is passed as an argument to another function and is later envocked, after some task finishes
**A promise** is an object that represents a value that will be available in the future, so it can either be resolved or rejected
4. **What are the three states of a Promise? Briefly describe each state.**
**Pending -** The inital state of a promise, not yet finished
**Resoled -** This is when an operation completed successfully
**Rejected -** This is when an operation is failed
5. What is the difference between `.then()` and `.catch()` in Promise handling?
6. What does the `async` keyword do when placed before a function? What does it mean?
7. Explain what the `await` keyword does in simple terms. Why can't we use it in regular functions?
8. Explain what happens when we use `setTimeout()`. What are its basic parameters?
9. What's the difference between running code with `setTimeout(fn, 0)` versus running it directly?
10. When handling form submissions, why might we want to use async/await?
11. What is a basic error handling pattern when working with Promises?
12. What is the event loop in JavaScript? Describe its relationship with the call stack and callback queue.
13. Describe the difference between microtasks and macrotasks in JavaScript. Provide examples of each.
14. What is the difference between `setTimeout()` and `setInterval()`?