**What does async do?**

- Adding async before a function always makes it return a promise
- So we can say it is a special type of function that always returns a promise nomatter what we try to return inside it

```bash
async function example() {
    return 42;
}
example().then(console.log); 

output?
42

Example
So when we call async keyword in a function then it returns a promise when we call the function
```

- So async keyword wraps the function in a promise
- So the function envoction will always return a promise

**What does await do?**

- First of all it is always used in an async function
- Await pause the excecution of an async function untill the promise resolves or rejects
- It can only be used inside an async function or top level await in modern js

```bash
function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

async function run() {
    console.log("Start");
    const result = await delay(2000); // waits 2 seconds
    console.log("End after", result, "ms");
}

run();

Explanation?
The run() function pauses at the await line
After the promise resolve, it resumes and stores the value in result
```

Example 2

```bash
async function fetchData(){
    console.log("Fetching data....")
        let data = await new Promise(resolve =>{
            setTimeout(() => resolve("Data loaded"), 2000);
        })
    console.log(data)
}
fetchData();

output
Fetching data...
Data loaded!

Explanation?
So the async wrapps the function in a promise so the return of that function shall always be a promise
The function logs fetching data
\\Await waits for the promise to settle to print out the data loaded after 2 seconds
```

**So why they exist?**

Before async and await, developers relayed on chain promise where one then waits for the other return 

```bash
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts))
  .catch(err => console.error(err));
```

So async and awit made it all readable and easy 

```bash
async function getData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts);
  } catch (err) {
    console.error(err);
  }
}
```

So they are the same logic but one is easier to follow