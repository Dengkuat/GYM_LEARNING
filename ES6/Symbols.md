Asymbol is a primitive, unique and immutable value

cannot be recreated even to symbols with the same description are different

```jsx
const sym1 = Symbol('id');
const sym2 = Symbol('id');
```

```jsx
console.log(sym1 === sym2); // false
```

Creating a symbol

we use the datatype symbol() to uniqify the item

sysmbol(descrription) - optional destrciption for debugging

Symbols as object keys 

can be used as object property keys without them colliding with the datatype it is stored in 

```jsx
const sym = Symbol('key');
const obj = {};
obj[sym] = 123;
```

```jsx
console.log(obj[sym]); // 123
console.log(obj.key); // undefined (no collision)
```

Use cases

Used for uniqufiying properties with same infomation