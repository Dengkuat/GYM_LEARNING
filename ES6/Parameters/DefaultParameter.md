Default parameter allows u set a default value for a function parameter if no value is provided or if value is undefined.

```jsx
function greet(name = "Guest") {
console.log("Hello " + name);
}
```

NOTE

default paramter only works when;

the argument is missing 

the argument is undefined

**When is it used and how it is evaluated**

```jsx
function greet(name = "Guest") {
console.log("Hello", name);
}
```

```jsx
greet();              // Hello Guest (no argument)
greet(undefined);     // Hello Guest (explicit undefined)
greet(null);          // Hello null (null is a value!)
greet("");            // Hello  (empty string is used)
greet("Deng");        // Hello Deng
```

in short, only undefined and nothing triggers the default parameter and null, false, 0, ‘’ do not trigger it

```jsx
function show(x = 10) {
console.log(x);
}
```

```jsx
show();        // 10 ✅
show(undefined); // 10 ✅
show(null);    // null ❌
show(0);       // 0 ❌
```

They are used in call time,

```jsx
function getTime() {
console.log("getTime() called");
return new Date().toLocaleTimeString();
}
```

```jsx
function logTime(time = getTime()) {
console.log("Time is:", time);
}
```

```jsx
logTime(); // getTime() is called
logTime(); // getTime() is called again at call time
So each time you call logTime() without a value, getTime() is re-evaluated.
```

Function.length on default parameters

.length returns the number of parameters before the default definition

```jsx
function greet(name, age) {}
console.log(greet.length); // 2

function greet(name, age = 18) {}
console.log(greet.length); // 1 ❗️

**js ignores default parameter when getting the length of the parameter
it only count any parameters before the default parameter**
```

When using expressions as default values

Es6 default parameter dosnt limit what u can have like a number or string it aswell have an exression aswell including function calling, calculations and conditions even other parameters

Destructuring in default parameter

Object destructuring