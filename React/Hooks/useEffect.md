**React components do two things**

- They render user interface
- They perform side effects

**A side effect** is anything that happens outside the react rendering process

**Examples of side effects can be;**

- fetching data from an API
- Setting a timer
- Updating the document title
- Listening to events
- Reading from local storage

**Code examples**

When we do this

```jsx
document.title = "Dashboard"
```

React will re-render very many times, so we don't want to update the title inside the component body

```jsx
useEffect()
```

So we useEffect a react hook to control when the side effect runs and when we want it to actually run

**Basic syntax of useEffect**

```jsx
useEffect(() ={
	side effect code
});
```

**When does useEffect run?**

- useEffect runs by default after the rendering of a UI

```jsx
function App(){
	useEffect(() => {
		console.log("Effect running")
	})
	return <h1>Hello</h1>
}
```

```jsx
Component renders
↓
React updates DOM
↓
useEffect runs
```

**The dependancies arrays**

- This changes when the effects actually run

**Case 1: No dependency array**

```jsx
useEffect(() => {
   console.log("Runs every render");
});

Render 1
Render 2
Render 3
Render 4
```

**Case 2: Empty dependency array**

```jsx
useEffect(() => {
   console.log("Runs once");
}, []);
```

So with empty dependency array useEffect runs only ones when the component mounts 

**Case 3:With dependencies**

```jsx
useEffect(() => {
	console.log("Runs when count changes")
}, [count])
```

```jsx
count = 0 → effect runs
count = 1 → effect runs
count = 2 → effect runs
```

**Real world use case**

Updating Document title

```jsx
import {useState, useEffect} from "react"

function App(){
	const [count, setCount] = useState(0)
	
	useEffect(()=>{
		document.title = `clicked ${count} times`
	})	
	
	return(
		<button onClick={() => setCount(count+1)}>
			click{count}
		</button>
	)
}
```

So now every time a button is clicked then 

```jsx
count changes
↓
component re-renders
↓
useEffect runs
↓
title updates
```

**Cleanup Functions** 

Sometimes useEffects effects create things that must be cleaned up

**Examples**

- timers
- intervals
- event listeners
- subscriptions

**Use case(interval with a cleanup)**

```jsx
useEffect(()=>{
	const interval = setInterval(() => {
		console.log('Running');
	}, 1000);
	
	return() => {
		clearInterval(interval)
	}
}, []);
```

- This all prevents memory leaks