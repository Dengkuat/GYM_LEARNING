A map is a collection of key and value pair

not like an object because the key in map can be any datatype 

string, number, object or even a function

Map over Objects?

Map allows any key type while object just allows a string

Map allows u to iterate or loop through each value while u cannot loop through an object we use object.key( )

Creating a Map

```jsx
const myMap = new Map();
const studentAges = new Map([
  ['Deng', 20],
  ['Anna', 22],
  ['Mike', 21]
]);
```

```jsx
const userRoles = new Map();
```

```jsx
userRoles.set('Deng', 'Admin');
userRoles.set('Anna', 'Editor');
userRoles.set('Mike', 'Viewer');
```

```jsx
console.log(userRoles);
// Output: Map(3) { 'Deng' => 'Admin', 'Anna' => 'Editor', 'Mike' => 'Viewer' }
```

Map methods

most common methods used when u are using map

- Set( key, value) - adds or updates en existing element

```jsx
const users = new Map();
```

```jsx
users.set('Deng', 'Admin');
users.set('Anna', 'Editor');
users.set('Deng', 'Owner'); // updates value for 'Deng'
```

```jsx
console.log(users);
// Output: Map(2) { 'Deng' => 'Owner', 'Anna' => 'Editor' }
```

- get( key) - returns value associated with the key

```jsx
console.log(users.get('Deng')); // Output: Owner
console.log(users.get('Mike')); // Output: undefined
```

- has( key) - checks if Map contains a key and returns a boolean true or false

```jsx
console.log(users.has('Anna')); // true
console.log(users.has('Mike')); // false
```

- delete( key) - remves a key and value pair and returns boolean if it exists and was deleted and false if it never existed

```jsx
users.delete('Anna'); // true
console.log(users); // Map(1) { 'Deng' => 'Owner' }
```

- clear( ) - removes all info like key and value pair from Map

```jsx
users.clear();
console.log(users); // Map(0) {}
```

- size( ) - returns number of values in pair in map

```jsx
const numbers = new Map([
['one', 1],
['two', 2]
]);
```

```jsx
console.log(numbers.size); // Output: 2
```