# Interview Questions

Weak Map Basics

Weak Map is a special kind of Map where

Key must be an object - primitive like string and not number

keys are held weakly - if key has no other reference, it can be gabage-collected automatically

this is used in storing data associated with objects without preventing them from being removed from memory

```jsx
const weakMap = new WeakMap();
```

```jsx
weakMap.set(keyObject, value);
weakMap.get(keyObject);
weakMap.has(keyObject);
weakMap.delete(keyObject);
```

when storing private data

```jsx
const _privateData = new WeakMap();
```

```jsx
class Person {
constructor(name, age) {
_privateData.set(this, { name, age });
}
```

```jsx
getInfo() {
const data = _privateData.get(this);
return ${data.name} is ${data.age} years old;
}
}
```

```jsx
const alice = new Person('Alice', 25);
console.log(alice.getInfo()); // "Alice is 25 years old"
```

```jsx
// If alice is no longer referenced anywhere,
// its entry in _privateData will be garbage-collected automatically.
```

key

we cannot iterate through this WeakMap.

WeakSet

WeakSet is a special type of Set where 

Only objects can be stotred - not numbers or strings

objects are helds weakly, meaning they can be gabage collected if there is no other reference

Usefull for traacking objects without preventing memory cleanup

```jsx
const weakSet = new WeakSet();
```

```jsx
weakSet.add(obj);
weakSet.has(obj);
weakSet.delete(obj);
```

Tracking visited Objects

```jsx
const visitedNodes = new WeakSet();
```

```jsx
function visitNode(node) {
if (visitedNodes.has(node)) {
console.log('Already visited this node');
return;
}
```

```jsx
visitedNodes.add(node);
console.log('Visiting node:', [node.name](http://node.name/));
}
```

```jsx
let nodeA = { name: 'A' };
let nodeB = { name: 'B' };
```

```jsx
visitNode(nodeA); // Visiting node: A
visitNode(nodeA); // Already visited this node
visitNode(nodeB); // Visiting node: B
```

```jsx
nodeA = null; // Node A can now be garbage-collected
```

there is no iterations or size

we cannot loop through WeakSet and check it size

**1. Explain the difference between Map and WeakMap**