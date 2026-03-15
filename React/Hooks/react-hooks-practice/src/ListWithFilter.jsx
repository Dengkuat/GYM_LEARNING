import { useState, useEffect, useCallback, useMemo } from "react"

export default function FetchList(){
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchUsers() {
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`)

        const data = await response.json();
        setUser(data);
        console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const filteredUser = useMemo(() => {
    return user.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, user])
  return(
    <>
    <label className="text-2xl font-bold">Search Product</label>
    <input 
    type="text"
    placeholder="Enter Product name here"
    className="rounded-2xl border text-center px-10 py-1 ml-12"
    value={search}
    onChange={handleSearch}
       />
      <ul>
        {filteredUser.map(user => 
          <li key={user.id}> {user.title}</li>

        )}
      </ul>
    </>
  )
}
