**Lifting state**

- Moving state from child component to its parent so multiple components can share it

**Before lifting**

```jsx
function InputA() {
  const [value, setValue] = useState("")
  return <input value={value} onChange={e => setValue(e.target.value)} />
}

function InputB() {
  const [value, setValue] = useState("")
  return <input value={value} onChange={e => setValue(e.target.value)} />
}
```

- Both components have there own state so we would have to write the same code across the different component to show similarity between the two states(harder to debug, code verbose, code repetition)
- We cannot compute something using both

**After lifting**

```jsx
function Parent() {
  const [valueA, setValueA] = useState("")
  const [valueB, setValueB] = useState("")

  return (
    <>
      <InputA value={valueA} setValue={setValueA} />
      <InputB value={valueB} setValue={setValueB} />
    </>
  )
}
```

- So now the parent owns the state
- Children receive the state in a prop way
- Everything is synchronised still (React batches those updates)

**Lifting props**

- We do not lift props because props are just transportation to the system communication between the parent and child component or children component, it lives in the parent and can be reused by multiple child component
- Although after lifting the state to the parent, then we can pass them down as props