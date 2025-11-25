// ### Retry Logic

// - Implement a generic `fetchWithRetry(url, options, retries)` function that attempts to fetch the given URL.
// - If a network error occurs or the response status is not in the 200–299 range, retry the request up to the specified number of times.
// - After exhausting all retries, throw an appropriate error.

// **🔍 Example**
// fetchFirstUserPostsWithRetries()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// Expected outputs
// {
//   user: {
//     id: 1,
//     name: "Leanne Graham",
//     // ...other user properties
//   },
//   posts: [
//     {
//       userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum...",
//     },
// ..additional posts
//   ]
// }




async function fetchWithRetry(urlUsers, urlPosts, options, retries){
  let attemp = 0;
  while(attemp<=retries){
    try{
     const response = await fetch(urlUsers, options);
      if(!response.ok) throw new Error(response.status);
      const data =  await response.json();
      const firstUser = data[0];
      const responsePost = await fetch(`${urlPosts}?userId=${firstUser.id}`, options)
      if(!response.ok) throw new Error(responsePost.status);
      const posts = await responsePost.json();
      
      return {
        firstUser,
        posts
      }
  }catch(error){
    console.log(`Attempt ${attemp + 1} failed:`, error.message);
    if(attemp === retries){
      throw error;
    }
    attemp++;
  }
 
  }
  
}
fetchWithRetry(
                `https://jsonplaceholder.typicode.com/users`,
                `https://jsonplaceholder.typicode.com/posts`,
                {},
                 4)
      .then(data => console.log(data))
      .catch(error=>console.error(error.message));


//status we all need
// 200 - OK
// 404 - not found
// 500 - server error
// 201 - created