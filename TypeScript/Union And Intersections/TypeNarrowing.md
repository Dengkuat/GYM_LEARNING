**What does type narrowing mean?**

- Norrowing reduces a union into a specific type by doing a check

**Types of narrowing?**

- typeof narrowing

they use typeof on primitives

```tsx
function print(value: string|number){
	if(typeof value === 'string'){
		return value.toUpperCase();
	}
	return value.toFixed();
}
```

- Equality narrowing

checks with === !== == !=

```tsx
function check(x: number | string) {
  if (x === 5) {
    return x.toFixed();
  }
  return x.length;
}
```

- Truthiness narrowing

if value is nothing simplynull or undefined

```tsx
function show(el: HTMLElement | null) {
  if (!el) return;  
  return el.style.color = "red";
}
```

- instanceof narrowing

works with class instance

```tsx
function log(date: Date | string) {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date.toUpperCase();
}
```

- In Operation narrowing

```tsx
type success = {date: string}
type failed = {error: string}

function handles(res: success|failed){
	if('data' in res{
		return res.data
	}
	return res.error;
}
```

- Discriminated unions

Very important feature

Adds a common literal property for each type, then narrow by checking it 

```tsx
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; size: number };

function area(shape: Circle | Square) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.size * shape.size;
}
```

- Exhaustive checking (never used)

Ensures all branches are covered

```tsx
function handleShape(s: Circle | Square) {
  switch (s.kind) {
    case "circle":
      return s.radius;
    case "square":
      return s.size;
    default:
      const neverType: never = s; // ❌ error if not all covered
      return neverType;
  }
}
```