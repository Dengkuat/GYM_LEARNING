### **Mental Model Questions (Synchronous & Asynchronous + Execution Models + Task Execution)**

**1. What is the difference between synchronous and asynchronous code in terms of execution flow?**

- Synchrononus code excicutes code line by line one at task at a time each task has to finish before another task is run, it is blocking meaning future codes must wait untill the current task is compeleted
- Asynchronous code excecuts other codes as the long running task are being excecuted such as the SetTimeout, fetch API and reading file, it is a none blocking meaning other task can continue running as the other codes are run in the background

**2. If a synchronous function takes 5 seconds to finish, what happens to the rest of the code?**

- So synchronous codes excecute line by line one task at a time so when a synchrnonous function takes 5 seconds to finish then then the other future codes will have to wait for the 5 second to complete before then can start excecution/run

**3. Why does asynchronous code exist in JavaScript?**

- Asynchronous code exist is js simply because there are some long running running tasks that would freeze(crush) the app or web so asychronous codes run other task as the long running task are being run in the background then later on run the task when it ready

**4. What is the call stack and how does it relate to synchronous code execution?**

- Callstack manages track of function call and there positions and how they are to be excecuted
So when a function is called it is pushed into the stack
After excecution it is popped off the stack

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