Convertion of async and await to a promise

```bash
Async and await
async function getUser(){
    const user = await fetchUser()
    const posts = await fetchPost(user.id)
    return posts;
}

Promise 
function getUser(){
    return fetchUser()
        .then(user => fetchPosts(user.id))
        .then(posts => posts)
        .catch(error => promise.reject(error))
    
}
```

convertion of promise to async and await

```bash
function fetchData(){
    return getUser()
    .then(user => getPosts(user.id))
    .then(posts => console.log(posts))
    .catch(error => console.error(error))
}

async function fetchData(){
    try{
        const user = await getUser()
        const posts = await getPosts(user.id)
        console.log(posts)
    } catch(error){
        console.log(error)
    }
}
```

Create a function that returns a Promise which resolves after **2 seconds** with the value "Hello Deng", then log that value to the console.

```bash
Promise
function printName(){
    return new Promise((resolve) => {
        setTimeout(()=>resolve('Hello Deng'), 2000)
    })
}
printName()
.then(get => console.log(get))

Async and Await
async function printName(){
    return await new Promise((resolve) => {
        setTimeout(() => resolve('Hello Deng'), 2000)
    })
}

(async () => {
    const message = await printName();
    console.log(message)
})();
```

Create **two async functions**:

- taskOne() waits **1 second** and returns "Task One Done"
- taskTwo() waits **2 seconds** and returns "Task Two Done"

```bash
async function taskOne(){
    const one = await new Promise((resolve) => {
        setTimeout(()=>resolve('Task one Done'), 1000)
    })
    console.log(one)
}

async function taskTwo(){
      const two = await new Promise((resolve) => {
        setTimeout(()=>resolve('Task two Done'), 2000)
    })
    console.log(two)
}
taskOne()
taskTwo()

Now:
	1.	Run them sequentially using await one after another.
	2.	Then run them in parallel using Promise.all.

Compare how long each takes (use console.time() / console.timeEnd() if you like).
async function runParallel() {
  console.time("Parallel");
  await Promise.all([taskOne(), taskTwo()]);
  console.timeEnd("Parallel");
}
runParallel();
Task One Done
Task Two Done
2000ms
```