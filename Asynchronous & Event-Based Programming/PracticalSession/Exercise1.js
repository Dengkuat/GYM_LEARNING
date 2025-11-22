    async function fetchFirstUserPostsWithRetries() {
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts) {
        try {
          // fetch all users
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const users = await response.json();

          // first user id
          const firstUserId = users[0].id;

          // fetch posts for first user
          const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`);
          if (!postsResponse.ok) throw new Error(`HTTP error! status: ${postsResponse.status}`);
          const firstUserPosts = await postsResponse.json();

          console.log(firstUserPosts);
          break;

        } catch (error) {
          attempts++;
          console.log(`Attempt ${attempts} failed`);
          if (attempts === maxAttempts) {
            console.log("All attempts failed");
            throw error;
          }

        }
      }
    }

    fetchFirstUserPostsWithRetries();

