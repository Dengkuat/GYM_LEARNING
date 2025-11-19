**What it takes in?**

- It takes in an iterable/ array of promises

**What does it return?**

- A promise
- That promise is a resolve to an array of the result promise
- The state dosnt matter failes or successfull it never throws any errors
- It returns an object, the object has the state and value and if the rejected on a state and the reason for the error

Example

```bash
{ status: "fulfilled", value: ... }
{ status: "rejected", reason: ... }
```