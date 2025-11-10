**What does async do?**

- Adding async before a function always makes it return a promise

```bash
async function example() {
    return 42;
}
example().then(console.log); 

output?
42

Example
So when we call async keyword in a function then it returns a promise when we call the function
```

- So async keyword wraps the function in a promise
- So the function envoction will always return a promise

**What does await do?**

- Await pause the excecution of an async function untill the promise resolves or rejects
- It can only be used inside an async function or top level await in modern js

```bash
function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

async function run() {
    console.log("Start");
    const result = await delay(2000); // waits 2 seconds
    console.log("End after", result, "ms");
}

run();

Explanation?
The run() function pauses at the await line
After the promise resolve, it resumes and stores the value in result
```

**Converting Promises to async and await**