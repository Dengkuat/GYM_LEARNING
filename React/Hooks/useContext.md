**Why does useContext exist?**

```jsx
App
 ├── Navbar
 ├── Dashboard
       └── Profile
             └── Settings
```

- So here if we wanted the prop to be used by the setting and the parent app is App then it the prop will have to pass through navbar, dashboard, profile even though they don’t need and wont use it this is called props drilling
- This all becomes annoying in larger apps

NB: So that is why context was brought in to allow sharing data without manually passing though every level

**Importance of useContext**

- This is a way to access shared data from the nearest provider

2 paths

- context → the container
- useContext → the book to read it

**steps to using useContext**

1. **createContext()**
- This creates the channel so its an import we import from react to the page or component

```jsx
import {createContext } from 'react';

const UserContext = createContext();
```

- We create the context object after importing it to the page

1. **Provider**
- This is where we decide who can access the data

```jsx
<userContext.Provider value={user}>
<App />
</userContext.Povider>
```

- The value props become available as the nearest
- All component inside the <Provider> can access it other-wads if a component is not inside the provider then it cant access the value without props drilling

1. **useContext()**
- Now inside any child component we can implement the useContext()

```jsx
import {useContext } from 'react'
const user=useContext(UserContext)
```

- Then now we can access the directly without need for any props

**Example**

```jsx
App.jsx
import { createContext, useState } from "react";
import Child from "./Child";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;

child.jsx
import { useContext } from "react";
import { ThemeContext } from "./App";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Child;

```

Now:

- We don’t need any props
- child can change state
- Everything will update

**What happening internally?**

- When Providers value change
- React will re-render all component using that context
- So if 10 components use it then 10 will all re-render

**when should we use it?**

- Theme(dark, light)
- Auth user
- Language
- App-wide setting

When don’t we use it

- large frequently changing data
- complex logic so we better use reducer and redux

NB: useContext does not replace state it just shares the state

**Questions**

1. Why do we need Provider?
- Because the provider makes it available to other components to use it

When we create a context

```jsx
const myContext = createContext();
->here we only created the object and nothing else just the channel
```

- But until we wrap it in something like this

```jsx
<myContext.Provider value={value}>

<myContext.Provider>
```

- createContext() → creates the container
- Provider → supplies the actual value

Where does the state actually live?

- State live where e declared it, usually inside the component that renders the Provider

```jsx
function App(){
	const [theme, setTheme] = useState('light')
	
	return(
		<ThemeContext.Provider value{{theme, setTheme}}>
			<child />
		<ThemeContext.Provider>
	)
}
```

- The state lives inside the App not the context
- Context just shares a reference to state not pass it
1. What causes re-render in context?
- When the value passed to the provider changes then it causes a re-render in context so in terms if the state change it causes a re-render to context
- It compares the value and triggers -render for all component using useContext(ThemeContext)

1. What problem does prop drilling create?
- Prop drilling means passing props through components that don’t need them so that causes several issues  like;

→repetitive code

→hard to maintain

→every middle component becomes cluttered 

→refactor becomes difficult

→Deep trees become messy

Solution

- useContext with context removed prop drilling by allowing

```jsx
const user = useContext(UserContext)
```

- It allows direct access to the component to access the prop