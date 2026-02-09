**The structure that React follows when fetching data**

1. Component mount
2. Start loading
3. Fetch data
4. Success → store data
5. Failure → store error
6. Stop loading

**States we always need**

```jsx
const [data, setData] = useSatate(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
```

- Data → store API response
- Loading → control UI feedback
- Error → handle failures safely

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
```

What is happening

- React rendered <Users/>
- Component mounted
- useEffect ran and will be once because of [] (dependency array)
- API request sent
- State update
- Component re-renders with data

Procedures

- runs once(mount)
- try for success paths
- catch for error paths
- finally always stop loading

Rendering Based on State

```jsx
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
```

only render data after loading is done

```jsx
return (
  <ul>
    {data.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

**Upgrade**

When we want to prevent memory leaks 

```jsx
useEffect(()=>{
	const controller = new AbortController();
	fetch(url, {signal:controller.signal})
	return () => controller.abort();
}, []) 
```