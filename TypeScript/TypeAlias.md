**Type Alias**

- A type alias let you give a name to any type, icluding primitive types, unions types, tuples or object shape
- So instead of repeating the data type name everywhere we can give the shape a name we can use

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

**In usefull situations**

```tsx
type ID = string
let userId: ID = "abc123"
```

**So why use type alias**

- Makes code readable
- Make meaning more clear and less verbose

```tsx
ok lets make a comparison
let id: string
let id: ID   // clearer meaning
```

**What interface cannot do but type alias can**

- When using type union

```tsx
type ID = string|number

meaning the id can either be a string or a number 
so now both cinarials will do 
just like this
let userId: ID

userId = "abc"
userId = 123
```

**When we use type alias in real life situation/ day to day life**

```tsx
type status = ‘loading’|’success’|’error’

So now this allows use to check the current status 
let currentStatus: status
currentStatus = "loading"
currentStatus = "success"
```

So we can say in short that type alias limit values to only allowed options

So type alias is same as object interface. infact no difference only how we want to use it 

**Lets give an example**

```tsx
interface User {
  name: string
  age: number
}

type User = {
  name: string
  age: number
}
```

**Where can we use Type Alias**

- For function

```tsx
type Add = (a: number, b:number) => number;

and then we can use it like this
const add : Add=(a, b) => a+b;

So here we defined how the structure of a callback should really be
```

- For arrays and tuples

```tsx
type Names = string[]
const students: Names = ["Deng", "John"]

type Point = [number, number]
const position: Point = [10, 20]

So here we see that object interface cannot do tuples yet type alias can
```

**Why pro would use type alias?**

- Strict control of values
- better autocomplete
- safer apis
- clear business rules

```tsx
type Role = "admin" | "student" | "teacher"
```

- so like this the bugs can be prevented before runtime.