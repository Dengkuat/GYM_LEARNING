import { useState, useEffect } from "react"

export default function useGettingNames(url){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  async function fetchUserName() {
    try {
      setLoading(true)
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch data`)

      const data = await response.json();
      setData(data)
    }catch(err){
      console.log(err.message)
      setError(err)
    }finally{
      setLoading(false)
    }
     
  }

  useEffect(() => {
    fetchUserName()
  }, [url])

  return{data, error ,loading}
}