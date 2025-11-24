**What is HHR?**

- Its an old javascript tool used for making HTTP requests before fetch() existed
- XHR → XHMHttpReqest

**Why we study it?**

- It appears in old code so we have to know how to handle it wisly
- Examiners love knowing the understanding of students even if they arent going to use it
- It helps understand the evolution of javascript

**What makes it different?**

- They use callbacks which we nolonger use today (promise and async and await)
More writing of code or syntax
- Harder to fetch

NOTE: The ideology is the same as fetch since we ask or fetch from the server, wait, receive response and use that response

So every XHR requests follows the same patter

**Create the XHR object**

```bash
const xhr = new XMLHttpRequest();
```

**Open the connection (takes 3 parameters, method, url and asycn)** 

```bash
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1")
```

- “GET” → request method
- URL → where we are sending the request

**Listen to the response of the server**

```bash
xhr.onload = function(){
	console.log(xhr.reponseText);
}
```

- onload → runs when the request succeeds
- responseText → displays the response for the xhr request made from the server

**Sending a request**

xhr.send( );

**Post Request(sending Data)**

This is sending data to a server using XHR

**What it would include?**

- open(’POST’)
- setRequestHeader
- JSON.stringify()
- send(data)

**Important Concept here!**

- SetRequestHeader/MetaData

This is used to tell the server what the data it contains

- JSON.stringify()

converts a javascipt object notion, 

Because XHR sends strings not object

**XHR Ready States**

Every XHR requests goes through 5 main states, takced by the xhr.readyState;

| **Value** | **State** | **What it means** |
| --- | --- | --- |
| 0 | UNSENT | XHR object created, open() not called yet |
| 1 | OPENED | open() has been called, ready to send |
| 2 | HEADERS_RECEIVED | Server responded with headers |
| 3 | LOADING | Receiving response body (partial data) |
| 4 | DONE | Entire response received |

**Using the onreadyStatechange**

This the older way to handle response(before the onload existed)

```bash
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Response received:", xhr.responseText);
  }
};

xhr.send();
```

xhr.readyState === 4 → request is done

xhr.status === 200 → is ok or successfull HTTP response