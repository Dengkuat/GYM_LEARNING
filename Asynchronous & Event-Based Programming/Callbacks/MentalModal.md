**How is a callback function different from a normal function?**

- A callback is a function that is passed as an argument into another function is later invoked inside that function
- A normal function is a function that is simply defined and called directly by name

**What is the main reason we use callbacks in asynchronous programming?**

- Asynchronous code allows other tasks to be run while conutinuing to run the long running task (setTimeout, fetch api, database check, file reading) so these task after the operation they dont return results so we pass on a callback function so that they can be excecuted later or invoked

**Explain the difference between synchronous and asynchronous callbacks.**

- Synchronous callback is a callback function that excecutes immediatly within the function it is called in, the task blocks future task untill the previous task finished excecuting
- Asynchronous callback is a callback function that is excecuted later often after an asynchronous operation finishes, it is none blocking other codes can run in as the long running task are being excecuted in the background

Why do we say callbacks are “functions passed as arguments”?

Give an example of a synchronous callback and explain how it works.

```bash
function greet(name){
    console.log(`My name is ${name}`)
}
function getUser(callback){
    callback(`Deng`);
}
getUser(greet)

output
My name is Deng

Explanation
Greet is a normal function that takes name and print name
getUser is a controller function it takes another function as a parameter and deceides to run it
so GetUser controlls when greet runs and greet controlls what to do with the name and log it
```

Give an example of an asynchronous callback and explain how it works.

What is “callback hell,” and why is it a problem in JavaScript?

How can you reduce or avoid callback hell in large applications?

What is modularization in callback structure and why is it important?

**Define** a callback in your own words and give a one-line example.

Explain the difference between a **synchronous callback** and an **asynchronous callback**. Give one JS example of each.

What happens if you return a value from inside an asynchronous callback? Why can’t you use that return value like a normal function return?

Write a short function doAfter(ms, cb) that calls cb() after ms milliseconds using setTimeout. Show how you’d call it.

Given this code, what is the order of console output? Explain why.

```bash
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
```

Explain **callback hell** (the Pyramid of Doom) and list two reasons it’s a real problem in projects.

Refactor the following nested callbacks by extracting named functions (no Promises):

```bash
getUser((u) => {
  getPosts(u.id, (p) => {
    getComments(p[0].id, (c) => {
      console.log(c);
    });
  });
});
```

What is the **error-first callback** pattern? Write a small example of a function using it and show how you handle an error in the caller.

Why is error handling more painful with callbacks compared to Promises? Give one concrete example.

Identify the bug(s) in this callback code and fix it:

```bash
function readFile(path, cb) {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    cb(data);
  });
}
readFile('notes.txt', (data) => {
  if (data) console.log(data.toString());
});
```

Describe two real JavaScript APIs that commonly use callbacks on the frontend and two from Node.js.

Convert this synchronous callback usage into a version that avoids nesting by using modular functions (still no Promises):

```bash
step1(arg, (r1) => {
  step2(r1, (r2) => {
    step3(r2, (r3) => {
      console.log('done', r3);
    });
  });
});
```

Short answer: when is it better to use a callback over returning a value? Give an example scenario.

Given this code, what problem could arise? How would you prevent it?

```bash
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

Write a small example where two asynchronous tasks should run **in parallel** and then a final callback should run after both finish (use callbacks only).

Explain how event loop and microtasks/macrotasks relate to callback execution (keep it concise — 2–3 sentences).

Identify which of the following are callbacks (yes/no) and why:

- array.map(x => x * 2)
- new Promise((res) => res(5))
- document.addEventListener('click', handler)

Create a tiny Node-style API function deleteUser(id, cb) that simulates async deletion (use setTimeout). Use the error-first pattern to sometimes return an error (e.g., if id ≤ 0).

You inherit a large codebase full of nested callbacks. List **three** concrete refactor steps you would take (without introducing Promises yet) to make it easier to read and maintain.

Explain — in one paragraph — what specific problems Promises were designed to solve that callbacks struggle with.

Debugging task: this function sometimes logs nothing. Why? Fix it.

```bash
function getData(cb) {
  let done = false;
  setTimeout(() => { done = true; cb('ok'); }, 50);
  if (done) cb('already');
}
```

Short coding: write serial(tasks, finalCb) where tasks is an array of functions (cb) => { /* async work */ } and serial runs them one after another, calling finalCb() at the end. (Pseudocode or real JS OK.)

Explain the tradeoffs between using **anonymous** vs **named** callbacks. When should you prefer named ones?

Given a button.addEventListener('click', cb) handler, how would you remove the handler later? Show code.

Bonus — explain how you would test a callback-heavy function (unit testing). What would you assert and how would you control async behavior in tests?