import { useState, useEffect, useRef } from "react";

export default function LoadFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('');
  const inputRef = useRef(null)

  async function fetchUser() {
    try {
      setLoading(true);
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
      if (!userResponse.ok) {
        throw new Error(userResponse.statusText);
      }

      const data = await userResponse.json();
      setUsers(data)

    } catch (err) {
      setError("Unable to fetch users");
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
    inputRef.current?.focus()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>error</p>
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <>

      <h1 className="text-3xl">Search for available users</h1>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter available user name"
        className="border rounded-2xl text-center py-1 px-4 my-4"
        value={search}
        onChange={handleSearch}
      />



      <ul>
        {
          filteredUsers.length > 0 ? (
            filteredUsers.map(user => 
              <li key={user.id}>{user.name}</li>
            )
          ):(
            <p>No user found</p>
          )
        }
      </ul>
    </>
  )
}