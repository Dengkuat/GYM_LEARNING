import { defer } from "react-router-dom";

export async function loader(){

  const user = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json());

  const posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

  return defer({
    user,
    posts
  });
}