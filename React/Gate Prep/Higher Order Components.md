- This is an advanced pattern in react used to reuse logic between component
- so instead of repeating the same logic in many component, we create a function that wraps a component and add extra behavior

**What is a higher order component**

- This is a function that takes component and returns a new component with additional behavior

**Why higher oder components exist**

In real apps many components share logic eg

- fetching data
- authentication
- loading state
- permission
- loggin
- styling
- analytics

Without HOC we might repeat code like this everywhere 

```jsx
if(!isAuthenticated){
  return <Login/>
}

//here we can write a logic once and reuse it 
```

**Example of HOC use**

**normal component**

```jsx
function Profile(){
  return <h1>User Profile</h1>
}
```

**Higher order component**

```jsx
function withAuth(Component){
  return function(props){
    const isLoggedIn = true

    if(!isLoggedIn){
      return <p>Please login</p>
    }

    return <Component {...props}/>
  }
}

//then we can use it like this

const ProtectedProfile = withAuth(Profile)

//then we can keep reusing the logic everywhere
<ProtectedProfile/>
```

**Real case cinarials**

```jsx
function withLoading(Component){
  return function({loading, ...props}){

    if(loading){
      return <p>Loading...</p>
    }

    return <Component {...props}/>
  }
}

function Users({users}){
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

const UsersWithLoading = withLoading(Users)

<UsersWithLoading loading={true}/>
```

Higher order components are just the older ways of reusing logic and new ways are now the custom hooks 

**When do we use the HOC**

We use them when we want to reuse logic

- authentication
- permission
- logging
- analytics
- loading state
- api data