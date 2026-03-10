import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPosts() {
    try {
      setIsLoading(true)
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

      const data = await response.json();
      setPosts(data)
    } catch (error) {
      console.log('User posts wasnt able to fetch')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <>
      <button
        className="border py-1 px-2 rounded-2xl text-center"
        onClick={fetchPosts}
      >
        {isLoading ? "Loading..." : "Refetch posts"}
      </button>

      {isLoading ? ("Loading...") : (<pre>{JSON.stringify(posts, null, 3)}</pre>)}

    </>
  )
}