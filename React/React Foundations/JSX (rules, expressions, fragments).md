**What is JSX?**

- JSX(JavaScript XTML) is a syntax extension for JavaScript that looks like HTML buts lets you write UI in React inside JavaScript
- So instead of a document.createElement(), we can write

```jsx
const element = <h1>Hello, Deng</h1>
```

- React then compiles it to plain JavaScript behind the scenes

JSX Rules

1. **JSX must have a single root element**
- You can’t return two sibling elements directly, they must be wrapped like this

```jsx
INVALID
const element = <h1>Hello</h1><p>World</p>

VALID
const element = (
	<div>
	<h1>HEllo</h1>
	<p>World</p>
	</div>
)
```

1. **Use className instead of class**
- class is reserved in JS, so React uses className.

```jsx
<div className='container'>Content</div>
```

1. **JSX tags must be closed**
- Both self-closing and normal tags must be closed properly

```jsx
<img src="logo.png" alt="Logo" />  // self-closing
<p>Hello</p>                        // normal
```

1. **JSX must have expressions wrapped in {}**
- Any JS value(variable, calculations, functions) all goes in {}

```jsx
const name = "Deng";
const element = <h1>Hello, {name}!</h1>;
```

1. **JavaScript Expression only no statements**
- Expressions produce a value, statements like if, for, while cannot go inside {} directly

```jsx
//  Expression
const x = 5;
<p>{x + 10}</p>

// Statement
// <p>{if (x > 0) { "Yes" }}</p>  // 
```

1. **JSX Expressions**
- JSX expressions are any JS code that returns a value, they are placed inside {}

```jsx
const a = 10;
const b = 20;

const element = (
  <div>
    <p>Sum: {a + b}</p>
    <p>{Math.random()}</p>
    <p>{a > b ? "A is bigger" : "B is bigger"}</p>
  </div>
);
```

key point

- Can include variables, operations, ternary operations, logics, function calls
- Cannot include, statements, so instead we can use the ternary operators or map as a higher order function

1. **JSX Fragments**
- Fragments lets you return multiple elements without an extra wrapper

<div></div> shorter syntaxed as <></>.

```jsx
	//	Short syntax (<> </>):
const element = (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);

//	Long syntax (<React.Fragment>):
const element = (
  <React.Fragment>
    <h1>Hello</h1>
    <p>World</p>
  </React.Fragment>
);
```

**Why do we use fragments?**

- Keeps the DOM clean, avoid unnecessary <div> wrappers

**Example**

```jsx
const name = 'Deng';
const items = ['Apple', 'Banana', 'Cherry'];

const elements = (
	<>
	<h1>Hello, {name}!</h1>
	<ul>
	{
	items.map((item, index) => 
	<li Key={index}> {item}</li>
	))
	}
	</ul>
	</>
)

Expressions are used {name} and {items.map...}
fragments <>, </>
proper key prop for list items
```