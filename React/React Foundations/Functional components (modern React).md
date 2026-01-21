**What is a function component?**

- A function component is just a JavaScript function that

→ starts with a capital letter

→ return JSX

```jsx
function Welcome(){
	return <h1>Hello React</h1>
}

or
const Welcome = () => {
  return <h1>Hello React</h1>;
};
```

**Rules of Function components**

- Name must begin or start with a capital letter

```jsx
//  wrong
function welcome() {}

//  correct
function Welcome() {}
```

- Must return JSX or null

```jsx
const Empty = () => null;
```

- One root element(or fragment)

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

- Pure functions

→Same props → same UI

→No direct DOM manipulation only the vital DOM

**Why functional components are Modern React**

Before and after 

Before

- class components
- this, constructors, lifecycle methods

Now

- Hooks
- Clear syntax
- Easier to test and reuse each component or section

Functional components+ hooks ⇒ standard react today

**Props in functional components**

Props → are inputs to a component

```jsx
const Greeting = (props) => {
	return <h2>Hello, {prop.name}</h2>
};
```

Destructuring (most prefered)

```jsx
const Greeting = ({ name }) => {
  return <h2>Hello, {name}</h2>;
};
```

How we use that 

```jsx
<Greeting name="Deng" />
```

**JSX + Logic inside components**

we just use js before the return 

```jsx
const Status = ({isOnline}) => {
	const message = isOnline?"Online":"Offline";
	return <p>Status:{message}</p>
};

or inline
<p>{isOnline ? 'Online':'Offline'}</p>
```

**Event Handling in Function Component**

```jsx
const Button = () => {
	const handleClick = () => {
		console.log('Clicked')
	}
	return <button onClick={handleClick}>Click me</button>
}
```

**Returning Early (cleaner pattern)**

```jsx
const profile = ({user})=>{
	if(!user) return <p>No user</p>
	return <h1>{user.name}</h1>
}
```

**Arrow function shorter return**

```jsx
const Title = () => <h1>Fast component</h1>
```

We use this only for simple and single components

Question

1. **Why vital DOM and not direct DOM manipulation**
- Because Direct Dom manipulation is slo and messy, React’s vital DOM makes UI updates fast, predictable and efficient

1. **What is vital DOM**
- A light weight JS object
- A copy of the real DOM
- Keep in memory and very fast

1. **How does the vital DOM work**
- Initial Render

React builds a vital DOM tree

React renders it to the real DOM

- State Change

A new vital DOM is created

- Diffing

React compares old vs new vital DOM

Finds only what changed

- Reconciliation

React updates only the parts of the real DOM

1. **Key difference between why not manipulate React directly with JSX?**

Because JSX is declarative and not imperative

- Imperative (DOM manipulation)

```jsx
const el = document.getElementById("status");
el.style.color = "green";
el.innerText = "Online";
```

Where we must 

→find elements

→Tract states manually

→Update UI carefully

- Declarative (React+JSX)

```jsx
<p style={{ color: isOnline ? "green" : "red" }}>
  {isOnline ? "Online" : "Offline"}
</p>
```

what u say u want and how to work on it there and then

1. **Advantages of vital DOM**
- Performance

Fewer real DOM operation

Batched updates

- Predictability

UI - function(state)

Same state -same UI

- Cleaner code

no query selectors

no innerHTML

no manual sync between data and UI