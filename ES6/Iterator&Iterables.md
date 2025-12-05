What are iterables;

An itarable is an object that implements the symbolic.iterator method

eg, arrays, strings, Maps, Set etc

What is an iterator

An iterator is an object returned by calling an iteratables [symbol.iterator()] method

so it has a .next() method that returns {value and done}

```jsx
const arr = [10, 20, 30];
const iter = arr[Symbol.iterator](https://www.notion.so/Iterators-and-Iterables-252b532183ad801285b8c1e717c6e83e?pvs=21);
```

```jsx
console.log(iter.next()); // { value: 10, done: false }
console.log(iter.next()); // { value: 20, done: false }
console.log(iter.next()); // { value: 30, done: false }
console.log(iter.next()); // { value: undefined, done: true }
```

How do for of works

for of automatically calls the iterator of an interable

works on arrays, strings, map, set and custome iterables

```jsx
for (const val of [1,2,3]) {
console.log(val); // 1 2 3
}
```

Custom iterable

you can make ur own iterable bydefining [symbolic.iterator] 

```jsx
const myIterable = {
start: 1,
end: 3,
[Symbol.iterator](https://www.notion.so/Iterators-and-Iterables-252b532183ad801285b8c1e717c6e83e?pvs=21) {
let current = this.start;
const end = this.end;
return {
next() {
if (current <= end) {
return { value: current++, done: false };
} else {
return { value: undefined, done: true };
}
}
};
}
};
```

```jsx
for (const val of myIterable) console.log(val); // 1 2 3
```

Iterator helpers

.next() get the value and done 

value is the current value

done tells the iteration is finish

```jsx
const strIter = "hi"[Symbol.iterator](https://www.notion.so/Iterators-and-Iterables-252b532183ad801285b8c1e717c6e83e?pvs=21);
console.log(strIter.next()); // { value: 'h', done: false }
console.log(strIter.next()); // { value: 'i', done: false }
console.log(strIter.next()); // { value: undefined, done: true }
```

Use cases

iteration of custom data structure

controlled loops of generators