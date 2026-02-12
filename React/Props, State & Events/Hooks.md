**What is a hook?**

- A hook is a special React function that lets functions components use features like;

→state

→lifecycle behavior

→context

→references

→performance optimisations

- Before hooks class components would use state only but after hooks was brought in then function components can do anything

**JS hooks** 

1. **useState**
- This is the most important hook and most used because it allows a function component to have states

```jsx
const [value, setValue] = useState(initialValue);

//Example
const [count, setCount] = useState(0)

->count stores the current value
->setCount is can update the state
->(0) is the intital value

//This is how we can then update count
setCount(count + 1);
->React updates the state
->the component re-renders
->UI updates automatically

```

**Question**

**Why not increment the count directly?**

```jsx
let count = 0;
count++

->React will not re-renders in that way tho count will change
->React only re-render when a state changes or a prop changes
->Thats why setCount changes and its a state then the component re-renders
```

**where Props comes in?**

```jsx
function Parent(){
	const [count, setCount] = useState(0);
	
	return (
		<div>
			<Child count = {count}/>
		</div>
	)
}

->Here then count is a State in Parent component
->Count becames a prop in child 

So then?
->useState creates state
->setState updates state
->props distribute state
```

1. **useEffect**
- Used for side effects

Such as

- Fetching data
- Timers
- Listening to events
- API Calls

1. **useContext**
- Used to avoid passing props deeply

Instead of passing data in such a way

```jsx
parent -> child -> grandchild -> greatgrandchild
```

- we can useContext to pass the data globally

1. **useRef**
- This is used for updating the Dom elements
- Storing values without re-rendering

5. **useMemo & useCallback**

- Used for performance optimization
- They prevent unnecessary re-rendering