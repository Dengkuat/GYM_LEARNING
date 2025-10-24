**Js is a single threaded →** It can handle one thing at a time only

**Non blocking →** Even being single threaded it can handle asynchrnous code

**Four componenets that led us to the excecution model**

- **Call Stack →** Codes run line by line, all asynchronous code run so each time a function is called it is pushed into a stack, so after it fininshed it is removed or popped off
So when the stack is empty now then u see the output so all this is done from the background
- **Web APIs →** These are background systems provided by the browser for asynchronous operation so they handle

                           - setTimeout

                           - fetch data/write 

                           - DOM events

                           - Geolocation

```bash
console.log("Start");
SetTimeout(()=> console.log("Inside Timeout"), 2000);
console.log("End");

**Procedures**
start runs
Indide Timeout does to the webAPI in the backgound
End runs 
After 2s then Inside Timeout runs aswell
but before it runs (moves to the callback quene, then from queue to the stack when it is empty)

output
start
End 
Inside Timeout
```

- **Callback Quene(Task Quene) →** This is where all completed asynchronus task wait untill the call stack is empty.

**Note →** Tasks here are handles by the event loop

- **Event Loop →** This is the manager between the callback quene and the callback stack

      → it is the ones that checks if the callback stack is empty for the completed asynchronus code to be moved to from the quene to the stack