import { useLoaderData, Await, defer } from "react-router-dom"
import { Suspense } from "react"

export default function Profile() {

  const { user, posts } = useLoaderData()

  return (
    <div>

      <h1>{user.name}</h1>

      <Suspense fallback={<p>Loading posts...</p>}>
        <Await resolve={posts}>
          {(postsData) =>
            postsData.slice(0,5).map(post => (
              <p key={post.id}>{post.title}</p>
            ))
          }
        </Await>
      </Suspense>

    </div>
  )
}

export async function loader(){

  const user = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  ).then(res => res.json())

  const posts = fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then(res => res.json())

  return defer({
    user,
    posts
  })
}