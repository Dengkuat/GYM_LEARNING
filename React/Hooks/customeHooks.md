- A custom hook is a simple function that uses other hooks

```jsx
function useCounter(){
	const [count, setCount] = useState(0);
	return {count, setCount};
}

```

- It is a Javascript function that uses the react hook where the name starts with ‘use’
- This enables react to treat it like a hook

**Why do they actually exist?**

- The solve logic reuse

```jsx
so instead of having differnet componets doing the same thing
then we use a reusable custome hook that does the same thing

 function ComponentA() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData);
  }, []);
}

function ComponentB() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData);
  }, []);
}

//Then we can have a custome hook that we can reuse
function useData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData);
  }, []);

  return data;
}

//and then when we want to use it 
const data = useData();

Custom Hooks = reusable stateful logic
```

**Rules of hooks**

- React relies on call order

So we cannot call hooks;

- inside loops
- inside conditions
- inside nested functions

```jsx
if (loggedIn) {
  useEffect(() => {})
}

useEffect(() => {
  if (loggedIn) {
    // logic
  }
}, [loggedIn])
```

**Anatomy of a custom hooks**

- every custom hooks is made of this pieces.

```jsx
inputs
state
effects
handlers
return values
```

**Example**

```jsx
function useToggle(intial = false){
	const [value, setValue] = useState(intial)
	const toggle = () => {
		setvalue(v => !v)
	}
	return {value, toggle}
}

//how do we use it then
const {value, toggle} = useToggle
```

**What hooks really are?**

- Hooks are like logical components
- This components reuse UI
- And hooks reuse logic

```jsx
Component = visual layer
Hook = behavior layer
```

**Example**

```jsx
function useFetch(url) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    async function fetchData() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [url])

  return { data, loading, error }
}
```

the hooks usage

```jsx
const { data, loading, error } = useFetch("/api/users")
```

**Hooks can also use other hooks**

cusom hooks compose

```jsx
function useUser() {
  return useFetch("/api/user")
}

or 

function useAuth() {
  const user = useUser()

  const isLoggedIn = !!user.data

  return { user, isLoggedIn }
}
```

This is all called hooks composition

**State isolation**

Each hook call has separate state

```jsx
const counter1 = useCounter()
const counter2 = useCounter()
```

They never share state

Each instance is independent

**Hooks design best practice**

```jsx
return{count, incremenet}
 and not 
 return[count, incremenet]
 

```

 objects are clear so it best we return object not arrays

**Various hooks to master** 

```jsx
useFetch
useLocalStorage
useDebounce
useThrottle
usePrevious
useToggle
useInterval
useWindowSize
useClickOutside
useAuth
```