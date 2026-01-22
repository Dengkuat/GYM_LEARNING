**Props (passing data correctly)**

**What props really are**

- Props are read only data passes from parent to child

```jsx
function child(props){
	return <h1>{props.name}</h1>
}
```

**Parent to child only one direction**

```jsx
function App() {
  return <User name="Deng" age={20} />;
}

function User(props) {
  return (
    <p>
      {props.name} is {props.age} years old
    </p>
  );
}
```

- Data flows in one direction down way
- The child cannot change the state of the prop

Destructuring props 

```jsx
function User({ name, age }) {
  return <p>{name} — {age}</p>;
}
```

**Passing different types of props**

```jsx
<User
  name="Deng"
  age={20}
  isStudent={true}
  skills={["JS", "React", "TS"]}
/>
```

```jsx
function User({ name, skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
```

**KEY**

- Props are read only data and we cannot mutate them
- If data must change then the data is a state not a props

Question

1. **What is the difference between Props and State**

Prop

- Passed from parents
- Read only, cannot be changed
- Makes component reusable

State

- Owned by a component
- Can be changed
- Makes component more interactive

We use state to change data and prop to display data

1. Why do props matter(Importance) before state
- state without props leads to isolated components
- Props without state leads to reusable UI blocks