*1.  A web request takes long and the UI must never freeze. How would you design the request system, and which async pattern would you choose? Justify why not the others.*

*2.  Two developers made API callers: one used callbacks, the other used promises. Later the system needed chaining 5 dependent calls + error handling. Whose design adapts better and why? Explain the internal mechanics that make it true.*

*3.  How does XMLHttpRequest really work under the hood compared to fetch or promises? Describe the event cycle from request → network → response.*

*4.  If a function sometimes returns data and sometimes throws an error asynchronously, how would you standardize its behavior so the caller handles both cases in one predictable way?*

*5.  You must run 3 API calls in parallel, but only proceed when all succeed. How would you implement it, and how would your answer change if you needed to proceed even when 1 fails?*

*6.  What happens in the call stack, microtask queue, and callback queue when this runs?*

```bash
*console.log(1);*
*setTimeout(() => console.log(2), 0);*
*Promise.resolve().then(() => console.log(3));*
*console.log(4);*
```

*7.  A company limits API retries for failed requests. How would you design the retry logic for both callback-based and promise-based functions so neither violates the limit or causes memory leaks?*

*8.  In what real scenario would callbacks be a better choice than promises? Explain constraints like environment, performance, or compatibility.*

*9.  If an async function awaits another async function that never resolves, how would you protect your system from hanging forever? Discuss trade-offs of your solution.*

*10. You inherited legacy code using XMLHttpRequest with nested callbacks 6 levels deep. Without rewriting to fetch, how would you improve readability and reliability while keeping it async?*

*11.What will log first, and why?*
```bash
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
console.log("C");
```
*12.Can a long-running .then() callback delay a timer? Explain with the async model, not just the result.*

*13.Is a promise executor (new Promise(() => {})) async or sync? When does its code actually run?*

*14.Predict the order of logs and justify each transition*
```bash
Promise.resolve().then(() => {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  Promise.resolve().then(() => console.log(3));
});
setTimeout(() => console.log(4), 0);
console.log(5);
```
*15.Where does .json() from fetch().then(r => r.json()) sit in the model — microtask, macrotask, or neither?*

*16.If one promise inside Promise.all() rejects immediately, do the others still execute? Explain in terms of promise creation vs promise settling.*

*17.Rewrite what this becomes in the async model:*
```bash
async function f() {
  console.log("X");
  await Promise.resolve();
  console.log("Y");
}
f();
console.log("Z");
```
*Describe which part is pushed to which queue.*

*18.JS is single-threaded. When we run 3 async tasks at the same time, like 3 fetch calls, what illusion makes it look parallel? Use queues and timers in the explanation.*

*19.Does this code ever reach "End"? Build the reasoning path:*
```bash
Promise.reject("Bad")
  .catch(() => { throw new Error("Worse"); })
  .catch(() => console.log("Handled"))
  .then(() => console.log("End"));
```
*Explain why or why not.*

*20.You have 5 promises and 3 of them fail in Promise.any().*
*Does Promise.any() throw an aggregate error or the first single error? Explain the logic the engine follows to decide.*

