**Callback Hell**

**What it is**

- So callback hell is when you have multiple asynchronous tasks that depends on each other so we can handle then using nested callbacks
- Each callback is inside another callback leading to deeply nested indented hard to read code also called the pyramid of Doom

```bash
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log("Done!");
    });
  });
});
Note 
This works all though it is ugly, long and hard to deburg, read and maintian
```

**Why it happens**

Note: They arent bad only that they are poor structure and hard to read

- When we have asynchronous codes that depend on each other
- To many nested levels instead of chaining
- Not separating login into named function

**How to recognize it**

- Code shaped like a pyramid
- Lose track of were a callback starts or ends
- Cant find errors or read them out clearly
- Adding new steps feels painful

```bash
loginUser("deng", "1234", (user) => {
  getUserProfile(user.id, (profile) => {
    getUserFriends(profile.id, (friends) => {
      getFriendPosts(friends[0].id, (posts) => {
        console.log(posts);
      });
    });
  });
});

Note
So here there are just 4 layers of nested callbacks 
but its already looking chaotic
```

**How to manage it**

So we can structure callbacks better even before using promises to solve callback hell

- Use named Function

Instead of using anonymous function we could define the function separatly just like this

```bash
function handlePosts(posts) {
  getComments(posts[0].id, handleComments);
}

function handleComments(comments) {
  console.log("Comments:", comments);
}

getUser((user) => getPosts(user.id, handlePosts));

Note
So this one reduces the unreadibility of the code
```

- Use Modularization

Break big chains into smaller function that call each other

```bash
function getUserData() {
  getUser(onUserReceived);
}

function onUserReceived(user) {
  getPosts(user.id, onPostsReceived);
}

function onPostsReceived(posts) {
  getComments(posts[0].id, onCommentsReceived);
}

function onCommentsReceived(comments) {
  console.log("All done!", comments);
}

getUserData();
note
here the callback is reduced and readibilty is clear
```

**What cant be managed**

So this are the problems we cannot manage with even structuring the callbacks

- **Error handling** → you have to catch errors at every level or line
- **Hard Debugging** → Code still are lot and messy
- Not easy to run code in parallel or separatly
- Code that is not scalable

**NOTE:** So promises where built to solve such problems that callbacks cannot solve as async/await will make them even more clear