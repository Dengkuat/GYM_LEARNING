**What is useRef?**

- This is a react hook that stores a value that does not cause a re-render when it changes

**basic syntax**

```jsx
import {useRef} from "react"
const myRef = useRef(intitalValue)
```

useRef returns an objects

```jsx
{
	current:initalValue
}
```

so the real value is stored inside the 

```jsx
myRef.current
```

**Important rules with useRef**

useRef always returns the same object on every render

```jsx
const ref = useRef(0);

//so even if the componet re-renders
//ref will never changes
ref === ref  // always true
```

This is why it is good for storing values

- timers
- Dom elements
- previous values
- mutate variables

**Two main uses of useRef**

1. **Accessing DOM element**

**focus an input**

```jsx
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

- So this gives use direct access to the DOD elements

1. **Storing values without re-rendering**

```jsx
const countRef = useRef(0);

const increase = () => {
  countRef.current++;
  console.log(countRef.current);
};
```

- So even if countRef changes that wont cause any re-rendering in the component

**Difference between useState and useRef**

**with useState**

```jsx
const [count, setCount] = useState(0);

setCount(count+1)

//when the componet re-renders then the user interface udates, meaning count udates is shown
```

**useRef**

```jsx
const countRef = useRef(0);

countRef.current ++;
//cause no re-render and user interface wont update but count will change
```

**When would u useRef than useState**

- Timers

```jsx
const intervalRef = useRef(null)

intervalRef.current = setInterval(...)
clearIntervale(interval.current)
```

- Accessing DOM Element

→focus input

→scroll to element

→measure element size

- store previous value

```jsx
const previousValue = useRef();
previousValue.current = value
```

**Why useRef instead of useState?**

- useRef stores mutable values that persist across render without causing a re-render