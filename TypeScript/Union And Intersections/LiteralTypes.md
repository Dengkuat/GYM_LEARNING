**What is a literal type?**

- A literal is a type representation of an exact value, not a general type eg; up, down, 5, true.
- So instead of saying the value is a string, you say it must be exactly up or down

**Why do literals exists?**

- To restrict values to specific allowed options
- Usefull in API response, status, modes and configurations
- Make your code type safe because invalid options get caught instantly

**Examples**

- Restriction values

```tsx
let direction :'up' | 'down';
direction = 'up' ok
direction = 'down' ok 
direction = 'left' error
```

- Strict Statuses

```tsx
type status = 'loading' | 'success' | 'error';
let current: status = 'success';
```

- Literal number types

```tsx
let port: 3000 | 4000;
```

- Literal boolean types

```tsx
let isDone: true;
```

**Real world uses**

- API responses (success:failed)
- button variants(primary:secondary)
- Mode toggle(dark:light)