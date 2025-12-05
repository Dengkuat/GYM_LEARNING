a set is a collection of unique values

it automatically removes the duplicates and preserves the insertion or initial order

```jsx
// Empty Set
const set1 = new Set();
```

```jsx
// Set with values
const set2 = new Set([1, 2, 3, 3, 4]);
here the output will remove duplicates autmatically
```

```jsx
const set2 = new Set([1, 2, 3, 3, 4]);
console.log(set2);        // Output: Set(4) { 1, 2, 3, 4 }
console.log(set2.size);   // Output: 4
```

Common use cases

When we want to remove duplicates from an array

```jsx
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
```

Set MEthods

set comes with powerfull methods like add, remove, check and clear values

1. Add( ) 

 this adds a new value to the set of array if it dosnt exist in that array

```jsx
const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // duplicate, won't be added
```

```jsx
console.log(mySet); // Output: Set(2) { 'apple', 'banana' }
```

1. delete( ) 

 removes a specific value from a set

it returns a boolean true or false if item is deleted 

```jsx
mySet.delete('apple'); // true
console.log(mySet); // Output: Set(1) { 'banana' }
```

1. has( ) 

 it just checks if the set contains a certain value

returning a boolean true or falseif that value exists in the set u created

```jsx
console.log(mySet.has('banana')); // true
console.log(mySet.has('apple'));  // false
```

1. clear( ) 

 removes all the values from a set

```jsx
mySet.clear();
console.log(mySet); // Output: Set(0) {}
```

1. size

 not a method of set but a property

it returns a number of values or items in the set

```jsx
const s = new Set([1, 2, 3]);
console.log(s.size); // Output: 3
```

Use cases when we looping through a set

since sets are iterable, we can loop through them just like an array but can access the elements with their index

1. for of Loop

```jsx
const fruits = new Set(['apple', 'banana', 'mango']);
```

```jsx
for (const fruit of fruits) {
console.log(fruit);
}

apple
banana
mango
```

1. forEach() 

```jsx
fruits.forEach((item) => {
console.log(item);
});
will be a same outpt
```

NOTE the forEach in set takes only one arguments( value), but initially it is passed twice to match the Map’s callback signiture

1. values, keys, entries 

Even through Set don’t have keys, keys() and values() they return the same thing

**Use cases**

Sets are not just for storing unique values

they also do good job or cleaning and filtering 

1. removing duplicates from an array

```jsx
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
```

```jsx
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
```

1. checking for unique values in an array

```jsx
const words = ['cat', 'dog', 'cat'];
const isUnique = new Set(words).size === words.length;
console.log(isUnique); // Output: false
```

1. Tracking seen items in a loop

```jsx
const ids = [101, 202, 303, 202, 101];
const seen = new Set();
const duplicates = [];
```

```jsx
for (const id of ids) {
if (seen.has(id)) {
duplicates.push(id);
} else {
seen.add(id);
}
}
```

```jsx
console.log(duplicates); // Output: [202, 101]
```

1. joining two arrays and removing duplicates

```jsx
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
```

```jsx
const union = new Set([...a, ...b]);
console.log(union); // Set(5) {1, 2, 3, 4, 5}
```

then when we want the values that have repeated them selves we can filter them out 

**Intersection (values found in both)**

```jsx
const intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection); // Set(1) {3}
```

**differnce - not in b but in a**

```jsx
const difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference); // Set(2) {1, 2}
```

**Big question now** 

Difference between set and array

they are both iterable its makes it easier to jsut convert between the two easily so we can use array methods or even set methods when needed to