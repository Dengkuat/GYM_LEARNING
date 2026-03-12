**What is The vitual Dom**

- This is a lightweight copy of the real DOM stored in memory

```jsx
Real DOM
<h1>Hello Deng</h1>

Vitual DOM
{
  type: "h1",
  props: {
    children: "Hello Deng"
  }
}
```

**How does React use the vitual DOM**

- When a state changes
- React creates a virtual DOM
- It then compares(Difing) the old virtual Dom and the new virtual Dom to spot out what has changed
- The react updates the real DOM only the parts that have changed

**Key terms to keep in mind**

- Virtual Dom is a JS representation of the real Dom stored in the memory used for efficient updates
- Reconciliation is the process when react updates the UI when state change
- Diffing is when react compares the old virtual Dom and the new virtual Dom to detect and spot out what exactly has changed
- React Fiber is reacts internal engine that manages updates and rendering

React Fiber was interoduced in React 16 that allows 

- interruptible rendering
- scheduling
- better performance

- Commit Phase is when react applies the changes to the real DOM and when useEffect runs