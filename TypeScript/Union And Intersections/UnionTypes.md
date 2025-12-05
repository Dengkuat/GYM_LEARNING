**What is a union type?**

- A union type represents a value that can be any one of multiple distinct types
- A union type means a value is allowed to be one of several possible types

**Example**

```tsx
let result: string|number;
```

**Why does it exist?**

- Javascript is dynamic, values can switch between types(string, number, object).
- TypeScripts need a way to express multiple possible shaps or ways.
- So simply union mean we can recive this or this or this multipes types.

**How does TypeScript unions internally?**

When TS sees a union then it works in 2 steps 

- Widening
It knows all possibilites

```tsx
let x: string|number;
so x could be either a string or a number it has multiple types 
```

- Narrowing
whenever you do a check

```tsx
if(typeof x === "string"){

	}
	ts removed the other possibilities and you have now only string inside the block
```

**Examples**

```tsx
//function with multiple input types
function format(value: string|number){
		return value.toString()
	}
	
	//API response that maight fail
	type response = {data:string}|{error:string};
```

**Real word use cases**

- handling diffent API states
- Functions that accept different types
- DOM Elements(HTML element| null)
- Values that toggle between states
- Props in React that accept multiple types

**What to watch out for?**

- When u call a method that is not on both types or union members

```tsx
function test(x.string|number){
 x.toUpperCase()
}

??why because we cannot use .toUpperCase on a number
```

**What can we do with the union error?**

```tsx
function check(input: string | number) {
  if (input === 5) {
    return input.toFixed();
  }
  return input.length;
}
```