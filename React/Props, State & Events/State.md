React components are function that return something[JSX] and they don’t remember so they forget everything, so we need the state 

**What is state?**

- State is memory that belongs to a React component, it stores information that can change overtime and affect when the component can render

**When is state used?**

We use state when we want the component to remember or track something that can change overtime

- user input(form)
- Toggle button(open/close)
- Counter like likes, clicks, votes
- Fetched data from API
- Showing/Hiding UI elements
- Any UI that updates dynamically

**Creating a state?**

```jsx
import {useState} from 'react';

function Counter(){
	const [count, setCount] = useState[0]; //so the initial count value is 0
	
	return (
		<div>
			<p>Count:{count}</p>
			<button onClick={()=>setCount(count + 1)}>Increase Count</button>
		</div>
	)
}

- useState tells React to remember this value
- count is the current state of value
-setCount is a function that updates the state and triggers a re-render

```

**Rules when using state**

**State updates are async**

- React schedules updates, they don’t happen immediately
- console.log(state) after setState may still show the old value

**Never mutate state directly**

- setState([…state, 1])

**when new state depends on the old state then** 

- setCount (prev ⇒ prev + 1) so we use a callback function

**What happens when states change?**

- React re-runs the component function(Re-render)
- React recalculates the UI
- React Updates the DOM efficiently

**Why are state important**

- UI changes dynamically
- It separates static and dynamic parts of a component
- Helps react optimise rendering
- Make code predictable

KEY → State does not change the UI directly, it just triggers a change that re-renders and calculates the whole thing again to update the changes that has already been made 

**useState**

```jsx
const [count, setCount] = useState[0]
```

From code

**useState[0]** 

- so we telling react to create a memory with an initial value of 0
- this is only used on the first render else the other future ones are ignored

**count**

- This is the current value of the state
- React gives it to you on every render
- It is readonly and cannot be edited

**setCount**

- This will be the only way to change state

```jsx
setCount(5);
```

So react will do this when we call the setCount

- stores the new value
- Schedule a re-render
- Re - runs the component with a new state

**summary** 

| **Event** | **State change** | **UI update** |
| --- | --- | --- |
| Click + button | setCount(count + 1) | <p>Count: {count}</p> shows new value |
| Type in input | setName(e.target.value) | Input field shows typed value |
| Toggle modal | setOpen(true/false) | Modal appears/disappears |

**Why are state update asynchronous** 

1. React batches updates for performance

```jsx
const [count, setCount] = useState(0);
function handleClick(){
	setCount(count+1)
	setCount(count+1)
	setCount(count+1)
}
```

- Here react updates state asynchronously because immediate update then it would re-render very many times in this case 3 times slowing perfomance
- Instead react batches updates together and does only one re-render at the end of the event

```jsx
setCount(prevCount => prevCount+1)
```

- PrevCount is always the latest update incase we have multiple events at the same time, since setCount(count+1) could overcome or overwrite each other

**Vitual Dom and render reconciliation**

- React doesn’t immediately touch the DOM when state updates
- It updates the vitual Dom first then in Difing it compares if there are changes, then applies them in a single render
- Async state ensure React can optimize renders and avoid unnecessary render and work

**State types based on datatype** 

**Number State**

- Used in storing numeric values

```jsx
const [count, setCount] = useState(0)
```

used for;

- counters, prices, scores, calculator results
- The type in a number comes as a string from <input> so we covert it first to numbers by setValue(Number(e.target.value))

**String State**

used for;

- input fields, text, search queries, Names, calculator display

```jsx
const [name, setName] = useState("")
```

**Boolean State**

- It can either be true or false

used for;

- Toggle UI, Dark mode, modal open/close, loading states

```jsx
const [isOpen, setIsOpen] = useState(false)
```

**Array State**

used for;

- Lists, Todo apps, cart items, messages

```jsx
const [items, setItems] = useState([])
```

NOTE; we must update the array state immutably

```jsx
setItems([...items, newItems])

//not like this
items.push(newItem)
```

**Object State**

used for;

- grouping related values

```jsx
const [user, setUser] = useState({
  name: "",
  age: 0
})
```

When we updating it

```jsx
setUser({
  ...user,
  name: "Deng"
})
```