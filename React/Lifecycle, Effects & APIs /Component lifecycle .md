**What does a component cycle really mean?**

- A component is a almost the same as a living thing

→Birth

→A life(updates)

→Death

That entire journey is called a component life

**There are three main lifecycle phases**

1. Mounting(Component birth)
2. Updates(Component changes)
3. Unmounting(Component death)

**Mounting**

- React creates the component
- React puts it on the screen for the first time

This can include

- Component functions runs
- JSX is rendered
- Component appears in the browser

**Updating**

This happens when;

- state change (setState)
- props change
- parent re-renders

**Unmounting**

This happens when;

- Component is removed from the screen

such as

```jsx
conditional rendering({
	show&&<component/>
})
```

- page navigation
- component replaced by another

**Reality check on this tho**

React components do not run all at once

They run as

- on mount
- on every update

**Old vs Modern way** 

Old

- componentDidMount
- componentDidUpdate
- componentWillUnmount

Modern

- useEffect()

So useEffect replaces all lifecycles methods

Full cycle

```jsx
Component created
   ↓
Rendered to screen   ← MOUNT
   ↓
State / Props change
   ↓
Re-render            ← UPDATE
   ↓
Component removed
   ↓
Cleanup              ← UNMOUNT
```

**Why understanding lifecycles is very crucial** 

- Fetching data in the wrong place
- Creating infinite loops
- causing performance issues
- Don’t understand why API’s keep calling
- Don’t understand cleanup (memory leaks)

**Mapping Lifecycle to useEffect**

UseEffect is how functions component interact with the cycle

- **Render first then effect runs**

**UseEffect and Mounting**

Mounting = component appears on the first time

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

- Empty dependency array[]
- Effect runs once
- After first render

This is where then we 

- Fetch data
- Starts timers
- Subscribe to events

**UseEffect and updating**

Update = state or props changes

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

- runs on mount
- runs again every time count changes

This is how react says it

- Watch this value , when it changes run the effect

**UseEffect with no dependency array**

```jsx
useEffect(() => {
  console.log("Runs every render");
});
```

- on mount
- on every update

**Unmounting = cleanup**

Unmounting happens via cleanup function 

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

- component is removed
- Before effect re-runs

Used for 

- Clearing timers
- Removing listeners
- canceling API requests

**LifeCycle → useEffect cheat sheet**

| **Lifecycle Phase** | **useEffect Pattern** |
| --- | --- |
| Mount | useEffect(fn, []) |
| Update | useEffect(fn, [deps]) |
| Every render | useEffect(fn) |
| Unmount | return () => cleanup |

Where Fetching data fits

- After mounting
- Some times after updates

```jsx
useEffect(() => {
  fetchData();
}, []);
```

**Why dependency arrays matter**

- [] → once
- [id] → when id changes
- none → every render