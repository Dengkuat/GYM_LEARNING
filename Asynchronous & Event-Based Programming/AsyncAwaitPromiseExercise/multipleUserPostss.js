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

// ---

async function fetchFirstThreeUsersPosts() {
  const maxAttempts = 4;
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!usersResponse.ok) throw new Error(usersResponse.status);

      const users = await usersResponse.json();

      const topThreeUsers = users.slice(0, 3);

      const usersWithPosts = [];

      for (let user of topThreeUsers) {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if (!postsResponse.ok) throw new Error(postsResponse.status);

        const userPosts = await postsResponse.json();

        const userDataWithPosts = {
          user: user,
          posts: userPosts
        };

        console.log(userDataWithPosts);
        usersWithPosts.push(userDataWithPosts);
      }
      return usersWithPosts;

    } catch (error) {
      attempt++;
      console.log(`Attempt ${attempt} failed, retrying in 3 seconds...`);

      if (attempt === maxAttempts) {
        console.log(`All ${attempt} attempts have been exhausted`);
      } else {
        const delayedTime = new Promise(resolve => setTimeout(resolve, 3000));
        await delayedTime;
      }
    }
  }
}
fetchFirstThreeUsersPosts();