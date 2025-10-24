Synchronous callback is a callback function that is excecuted later after the asynchronous operation completes eg fetchin api, file reading, setTimout and setInterval

**Key**

- A long runing task
- Excecution is non blocking (codes can contunue running as the long runing task is waiting)
- Often used in timers, API call, even listeners and file operations

Example 1

```bash
console.log("Start");

setTimeout(() => {
  console.log("Callback after 2 seconds");
}, 2000);

console.log("End");
 Start
 End
so after the 2 second the middle one will exceute
Callback after 2 seconds

note 
The callback exceutes after 2 seconds
its not a blocking function so the other code continue running as it is being run in the background 
```

Example 2

```bash
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}

fetchData((data) => console.log(data));
console.log("Do other stuff while waiting...");

note 
so the data will load after a time period of 1 second
so the other task will be running such as the do other stuff
```