import { useState, useEffect } from "react";

function useUsers(url){
  const [user ,setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    async function fetchData(){
      try{
        setLoading(true);
        const response = await fetch(url)
        if(!response.ok) throw new Error(response.status)
        const data = await response.json()
        setUsers(data)
      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }
    fetchData()

  }, [url])

  return {user, loading, error}
}

export default useUsers;