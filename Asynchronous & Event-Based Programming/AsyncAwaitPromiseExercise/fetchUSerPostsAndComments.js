// Create a function fetchPostsWithComments() that:
// 	1.	Fetches the list of posts from:
// https://jsonplaceholder.typicode.com/posts
// 	2.	Fetches the list of comments from:
// https://jsonplaceholder.typicode.com/comments
// 	3.	Combines the data so that each post has a comments key containing all comments that belong to that post (postId matches the post’s id).
// 	4.	Returns a promise that resolves with an array of posts, where each post looks like this:
// {
//   id: 1,
//   title: "Post title",
//   body: "Post body",
//   userId: 1,
//   comments: [
//     {
//       postId: 1,
//       id: 1,
//       name: "Commenter name",
//       email: "email@example.com",
//       body: "Comment body"
//     },
//     ...
//   ]
// }

async function fetchPostsWithComments(){
  const urls = [
    `https://jsonplaceholder.typicode.com/posts`,
    'https://jsonplaceholder.typicode.com/comments'
  ];
  const response = await Promise.all(
  urls.map(url => fetch(url).then(result => result.json()))
  )
  
  const [posts, comments] = response;
  const postWithComments = posts.map(post => {
    return{
      post,
      comments: comments.filter(comment => comment.postId === post.id)
    }
  })
  return postWithComments
  
}
fetchPostsWithComments().then(res => console.log(res));