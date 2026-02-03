1. **In one sentence: what problem does React solve?**
- React solves problem of keeping the user interface in sync with changing data without manually manipulating the DOM and using the vital DOM.

1. **Is React a library or a framework, and why does that matter?**
- React is a JS library, React focuses on building UI, leaving decisions like routing state management, and data fetching to the developers.(A library lets you control when and how it should be used)

1. **If React re-renders a component, does it recreate the DOM? Explain precisely.**
- No, React re-runs the component function to produce a vital DOM tree, then in a process called diffing it compares the vital DOM to the real DOM incase anything has changed then it updates the changed part only in the real DOM instead of rewriting everything and reloading the whole page

1. **Why is setState (or setCount) asynchronous?**
- Because React batches states updates to optimize performance and avoid unnecessary re-renders, so the state updates updates are scheduled, not applied immediately

1. **Why can this be dangerous?**

```jsx
setCount(count + 1);
setCount(count + 1);
```

- Because the result use the same stale value of +1 and not acctually incrementing the count so we have to do something like this

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

- So we use a callback function that  takes the previous value and increments it by one

1. **Why does React insist on immutable state updates?**
- Because React uses reference comparison, not deep comparison to detect changes, so mutating state keeps the same reference making React to skip the rendering

1. **What actually triggers a re-render in React?**
- A re-render happens when

→ state change

→ props change

→ parent component re-renders

1.  **If a parent re-renders, do all children re-render?**
- Yes by default, React re-renders. child component unless they are memoized (React.memo)
1. **Controlled vs uncontrolled inputs — what’s the real difference?**
- Controlled inputs is where React is the single source of truth, while uncontrolled is where DOM manages the input value

1. **Why is using array index as key dangerous?**
- Because when the items in the array reorder, then React may associate state with the wrong element, causing subtle bugs. So it is more advisable to use index so the values are not wrongly associated when the array is sufled