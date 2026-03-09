import { useState, useEffect } from "react";

export default function FetchDisplayPosts() {
  const [posts, setPosts] = useState([]);

  async function fetchingData() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      if (!response.ok) throw new Error(`Failed to fetch posts`);
      const data = await response.json();
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchingData();
  }, [])
  return (
    <>

    <button onClick={fetchingData} className="border p-3 rounded-2xl">
      Refetch data
    </button>
      <pre>{JSON.stringify(posts, null, 3)}</pre>
    </>
  )
}