// **Your task:** Implement a function `fetchFirstThreeUsersPosts()`:

// 1. **Fetch the list of users** from:
    
//     `https://jsonplaceholder.typicode.com/users`
    
//     Retry up to **3 times** if the request fails.
    
// 2. **Select the first three users** from the list.
// 3. **For each of these users**, fetch their posts:
    
//     `https://jsonplaceholder.typicode.com/posts?userId={userId}`
    
//     Retry up to **2 times** per request if it fails.
    
// 4. **Return** an array of objects, each containing:
//     - `user`: the user's data
//     - `posts`: an array of their posts

// **Tips:**

// - You will need to **chain Promises** for each user.
// - `Promise.all()` can help fetch posts for all three users in parallel.
// - Handle errors individually so one failed user’s posts don’t break the entire array.

async function fetchFirstThreeUsersPosts(){
  const maxAtt = 3
  let att = 0;
  while(att<maxAtt){
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!response.ok) throw new Error(response.status);
  const data = await response.json();
  const three = data.slice(0, 3);
  const postPromise = three.map(posts =>
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${posts.id}`)
    .then(res => {
      if(!res.ok) throw new Error(res.status);
      return res.json();
    })
);
  const post = await Promise.all(postPromise);
  const resultObject = three.map((data, index) => {
    return {
      user:data,
      post:post[index]
    }
  })
  console.log(resultObject);
      break;
    }catch(error){
      console.log(`${att}failed to fetch`)
      att++;
      if(att === maxAtt){
        console.log(`all attempts failed sorry`)
      }else{
        await new Promise(resolve => {
          setTimeout(()=>resolve,2000)
        });
        continue;
      }
    }
  }
}
fetchFirstThreeUsersPosts();