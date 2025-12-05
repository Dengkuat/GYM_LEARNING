**let- declares a block-scope**

this is similar to var tho except that these variable are blocked-scope

inside a block means inside the curly brackers such as block or function scope

If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.

**difference btn let and var**

1. **terms of variable scope**

**var**

the var variable belongs to a global scope when you define them outside a function - meaning it is accessed any where the function or ur codes

and when u declare it inside the scope then it can only be accessed wihin that scope only and cannot be accessed outside the scope

**let**

so declaring using let globally then it can be accessed from both inside and after a loop eg **for**

when u declare it inside a varibale eg a blocked scope it means this only exist and can be accessed inside the loop 

2.**Creating global properties**

```
var name = ‘deng’;

console.log(window.name) //deng

let name = ‘deng’;

console.log(window.name) //undefined
```

**why** let variable are not added to the global object while var is added to the global object this is a window in the web browser and global on node.js

3.**Redeclaration**

var can be redeclared while let cannot be redeclared 

meaning var can be declared to another variable without any issue

var counter = 20;

var counter;

console.log(counter);

let counter = 20;

let counter;

console.log(counter) error - this is what let cannot be redeclared means 

4.**Template dead zone**

When a variable is hoisted into memory and when it is intilized with its valuein code

during this time the variable exists but cannot be accessed 

trying to access it will through a reference error

```jsx
{
// TDZ starts for 'myVariable' here
console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
let myVariable = "Hello"; // TDZ ends for 'myVariable' here
console.log(myVariable); // "Hello"
}
```

**Intro to Const**

```jsx
declearing a value wtih const declares a blocked scope variable meaning it is declaread but cannot be reassigned and redecleared 
```

the value is constant

```jsx
const RATE = 0.1;
RATE = 0.2;
type error
```

**const on objects**

since const ensures that the value is created in read-only it doesnt mean the actual value is immutable to const even if the the variable object is const, you can change the value of its property

however u cannot reasign the value object person unless u freeze 

**freeze** means the property is frozen 

**const in array**

in an array we an add an element in an array using const but we cannot reassign that array to another array

**Hoisting**

This in simple terms is moving declearation on top of the scope before the code is excecuted

with 2 phases ; the creation phase where the momery is allocted for variables and function and the excecution phase where the codes are actually run line by line

hoisting behavior on declearations

1.var

declerations are hoisted as initialization stays where they are

so the value is set to undefined untill the excecution reaches the assignment of the value

```jsx
console.log(a); // undefined
var a = 5;
console.log(a); // 5

so js reads this like this
var a;        // declaration hoisted
console.log(a); // undefined
a = 5;        // assignment happens here
console.log(a);
```

2.let and const

declearations are hoisted but not initalized

they are in the template dead zone

so accessing them before their declearation throws a reference error

meaning value exists but cannot be accessed

```jsx
console.log(b); // ❌ ReferenceError
let b = 10;
```

```jsx
console.log(c); // ❌ ReferenceError
const c = 20;
```

3.function declearation

the entire function is hoisted

can be called even before they are defined

```jsx
sayHi(); // ✅ "Hi"
function sayHi() {
console.log("Hi");
}
```

4.function expression

so they behavior vaires now

so if u use var it will show u a typeerror

then if u use let and var then it is a reference error

Interview questions

## **1. Concept & Definition Questions**

- Explain the difference between var, let, and const.

var- function scope it can be redecleared and reassigned , hoisted with undfined initilally

let - blocked scope it cannot be redecleared but it can be reassigned hoisted but in template dead zo usually referring to reference error

const - blocked scope, it can neither be redeclared or reassigned, must be initialized at declearation

- What is **block scope** and how is it different from function scope?

a blocked scope is a variabled decleared with let and const where the values are accessible only inside the curly brakets where they are defined such as inside an if statement and a loop

variable decleared with var inside a function scope where the value is accessible anywhere within the function but not outside of the function

- Can you redeclare a variable with let or const in the same scope? Why or why not?

no , you cannot redecare a variable with let and const in the same scope, this can cause a syntax error

let - u can reassign its value but u cannot redecleare it in the same scope

const - we cannot reassign or redecleare it at all

## **2. Behavior & Edge Case Questions**

- What happens if you try to use a let or const variable before it’s declared?

it is going to throw a reference error meaning u are in the template dead zone untill the variable let and const are initialized

- Why does const still allow object and array contents to change?

so const revents reassigning of the variable reference, not the concept

```jsx
const arr = [1, 2];
arr.push(3); // Allowed
arr = [4, 5]; // ❌ Error
```

- What is the **temporal dead zone (TDZ)** and how does it affect variable access?

this is the period beteen entering the scope and declearing a variable where accessing that variable will through a refernce error

this will happen with let and const 
not with var because var does not have a template dead zone since its initalized as undefined from the start

## **3. Best Practice Questions**

- Why is it recommended to default to const instead of let?

so that u never worry about error if u mistakenly reassign a value or redeclare unelss with let where u can easily reassign ur let into another variable

- In what scenarios would you **have** to use let instead of const?

 it can prevent accidental reassiging since const cannot be reassigned

it can also improve code safty and clarity 

we can use let only when we know the value is giong to change

## **4. Problem-Solving / Fix-the-Bug**

- A variable is accidentally being reassigned in your code — how would you prevent that?

i would decleare that variable with cont 

this value will stay constant and when u try to reassign it will through an errror during develpment

and if l know l value will change then there l would use let not var because var can be redecleared and has a function scope

- Refactor this code to use let/const instead of var and explain why your version is safer.