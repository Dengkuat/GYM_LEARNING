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