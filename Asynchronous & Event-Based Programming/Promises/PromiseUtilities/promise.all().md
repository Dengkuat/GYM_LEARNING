### **Promise.all()**

**What does it take in?**

- It takes in an iterable/ array of promise.

**What does it return?** 

- It returns a single promise that resolves when all the promise succeed even when the array is empty.
- Therefore if one fails, then it throws an error
- It returns the first failure reason

**When do we use promise.all()?**

- When we need all the data together and every request is a success