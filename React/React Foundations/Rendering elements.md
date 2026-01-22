**What is an element in React?**

- A React element is the smallest building block of a React App
- It describes what you want to see on screen

```jsx
const element = <h1>Hello, world</h1>
```

- Elements are plain JavaScript objects
- They are immutable and cannot be changed

**Rendering an element to the DOM**

In modern React 18

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
```

What is happening

- React takes the element
- Builds vital DOM
- Updates the real DOM

**Element vs Components**

- **Element**

```jsx
const element = <h1>Hello</h1>;
```

- it describes UI
- Immutable
- static snapshot

- **Component**

```jsx
const Title = () => <h1>Hello</h1>;
```

- functions that return elements
- can be reused
- Can have states and props

So in other words components create elements

**Re-rendering element**

- React does NOT update elements, it creates new ones

```jsx
const tick = () => {
  const element = <h1>{new Date().toLocaleTimeString()}</h1>;
  root.render(element);
};

setInterval(tick, 1000);
```

**What is happening**

- Creates a new element every second
- Compares with previous vital DOM
- Updates only the changed text

**Why elements are immutable?**

- Makes the UI predictable
- Diffing easy
- Performance better

**Conditional rendering(element level)**

```jsx
const isLoggedIn = true;

const element = (
  <h1>{isLoggedIn ? "Welcome back" : "Please log in"}</h1>
);
```

React then chooses which element to render

**Rendering lists of elements**

```jsx
const numbers = [1, 2, 3];

const element = (
  <ul>
    {numbers.map((n) => (
      <li key={n}>{n}</li>
    ))}
  </ul>
);
```

- each item = element
- Keys help React track changes efficiently

**What triggers re-rendering?**

- State changes
- Props change
- Parent re-renders

**Questions**

1. **What is rendering?**
- This is simply turning data into something visible on the screen

1. **In browser picture define rendering?**

This is when the browser reads HTML, builds the DOM tree(vital DOM), applied CSS, and paints pixels to the screen 

1. **In React, what is rendering**

Rendering in React is when React calls components functions to figure out what the UI should like 

**Steps** 

- React call a component and a component creates an element
- The component returns JSX that becomes a React element(JS object)
- React builds the vital DOM, by building a DOM tree
- It then compares(diffing) the old one and new DOM incase if the first render then no comparison but when it a re-render then it compares old vital DOM vs the new vital DOM
- React commits the changes to the real DOM, after the comparison is when then react updates the real DOM, as the browser paints the change which is called commit phased

1. **What is re-rendering?**
- Re-rendering is when react re-run a component function to calculate new UI

⇒In depth, re-rendering is the process of React re execute a component to compute a new vital DOM, then updates the real DOM if something has changed the creates the commit phase

1. **Re-rendering process?**
- React calls you component again
- React creates new React element
- React compares the old vs the new vital DOM(diffing)

6.**What triggers Re-rendering or why re-rendering?**

- State change (setCount, setTimeout, setTime intervals) so something has changes meaning then React has to recalculate the UI
- Props change (If a parent re-renders, children receive new props causing a re-render)
- Parent re-renders(Even if props did’t change, child components re-render by default )