- What is the difference between ES6 Map and WeakMap?
- **1. Map**
    
    
- A **Map** is a collection of key-value pairs.
- **Keys**: Can be **any type**—primitive values (string, number, boolean) or objects.
- **Values**: Can be anything.
- **Iteration**: You can iterate over a Map using for..of, .forEach(), etc.
- **Size**: Has a .size property to know how many entries exist.
- **Garbage collection**: Map **keeps strong references** to keys. If you store an object as a key, it will **not** be garbage collected as long as the Map exists.

### **2. WeakMap**

- A **WeakMap** is also a collection of key-value pairs.
- **Keys**: Must be **objects only** (cannot be primitives like strings or numbers).
- **Values**: Can be anything.
- **Iteration**: **Cannot be iterated**—no .forEach(), for..of, or .size property. This is intentional.
- **Garbage collection**: WeakMap holds **weak references** to its keys. If there are **no other references** to a key object, it can be **automatically garbage collected**, even if it exists in the WeakMap.
- How do you swap variables using a Destructuring Assignment?

**Destructuring assignment** lets you unpack values from arrays (or properties from objects) into distinct variables. A neat trick in ES6 is to swap two variables without using a temporary variable.

we can just use swap using array destructuring 

- What are modules in ES6? and how do we export modules?

 

- **Modules** are a way to **organize JavaScript code** by splitting it into separate files.
- Each file can **export** variables, functions, or classes, which can then be **imported** into another file.
- This helps keep code **modular, maintainable, and reusable**.

How to export a file

### **1. Named Exports**

- You can export **multiple values** by their names.

### **2. Default Export**

- You can export **a single value** as the default from a module.
- What is the reason behind adding Symbol to ES6?
    - Explain what Well-Known symbols are for and how one can create a global symbol.
- What is a Garbage collection?

this is a situation where it happens to weakMap objects where the key which is an object is taken weakly and since there isnt a string reference on the sky if there isnt any reference then it is autmatiucally gabage collected

- What is the difference between const and `Object.freeze()`

 

### **1. const**

- const is a **keyword** to declare variables that **cannot be reassigned**.
- The **variable binding is constant**, not necessarily the value itself.
- Works for **all data types**, including primitives and objects.
- **Objects declared with const can still be mutated** (their properties can change).

 

### **2. Object.freeze()**

- Object.freeze() is a **method** that makes an **object immutable**—you cannot add, remove, or modify its properties.
- Works **only on objects**, not primitives.
- Freezing an object does **not affect the variable binding** itself; it only prevents changes to the object’s content.
- What is the Prototype Design Pattern?
- What are Proxy in ES6?
- What is an IIFE and why does the following not work as an IIFE (Immediately Invoked Function Expression)? What needs to be modified in order for it to be classified as an IIFE?

this is a function that excecutes imediatly after it is defined 

it purpose is to create a private scopt so that the variables donnot pollute the global scope

```tsx
function f(){ }();
this is a function declearation after the brackets 
sso we will change the declearation into an expression
we do this by adding th parenthessis after the decleartion 
so that the codes can run imediatly
```

- What are ES6 classes, and when could one need to use them?

is a way in js where we can create an object with shared properties and methods 

when we creating one object with multiple behavior 

so they can inherite methods and properties without writing more and alot of codes

- What is the purpose of the constructor method in a class, and how is it used?

they constructor methods intiallizes an object so they they run automatically when we create an oject, instance

- What is the **`super`** keyword in a class, and how is it used?

this is used in an inheritance where if the child class want to add more properties then we call out the super keyword then the properties they share then the new properties we want to add

- What is a Proxy and what problem does it solve in JavaScript?
- What is the difference between an iterator and an iterable? How do they relate to each other?