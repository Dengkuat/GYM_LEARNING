**What is conditional Rendering?**

- Showing different ui based on a certain condition that can be either true of false
- This all can be done by the JS logic expressions(if, else, <? :, &&, ||)

React renders whatever the expression that evaluates to instead of togging off and on just like in HTML manually we just decide what JSX it should return 

```jsx
state + props + logic
```

**This is what the conditional rendering depends on**

- state
- props
- derived values

**Examples of real conditional rendering**

- Is user logged in?
- Is data loading?
- Is there an error?
- Is a modal open?
- Is the user an admin?

**The simplest form**

- condition - an expression that is true or false
- return early - stopping rendering early

```jsx
function Welcome({isLoggedIn}){
	if(isLoggedIn){
		return <h1>Welcome back!</h1>
	}
	return <h1>Please log in</h1>
}
```

What happening?

- isLoggedIn is a boolean
- React checks it with an if expressions
- only one JSX tree is returned

**Conditional Rendering Inside JSX**

- JSX allows expressions, not statements so we would rather use the ternary operator instead

**Ternary Operators(?:)**

```jsx
condition ? valueIfTrue : valueIfFalse
```

```jsx
<h1>
  {isLoggedIn ? "Welcome back" : "Please log in"}
</h1>
```

```jsx
function Button({isLoading}){
	return(
		<button>
			{isLoading} ? "Loading...":"Submit"
		</button>
	)
}
```

**LOGIC and ‘Render if true’**

```jsx
true && "Hello"   // "Hello"
false && "Hello"  // false
```

**React ignores:**

- false
- null
- undefined

```jsx
{isLoggedIn && <Dashboard />}

//if is loggedIn is true, render <dashboard>

//else render nothing
```

**Conditional Rendering With null?**

Returning null means render nothing 

```jsx
function Warning ({show}){
	if(!show) return null;
	return <p>Warning!</p>
}
```

**Conditional Rendering with variables**

This could be a professional pattern

```jsx
function Status({ status }) {
  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "error") {
    content = <p>Error occurred</p>;
  } else {
    content = <p>Data loaded</p>;
  }

  return <div>{content}</div>;
}
```

**What makes this cool**

- clean JSX
- Easy to read
- Scales well

**Conditional Rendering using functions** 

```jsx
function renderContent() {
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return <Data />;
}

return <div>{renderContent()}</div>;
```

**Conditional Rendering with props**

```jsx
function Card({ isAdmin }) {
  return (
    <div>
      <h2>Profile</h2>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}
```

- isAdmin comes from parent
- Child decides what to render

**Conditional rendering + state**

```jsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Open</button>

{isOpen && <Modal />}
```

1. User clicks
2. State changes
3. React re-renders
4. Condition re-evaluates
5. UI updates 