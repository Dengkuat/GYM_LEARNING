Enums/ Enumeration

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