// Your task is to implement an asynchronous function `fetchFirstUserPostsWithRetries()` that performs the following steps:

// 1. **Fetches the list of users** from the JSONPlaceholder API:
//     - Endpoint: `https://jsonplaceholder.typicode.com/users`
//     - If the request fails, retry up to **3 times** before throwing an error.
// 2. **Selects the first user** from the retrieved list.
// 3. **Fetches the posts** associated with the first user:
//     - Endpoint: `https://jsonplaceholder.typicode.com/posts?userId={userId}`
//     - If the request fails, retry up to **3 times** before throwing an error.
// 4. **Returns** an object containing:
//     - `user`: The first user's data.
//     - `posts`: An array of the user's posts.

async function fetchFirstUserPostsWithRetries(){
  const maximumAttempts = 3
  let attempt = 0
  while(attempt<maximumAttempts){
    try{
      const users = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await users.json()
      const firstUser = data[0];
      
      const maxatt = 3
      let att = 0
      let firstUserPost;
      
      while (att<maxatt){
        try{
          const firstUserResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
       firstUserPost = await firstUserResponse.json();
          break;
        }catch(error){
          att++;
          console.log(`Attempt ${att} failed`)
          if(att === maxatt){
          return `all 3 attempts have failed`;
}
      }
      }
      
      return {
        user:firstUser,
        posts:firstUserPost
      };
    }catch(error){
      attempt++;
      console.log(`Attempt ${attempt} failed`)
      if(attempt===maximumAttempts){
        return `all 3 attemp have all failed`;
      }
    }
  }
}
fetchFirstUserPostsWithRetries().then(result => console.log(result));