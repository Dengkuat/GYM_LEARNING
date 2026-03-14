import { useState, useEffect } from "react";

export default function NameEmail() {
  const [users, setUsers] = useState([]);


  async function fetchData() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

      const data = await response.json()

      setUsers(data)

    } catch (err) {
      console.log(`unable to fetch`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="text-red-700 text-lg mb-3">{user.email}</p>
        </div>
      ))}

    </>
  )
}