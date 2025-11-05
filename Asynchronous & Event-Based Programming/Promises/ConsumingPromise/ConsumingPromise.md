**.then()**

- This is for success

```bash
let p = Promise.resolve(5);

p.then(result => console.log(result)); // prints 5
```

- .then() is a method of a promise that registers a callback for when a promise is fullfilled
- It dosen’t block the other thread, the callback is put into the microtask queue
- Chaining .then() returns a new promise, which resolves to whatever you return from the callback

```bash
Promise.resolve(2)
  .then(x => x * 3)      // returns 6 → new promise resolved with 6
  .then(console.log);    // prints 6
```

So when the callback throws an error then the return of the promise will be rejected automatically

```bash
Promise.resolve(5)
  .then(x => { throw "oops"; })
  .catch(console.log);  // prints "oops"
```

**.catch()**

- This is for errors

```bash
Promise.reject("Fail")
.catch(error => console.log(error)); // prints "Fail"
```

- catch is a syntatic sugar for .then() it handles rejected promises
- If catch() returns a value the chain continues as fullfilled

**.finally()**

- This runs no matter what the state of the promise is it can be rejected or it can be fullfilled
- It is often used to cleanup, stopping loader and closing connections

So now we can look at examples of each

[Exercise](https://www.notion.so/Exercise-2a2b532183ad80818798dc7a724ba150?pvs=21)