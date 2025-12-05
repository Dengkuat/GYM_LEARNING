What is an Error

An error is an occurence when javascript engine cannot excecute a code correctly 

Common types

sytax Error - mistake in the code structure which stop the code before they are run

Runtime Error - mistake that happens while the code is running such as calling an undefined function

Error Objects

Js provides a built in object error

it contains infomation about what went wrong

```jsx
const error = new Error("Something went wrong!");
```

```jsx
console.log([error.name](http://error.name/));     // "Error"
console.log(error.message);  // "Something went wrong!"
console.log(error.stack);    // stack trace (where error happened)
```

Error types

Error - generic error

Reference Error - using variables that dont exist

TypeError - wrong data or calling something that  isn’t a function

RangeError  - number is out of range

SyntaxError - invalid code syntax  - usually cought at compile time

what or why, try…catch?

If an error happens in js, it stops the whole program or at least that function

try…catch help u handle error gratefully with out crushing ur codes

so the programm dosnt acctually catch the error it just reports the error and u cannot continue with the error it stops the whole program

Throwing Errors

what does thow do?

the throw keyword is used to manually create an error 

when throw runs then the excecution stops imediatly in that block

The error is then either caught by try…catch or crashes the program

Promises and .catch() 

When we use promise, error dont throw in the normal way

instead, if something goes wrong then the promise is rejected and handled with the .catch()