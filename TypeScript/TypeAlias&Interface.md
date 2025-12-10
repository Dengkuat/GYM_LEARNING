**Type Alias**

- A type alias let you give a name to any type, icluding primitive types, unions types, tuples or object shape

```tsx
type point = {
	x: number;
	y: number;
};

const p1: point = {x:10 y:20};
```

- This can represent anytype

```tsx
type ID = number | string;  // Union type
type NameTuple = [string, string]; // Tuple
```

**Interface**

- An interface defines the shape of an object(properties and methods)

```tsx

```