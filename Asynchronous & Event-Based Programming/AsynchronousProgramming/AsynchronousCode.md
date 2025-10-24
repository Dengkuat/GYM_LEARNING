**Asynchronous programming** is an asynchronous code that can start a task, then move on to other task before the first one finishes 

```bash
console.log("Start");
setTimeout(() => console.log("Middle"), 1000);
console.log("End");

outcome
start
End
Middle
 so end was excuted as the middle was waiting to be excecuted
```

So the program enables a start of a particular long running task and still be able to respond to other events while running task, the long running task can be maybe a data fetch or file reading

**Advantage**

It dosnt block the other rest of the program since the code keep executing as the other is being excecuted()

**So what does Asychronous exist?**

- Fetching data from servers
- Reading/writing fules
- Waiting for a user input
- Timers(setTimeout/SetInterval)

so these are long running task and the task would take long so asynchronous code exist to keep excecuting the other tasks as the long running ones are being excecuted 

- If js waited for the ececution to finish then the app/website would freeze so javascript offloads this tasks to the background to be handled by maybe node.js or the browser