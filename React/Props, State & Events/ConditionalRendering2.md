This is showing something or showing something else depending on a condition

```jsx
const isLoggedIn = true;
if(isLoggedIn){
	console.log("Welcome")
}else{
	consle.log("Please login")
}

//so with this same logic instead of printing we render the component
```

**conditional rendering with if**

```jsx
function App(){
	const isLoggedIn = true;
	if(isLoggedIn){
		return<h1>Welcome</h1>
	}else{
		turn <please login>
	}
}
```

- React will then decide is isLoggedIn

**Conditional Rendering with &&**

- used when you want to show something only if the condition is true

```jsx
function App(){
	const isLoggedIn = true;
	return(
		<div>
			{isloggedIn && <Dashboard>}
		</div>
	)
}

//true && something 
//false && something 

//so if loggein is true then show dashboard else show nothing
```

**Conditional rendering with ?: ternary operator**

- used when we have 2 possible outputs

```jsx
function App(){
	const isLoggedIn = false;
	
	return(
		{isLoggedIn?<h1>Welcome</h1>:<h1>Please login</h1>}
	)
}
```

**When with loading** 

```jsx
function App(){
  const [loading, setLoading] = useState(true)

  return(
    <div>
      {loading ? <p>Loading...</p> : <p>Data Loaded</p>}
    </div>
  )
}
```

**React Pattern** 

```jsx
if(loading){
  return <p>Loading...</p>
}

if(error){
  return <p>Error loading data</p>
}

return (
  <div>
    Data loaded
  </div>
)
```

- so react will check the condition before the main UI