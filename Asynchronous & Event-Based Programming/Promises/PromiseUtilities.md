- This are built in helper methods that javascript gives us to handle multiple promise at once or manage there behaviors
- So instead of chaining .then() these utilities will let u run many promise in parallel, decide when to continue after one succedd or when one fails and handle result and errors more flexible

**So why do they exist?**

- Nomally we could chain .then() means a promise depends on each other
- So now if we want to run several promsies at the same time so that when promise utlility come in
- So they help tp control how the asynchronous codes behave together

Core Promise Utility methods

- **Promise.all()**

**What it does**

It waits for all promises to succeed, or if fails if one reject

**When to use**

When all the tasks manage to succeed before contuning 

- **Promise.allSetted()**

**What it does**

Waits for all the promise to finish (resolving or rejecting)

**When to use**

When you want results from all task even the failed ones 

- **Promise.race()**

**What it does**

Returns the result of the first promise that settles

**When to use**

When timming matter fastest response

- **Promise.any()**

**What it does**

Returns the result of the first promise that resolves successfull it ignore reject 

**When to use**

When only one success is enough

- **Promise.resolve()/ Promise.reject()**

**What it does**

Creates a promise already resolved or rejected

**when to use**

Used to quickly wrap values into promise or test async code

### **Example Contexts**

- **Parallel fetching:**
    
    Fetch data from multiple APIs at once and wait for all before showing UI → use Promise.all().
    
- **Error‑tolerant batch jobs:**
    
    You want to know which API calls failed or succeeded → use Promise.allSettled().
    
- **Fastest response wins:**
    
    Query multiple backup servers → use Promise.race().
    
- **At least one success needed:**
    
    Try connecting to several mirror servers → use Promise.any().