**What is an enum?**

- An enum groups related named constant into a single type, it gives readable names and sometimes runtime values instead of raw number/ strings
- Enums can exist at runtime or be erased by the compililer

### **Numeric enums**

```tsx
enum Direction {
	Ip, - 0
	Right, - 1
	Down, - 2
	Left - 3
}
```

**Key Behaviors** 

- Members without intitalizers auto-increment starting from 0 or from previous numeric values
- So we can assign explicit numeric values Up: 1, then next auto increments
- Reverse Mapping: numeric enums creates a two way mappping in emitted js;Direction [Direction.up] === ‘up’ and direction [’up’] === 0

Emitted JS

```tsx
var Direction;
(function(Direction){
	Direction[Direction['up'] = 0] = 'up';
	Direction[Direction["Right"] = 1] = "Right";
  Direction[Direction["Down"] = 2] = "Down";
  Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));

You can use either Direction.Up (gives 0) or Direction[0] (gives "Up")
```

**Computed and Constant Members**

- A member initialized with a constant expression (literal or constant) is a constant member, the compilter can evaluate it at compile time
- A member initalized with a non-const/ computed expression like Date.now(), Math.random()

**Heterogenous enums**

- So here we can mix a number and strings eg A = 1 and B = x, so we need to avoid this
- So they are great for bit flags, ordered numeric states, or when you want reverse mapping at runtime

### **String enums**

```tsx
enum State {
	Success = 'Success',
	Failure = 'Failure',
	Pending = 'Pending'
}
```

- Each member must have an initalizer(So there isnt auto increment for strings)
- Emitted Js is a simple object mapping names to string values(reverse mapping)
- NO numeric reverse mapping available
- Status["SUCCESS"] is undefined — you only have Status.Success === "SUCCESS".

**Emited Js**

```tsx
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
```

- String enums are safe for logs, deburgging, or when values must be stable accross building (strings are explicit)
- They behave like runtime object( where we can inherite our keys) but you cannot not reverse look from value back to name

### **Const enums(constant enums)**

```tsx
const enum Roles {
  Admin,
  User,
  Guest
}

const r = Roles.Admin; // compiled to number literal 0
```

- Const enums is inlined at compile time, references are replaced with the literal value, the emitted JS contain no enums object

**Emitted JS**

```tsx
const r = 0; // no enum object
```

- If we use - - preserveConstEnums they compiler will still emite an object, but by default they are removed

**Limitation**

- Because const enums are erased, you cannot relay on runtime features like iterating enums members or reverse mapping

### **Ambient enums(Declare enum)**

- Used when values come from external code such as js library yet we want ts typing but no emitted js

```tsx
 declare enum External {
  A = 1,
  B = 2
}
```

- This tells ts the shape exist at runtime elsewhere, the comilter wont emit the code

### Common examples and there use cases

```tsx
bit flags 
enum FilePerm {
  Read  = 1 << 0, // 1
  Write = 1 << 1, // 2
  Exec  = 1 << 2  // 4
}

const p = FilePerm.Read | FilePerm.Write; // 3
const canWrite = (p & FilePerm.Write) !== 0;

restricting to keys or values 
enum Color { Red = "red", Green = "green", Blue = "blue" }

// union of enum values
type ColorValue = typeof Color[keyof typeof Color]; // "red" | "green" | "blue"

// union of enum keys
type ColorKey = keyof typeof Color; // "Red" | "Green" | "Blue"

```

**Best Practices, when to use which**

- Prefer **string enums** when values must be stable, readable in logs, or used across systems (APIs, DB).
- Use **numeric enums** for compactness, reverse lookup needs, or bit flags.
- Use **const enum** for maximum performance / smaller output *only* if your build supports it (isolatedModules must be off) and you don’t need runtime enum objects.
- Consider **as const + union types** when you only need type-level safety and want zero runtime overhead, or when tooling disallows const enum.
- Avoid heterogeneous enums (mixing strings and numbers).
- If you rely on runtime iteration or reverse mapping, do **not** use const enum.

**Pitfalls**

- Expecting reverse lookup on string enums (not available).
- Using const enum in module systems/tools that disallow inlining (isolatedModules).
- Assuming enum values are unique (two members can share same value).
- Relying on emitted enum object for runtime reflection if you used const enum (it will not exist).
- Using computed initializers incorrectly — computed members can prevent auto-increment for later members.