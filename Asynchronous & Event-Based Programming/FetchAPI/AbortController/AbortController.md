**What is AboutController?**

- Aboutcontroller is a built-in javascript tool that allows you to cancel an async action, usally a fetch request

```bash
const controller = new AbortController();
```

So we can call it a remote control for a request

- The controller creates a signal
- The request listens to that signal
- You can tell it to stop at any time

**What is a signal?**

- Every controller has a property called a signal

```bash
const signal = controller.signal
```

- This is the part that connects he controller to your fetch request

How do we pass it into fetch

```bash
fetch(url, {signal});
```

So meaning if the signal is aborted, then the request stops immediatly

**Why do we need AbortController?**

Because asynchronos requests take time,

Sometimes you want to cancel a request becase maybe;

- The user changed their mind
- The user types a new search term
- The network is slow
- You navigate to another page
- You dont want to waste data
- You dont want memory leaks

So without Aboutcontroller, you wouldnt have controll over the background request running

**How do we abort a request?**

```bash
controller.abort();
```

What happens when we call this?

- Fetch throws an error
- The request stops fetching data
- The browser drops the connection
- Promise rejects immediatly

So this is good because it helps u manage the app

**What error appears when we abort?**

```bash
AbortError
```

So how can we detch it or catch it 

```bash
try{
	await fetch(url, {signal});
}catch(error){
	if(error.name === 'AbortError'){
		console.log('Request was cancelled')
	}
}
```

**How does abort relate to async and await?**

- So abort is under fetch and fetch returns a promis, and async and await is just better ways to write a promise or handle a promise

So when we using async and await;

- So if we dont abort then the promise resolve automatically
- If we abort then the promise rejects with error called AbortError

```bash
async function getData(){
	const controller = new AbortController();
	
	try{
		const res = await fetch(url,{signal: controller.signal});
		const data = await res.json();
		console.log(data);
	}catch(err){
		if(err.name === 'AbortError'){
			console.log('Stopped request')
		}
	}
	Controller.abort();
}
```