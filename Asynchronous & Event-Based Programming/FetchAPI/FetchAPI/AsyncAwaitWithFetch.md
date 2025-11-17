- Fetch returns a promise, so instead of using .then we cause pause the function untill the promise finished

```bash
Old way
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  
  
 New way
 const response = await fetch(url);
 const data = await response.json();
```

- So this is more cleaner, and easier  ****