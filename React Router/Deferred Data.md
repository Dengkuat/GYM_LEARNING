- The problem react router is solving
- What defer() is
- What <await> does
- How suspense fits in
- How they create streaming like behavior
- An example

**The problem**

**Why do we need to defer data?**

- with normal react router loaders

```jsx
export async function loader(){
  const data = await fetch("/api/data")
  return data
}
```

- React router waits for everything before rendering the page

So if the fetch 

- user profiles finishes
- posts is not yet done
- comments is not yet done

The page will not render until everything finishes

- So it gives users a bad experience
- Slow page loading is tasks take long

**What does defer() do?**

- defer() allows some data to load later
- So instead of waiting on everything, the page renders immediately with the important data
- Then the rest loads in the background

```jsx
import { defer } from "react-router-dom";

export async function loader(){

  const user = await fetch("/api/user");

  const posts = fetch("/api/posts");

  return defer({
    user: user,
    posts: posts
  });
}

user -> awaited
posts -> NOT awaited
```

- The page loads the users
- Then later there posts

**What does <await> do?**

<Await> waits for deferred data

```jsx
<Await resolve={posts}>
  {(postsData) => (
    postsData.map(post => <p>{post.title}</p>)
  )}
</Await>
```

so <Await>

- waits for the promise
- then renders the UI

**So why doe we need suspense**

- While <Await> waits for the data, we show a fallback UI

```jsx
<Suspense fallback={<p>Loading posts...</p>}>
  <Await resolve={posts}>
    {(postsData) => (
      postsData.map(post => <p>{post.title}</p>)
    )}
  </Await>
</Suspense>
```

The entire process 

```jsx
Page loads
 ↓
User shows immediately
 ↓
Posts loading...
 ↓
Suspense shows fallback
 ↓
Posts arrive
 ↓
UI updates
```

**Streaming-like behavior**

- This system works similar to server streaming

```jsx
//instead of 
WAIT → WAIT → WAIT → RENDER

//we get a 
RENDER → LOAD MORE → UPDATE UI
```

**Example**

```jsx
0s  Page loads
1s  User data appears
3s  Posts appear
5s  Comments appear
```

- users never waits for everything, makes it feel faster with feed back

**When do we need to use deferred data**

- posts
- comments
- recommendations
- analytics
- related items

The pages that don’t depend on other will not be deferred