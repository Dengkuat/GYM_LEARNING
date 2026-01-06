Why does Generics matter?

- Generics are same as type variables
- They let you write reusable, type-safe code

What Generics prevent?

- any use case
- runtime type errors
- duplicated functions or classes

So you may not know the type yet but you want type script to remind or bring it up later

Generic Functions

1. Basic Function

```tsx
function identity<T>()value: T{
	return value
}
identity<number>(5)
identity('hello') // T gets inferred
```

- <T> is a placeholder
- Type is inferred if not provided
- Return type matches the input type

1. Multiple Generics in a single function

```tsx
function pair<T, U>(a:T, b:U){
	return [a, b]
}
```

1. Generic Arrow Function

```tsx
const wrap = <T>(value:T): {value:T} => {
	return {value}
}
```

Question

Why would u prefer using generics to any?

Any

- Losses type safety
- Any type can be used without errors where the errors wont be cought in compile time as they should be intended to

Generic

- Preserves type information
- We maight not know the type but it can be inferred from the input

**Generic Interface**

1. Basic Interface

```tsx
interface ApiResponse<T>{
	data: T;
	success:boolean;
}

const response : ApiResponse<string[]> = {
	data:['js', 'ts'],
	success: true,
};
```

1. Multiple Generics

```tsx
interface keyValue<k, v>{
	key:K
	value:V
}
```

1. Generic Interface in Function

```tsx
function fetchData<T>():ApiResponse<T>{
	return {
		data:{} as T,
		success: true,
	}
}
```

**Generic Classes**

1. Basic class

```tsx
class Box<T>{
	content:T
	
	constructor(value:T){
		this.content = value;
	}
}

const numberBox =new Box<number>(10);
const stringBox = new Box('hello')
```

Interview style

```tsx
class Storage<T>{
	add(item:T){
		this.items.push(item);
	}
	getAll();T[]{
		return this.item;
	}
}

- class works for any type
- Type consistency is enforced
```

**Constraint Extends**

1. Basic constaint
- This is very confusing at first glance.

```tsx
Basic getLength<T extends {length: number}>(item: T):number{
	return item.length
}
```

- Not all types have length
- Constraint limit what T(generic can be)

1. Contraint with interfaces

```tsx
interface HasId{
	id:number
}
function findById<t extends HasId>(items: T[], Id:number:T|undefined{
	return items.find(item=>item.id===id);
})
```

1. Keyof constraint 

```tsx
function getProperty<T, k extends keyof T>(obj:T, Key:K){
	return obj[Key]
}
```

**Default Generic Values**

1. Default Type

```tsx
interface Response<T= string>{
	data: T;
}

const r1: Response = {data:"Ok"} so string by default
const r2: Response<number> = {data: 200};
```

1. Default in Function

```tsx
function createArray<T = string>(value: T): T[]{
	return [value];
}
```

- Reduces verbosity
- Keeps flexibilty