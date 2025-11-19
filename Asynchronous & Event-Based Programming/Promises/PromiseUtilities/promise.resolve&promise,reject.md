### **Promise.resolve()**

**What it takes?**

- a numbe
- a string
- object
- an array
- Even another promise like fetch

**What it returns?**

- It returns a fullfilled promise value
- So it will call .then immediatly

### **Promise.reject()**

**What it takes in?**

- Any value given to ti
- So that value becames the error reason

**What it returns?**

- It returns a rejected promise
- That means the promise calls the .catch immediatly