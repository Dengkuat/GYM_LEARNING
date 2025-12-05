A special function in es6 written with functions

instead of running all at once, it can pause and resume excecution

uses the yeild keyword to ‘pause’ and return a value

```jsx
function* myGenerator() {
yield 1;
yield 2;
yield 3;
}
const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

value, tells the yield product

done, tells if the generator is finished

Differnce between a genrator and a regular funtion

regular function excecutes codes line by line from top to bottome without a pause

generators using the  keyword yeild helping them to pause return the first value and then contuinue from where they left from

when u log it will keep loging the first second in such an order

Yield and return

```jsx
function* test() {
yield "A";
yield "B";
return "C";  // after this, generator is done
yield "D";   // never reached
}
```

```jsx
const gen = test();
console.log(gen.next()); // { value: "A", done: false }
console.log(gen.next()); // { value: "B", done: false }
console.log(gen.next()); // { value: "C", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

Iterating with generators

we can use a for of loop instead of calling the .next()

it returns a new array of the value