### **Mental Model Questions (Synchronous & Asynchronous + Execution Models + Task Execution)**

1. What is the difference between synchronous and asynchronous code in terms of execution flow?

2. If a synchronous function takes 5 seconds to finish, what happens to the rest of the code?

3. Why does asynchronous code exist in JavaScript?

4. What is the call stack and how does it relate to synchronous code execution?

**5.** Explain the event loop in your own words.

**6.** What is the difference between a **macro-task** and a **micro-task**? Give examples.

**7.** Consider this code:

```bash
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

What will be printed and why?

**8.** Consider this code:

```bash
console.log("Start");
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

Predict the output and explain the reasoning.

**9.** How do async and await change the way code executes compared to plain promises?

**10.** What happens if you use await inside a synchronous function?

**11.** Explain how a long-running synchronous task can block the UI in a browser.

**12.** Which tasks are prioritized first in the JavaScript execution model: microtasks or macrotasks? Why?

**13.** Explain what happens step-by-step when a setTimeout with 0ms delay is executed.

**14.** If multiple promises resolve at the same time, in what order do their .then handlers run?

**15.** True or False: Asynchronous code always executes in parallel. Explain your answer.

**16.** What is the mental model to predict output when synchronous and asynchronous code are mixed?

**17.** You have a heavy synchronous loop and an asynchronous API call. Which completes first? How does the event loop handle it?

**18.** How would you explain **callback hell** and why promises/async-await help?

**19.** Imagine a scenario: setTimeout inside a Promise.then inside another setTimeout. Predict the execution order mentally.

**20.** What are the key strategies to avoid blocking tasks and make code responsive?