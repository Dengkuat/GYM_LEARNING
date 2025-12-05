in here u shall learn how to use ES6 destructuring assignment that allows you to destructure an array into individual variables

What is aray destructuring?

This is unpacking value in an array into individual variables

example of how destructuring the element of an array returned from a function into multiple variables

```jsx
function getScore(){
   return [70, 80, 90];
   
}
let scores = getScore();
let x = scores[0];
let y = scores[1];
let z = scores[2];
console.log({x}); 70
console.log({y}); 80
console.log({z}); 90
```

so output in simply terms destrcuture is destructuring arrays into individual variabels where it is accessed by its index

so x, y and z take up the values of the first second and third respectivly

**NB: the [ ] is not actually an array** 

so if there is a char alphabet but no value is assigned to it then it is going to show an error undefined ( primitive datatype that signifies absence of a meaningfull value)

so if the function return array are more than 3 elements then the remaining element that are out of 3 became discarded

**Array Destructuring Assignment and Rest syntax**

yes we can destructure all remaing elements of an array and put them in a new array using the rest parameter( it collects arrays or objects of multiple into a single array

```jsx
function getScore(){
   return [70, 80, 90, 100];
   
}
let [x, y, ...args] = getScore();
console.log({x, y, args});
output can be { x: 70, y: 80, args: [ 90, 100 ] }
```

so we assigned x to the first and y to the second then used to rest paramter to collect mulitple x and y into a single array called args

**Setting default values**

```jsx
function getItem(){
   return [10, 20];
}
let items = getItem();
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log({thirdItem}); 0 
```

so here if there is no item 2 then it will not show undeefined else it will show 0 so meaning we setting a default value for the second index item 3

**how this works**

step 1 - we declare the getItems() funtion to return an array of 2 numbers

step 2 - then we assign the items variable to the return array of the getItems() function

step 3 - finally we check if the third element exist in the array, if it dosnt then we assign a value of 0 to the third variable

else we can do this simply move

let [, , thirdItem = 0] = getItems();

console.log(thirdItem); // 0

**question : what if the function dosnt return an array and you expected it to return an array?**

Then the distructuring assignment will result in an arror null ( a primitive datatpe that represents and intentionally absence of an object value)

**how can u solve this**

You can typically solve this is to fallback the return value of the getItem() function to an emplty array like this

```jsx
function getItems() {
   return null;
}

let [a = 10, b = 20] = getItems() || [];

console.log(a); // 10
console.log(b); // 20
```

**Nested array destructuring**

this means a funtion that returns an array that contains an element that is another array or nested in js terminologies

```jsx
function getProfile() {
   return [
       'John',
       'Doe',
       ['Red', 'Green', 'Blue']
   ];
}
```

**explanation**

since the third element of the returned array is another array then we will need to use this nested destructuring syntax to destructure it like this

```jsx
let [
   firstName,
   lastName,
   [
       color1,
       color2,
       color3
   ]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue
```

**inconclustion** 

**where it destructuring applied**

1.**swapping variables**

destructuring makes it easy to swap values of variables without using a temorary varible

```jsx
let a = 10, 
    b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

2.**Function that return multiple values**

in js a function can return a value,  however you can return an array that contains multiple valuess

```jsx
function stat(a, b) {
   return [
       a + b,
       (a + b) / 2,
       a - b
   ]
}
console.log(stat(4, 2));  [ 6, 3, 2 ]
```

we can also use the array desstructuring assignment syntax to destructure the elements of the return array into variables

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10