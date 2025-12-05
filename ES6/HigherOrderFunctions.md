A high order function is a function that takes another function as an arrgument 

it can also return a function as its result, OR

This is possible in javascript because functions are first class citizens [ meaning function can be passed as an arrgument, returned from other function and assigned to variables]

**Examples**

**passing a function as an argument**

```jsx
function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet('kuat'));

    function processUserInput(callback){
        const name = 'deng';
        console.log(callback(name));
    }
    processUserInput(greet);
    //so here besically the processUserInput is a 
    //higher-order dunction because it takes a function 
    //callback as an argument.

     

```

**Returning a function**

```jsx
function multiplier(factor){
    return function(number){
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5));

const triple = multiplier(3);
console.log(triple(5));

//here
//multiplier returns a new function each time
//this is useufull for creating customized functions
//like double and tripple

```

**Both passing and returning functions**

```jsx
function compose(f, g){
    return function(x){
        return f(g(x));
    };
}
const add5 = x => x+5;
const multiply3 = x=> x*3;

const addThenMultiply = compose(multiply3, add5);
console.log(addThenMultiply(4));

//so the compose takes two function f and g
//and return a new funtion
//this is a function composition
//often used in functional programming

```

**Common Built in higher order functions in javascript**

**Map - creates a new array by tranforming each item in the original array**

it does not change the original array it just creates a new tranformed array

transforms each element in an array

```jsx
**const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num*num);
console.log(squared);
//map iterates through each element in the array** 
```

**Filter - creates a new array thast contains only the items that match a specific condition** 

it dosnt change the original array it just returns a new one filtered

```jsx
const numbers = [1, 2, 3, 4];
const even = numbers.filter(n => n%2===0 );
console.log(even);
//add the numbers that have passed the test condition only
```

**ForEach - runs a funtion on each time in the array but dosnt return anything**

it dosnt change the original array and never return anything just performs an action per item

```jsx
**[1, 2, 3].forEach(n => console.log(n * 2));
// Output: 2, 4, 6**
```

**reduce - combines all items in an array to produce a single value eg sum and product**

it dosnt modify the array it return a single array of thoes values

```jsx
const numbers = [1,2,3,4];
const sum = numbers.reduce((acc, curr)=>acc+curr, 0);
console.log(sum);
```

**Find - returns the first item in an array that matches a condition**

it dosnt modify the array

```jsx
const numbers = [1,2,3,40];
const found = numbers.find(num=>num>10);
console.log(found);
```

**Some - returns true if at least one item satisfies the condition**

```jsx
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
```

**Sort - modifies the array by sorting it** 

it can be asc or desc 

```jsx
const numbers = [5, 1, 8, 3];

numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // Output: [1, 3, 5, 8]
```