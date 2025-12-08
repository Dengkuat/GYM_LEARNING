### **Function Parameter Types**

**NOTE:**In TS, every function parameter must have a type annotation, this prevents passing wrong types

```tsx
function greet(name:string, age:number){
	console.log(`hello ${name}, you are ${age} years old`);
}

so name: can only take a string
age: can only take a number
If we call something else then ts will throw an error
```

```tsx
const add = (a:number, b:number): number =>{
	return a+b;
}

//this ): number is to be our return type
```

### Optional Parameters

- This is marked with ?
- Must come after required parameters

```tsx
function greetOptional(name:string, age?:number){
	if(age){
		console.log(`${name} is ${age} years old`)
	}else{
		console.log(``${name}'s age is unknown)
	}
}

greetOptional('Deng')
greetOptional('Deng', 20)
```

### Default Parameters

- This gives a default value if the argument is missing
- Optional parameters can be replaced with the default parameters

```tsx
function greetDefault(name: string, age:number = 18){
	console.log(`${name} is ${age} years old`)
})
greetDefault('Deng') 
greetDefault('Deng', 25)
```

NOTE: Default paraters are implicitly optional, no need for optional parameter ?

### Return Types

- You can explicitly define what function will return

```tsx
function multiply(a: number, b: number):number{
	return a*b;
}
```

- So we see that :number must return a number
- TS can infer return types. automatically, but explicite typing is safer, especially for complex functions

### Voild return types

- void function does not return anything

```tsx
function logMessage(message:string):void{
	console.log(message);
}
```

### Never return type

- never function never returns anything, usually for error

```tsx
function throwError():never{
	throw new Error('something went wrong');
}
```

### Rest Parameters

- Used when a funtion can take any number of arguments
- It is always the last parameter
- Returns an array

```tsx
function sumAll(...numbers:number[]):number{
	return numbers.reduce((a, b) => a+b, 0);
}
sumAll(1, 2, 3, 4) 

//output
//10
...numbers: number[] all arguments are numbers
```

### Function Overloading

- TS supports function overloading, meaning a function can have multiple signatures
- Signitures declaration first
- Implementation first

```tsx
function combine(a:number, b:number):number;
function combine(a:string, b:string):string;
function combine(a:any, b:any):any{
	return a+b;
}
combine(1, 2) //3
combine('Hello', 'World') //HelloWorld
```

- overloading allows type-safe variation
- Implementation use any or union type internally, but external callers see only allowed signatures
- So we can say overloading is just a common utilites just like concat, slice

### Arrow function

- Capture this differently than the normal functions
- syntax supports parameter types and return types

```tsx
const greetArrow = (name: string):string => `Hello ${name}`;
```

### Anonymous function

Usefull for callbacks

```tsx
[1, 2, 3].map((x: number) => x * 2);
```

### Function as a type

- Functions themselves can have types of varaition or parameters

```tsx
type MathOp = (a:number, b:number) => number:
const add: MathOp = (a, b) => a+b;
```

### This parameter

TS allows typing this in functions

```tsx
function showName(this: { name: string }) {
  console.log(this.name);
}
```