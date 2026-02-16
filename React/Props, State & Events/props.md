**Props?**

- This are input data that are passed from the parent to children components
- Props are read-only when inside the child component
- How react components communicate without touching state

```jsx
function Greeting(props){
	return(
		<h1>Hellp, {props.name}<h1/>
	)
}

<Greeting name="Deng">
<Greeting name="Kuat">
```

- So here the component can be reused in many ways with different inputs
- Greeting can only read it and cannot modify it

**Passing Props**

- Props can be of primitive datatypes {string, numbers, boolean}
- Props can be objects or arrays
- Props can be functions for callback functions

```jsx
function Profile({name, age, onClick}){
	return(
		<div>
			<p>{name} is {age} years old</p>
			<button onClick={onClick}>Say Hi</button>
		</div>
	)
}

function App(){
	const handleClick = () => alert('Hello')
	return <profile name="Deng" age{20} onClick={handleClick}>
}
```

- Here the name, age and onClick are the props they are passed from the parent component to the child component so that the children communicate to the parent

**Props Destructuring**

- Instead of having [props.name](http://props.name) and props.age we can destructure in this way

```jsx
function Profile({name, age}){
	return <p>{name}, is {age} years old</p>
}
```

- This is easier to read and debug

**Default props and optional props**

- We can set default props incase the child don’t include the parent prop this ensures code doesn't break
- We can use propTypes for validation in pure js

```jsx
import PropTypes from 'prop-types';

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  onClick: PropTypes.func
};
```

**NOTE:**

- Props are read only and cannot be modified, incase for any modification then we use states and props sticks with input,

**Passing Props between components**

```jsx
function App() {
const user = { name: "Deng", age: 20 };
return <Profile user={user} />;
}

function Profile({ user }) {
return <p>{[user.name](http://user.name/)} is {user.age}</p>;
}
```