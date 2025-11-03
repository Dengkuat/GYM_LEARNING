- A Promise is an object that represents a value that may not be available yet, but will be at some point in the future.
- So we can think of it like a placeholder for a future result.
- Its a way of handling asynchronous code/operation without frezzing the rest of the program.

**Promise states**

- **Pending**

The intial state when the promise is created

The asynchronous code/operation hasnt finished yet

Nothing is yet know ethier it is not successfull or not failed

- **Fullfilled/ Resolved**

 ****The operation finished successfully

The promise now has a value

This is when you would use resolve(value) inside the promise

- **Rejected**

 ****The operation failed

The promise now has a reason for failure

This is when you would use rejected(error) inside your promise

**Note**

- So a promise is in exactly one of the three states at a time
- A promise can only state once it is pending fulfulled or pending rejected once it it fullfilled or rejected or settled then it cannot be changed again, it is locked
- So we see that without promise we would have to use callback which would be messy and leading to callback hell

**When is a promise considered settled?**

- So it is considered settled when it is nolonger pending, this means that it is has reached its final state so it is either fullfiled or it is rejected one of the two, once it is seettled it cannot be changed

**Creating a Promise**

We create promise using the Promise constructor

```bash
const myPromise = new Promise((resolve, reject) => {
  let success = true; // simulate success or failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

note
resolve called when the promise succeeds
reject called when the promise fails
```

**Using Promise**

We use .then to handle successfull results and .catch to handle errors

```bash
myPromise
  .then((result) => {
    console.log(result); // "Operation was successful!"
  })
  .catch((error) => {
    console.log(error); // "Operation failed!"
  });
```

1. **Wrap a setTimeput in a promise?**

So settimeout is an example of an asynchronous operation, so when we wrap it into a promise then this how it is to be excecuted

```bash
function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`waited ${ms} before excecution`)
        }, ms);
    })
}
wait(3000).then(message => console.log(`excecution finished after 3 seconds`))
Promise {<pending>}
VM563:8 excecution finished after 3 seconds
```

2. **A promise that will resolve after 2 seconds**

```bash
let myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(`resolved after 2 seconds`)
    })
})
myPromise.then(console.log)
Promise {<pending>}
resolved after 2 seconds
```

3. **Why doesn’t a promsie block the main thread?**
- Js excecute in a single thread so one excexution at a time
- So promise are no non blocking because the excecution runs synchronously, so calling .then( ) callbacks the queued in the microtask queue
- The main thread continues runnig while the promises are pending, only when the promise settles is when the callback excecutes the microtask queue
****