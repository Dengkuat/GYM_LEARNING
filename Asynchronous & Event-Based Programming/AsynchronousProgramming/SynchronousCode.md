**Synchronous programming** really means excecution of code line by line, one task after the other so one tast finishes before the other task begins/starts

```bash
console.log("Start");
console.log("Middle");
console.log("End");
output
start
middle
end
```

**Example**

```bash
Const name = 'Deng';
const greeting = `my name is ${name}`;
cosole.log(greeting);
output
my name is Deng
```

**Explanation**

From the above code the codes excecuted line by line from the first task to the last task, so the browser finished with the first task and then moved on to the next task(synchronous)

**Question**

**What if the synchronous function takes a very long time to excecute?**

Then everything else must wait untill the code is finished with exicution before the next line is excecuted 

```bash
console.log("Start");

function longTask() {
  // Simulate a 5-second heavy task
  const start = Date.now();
  while (Date.now() - start < 5000) {}
  console.log("Long task finished");
}

longTask();

console.log("End");

outcomes
Start
Long task finished
End
so End excicution waited for Long task finished to get excecuted
```

**Why is synchronous still used today?**

- Easier to read and debug
- Perfect and simple for fast operations like displaying and simple calculation