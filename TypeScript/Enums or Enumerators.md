**What is an enum?**

- An enum is a way to give names to a fixed set of values

**Why the exist?**

- avoid magic numbers
- avoid random strings
- make code readable and safe

**So what problems do enums face**

```tsx
let role = 1

when we use enums now 
enum Role {
  Admin,
  Student,
  Teacher
}

now we can get that value though 
let role = Role.Admin
```

**Numeric Enums**

**When do we use numeric enums?**

- values are internal
- numbers are okay
- performance matter
- backed expected numbers

```tsx
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
```

**Strings enums**

**When do we use string enums?**

- human readable
- no guessing
- no reverse mapping

**Why pros prefer string enums?**

- Logs are readable
- debugging is easier
- safer across system

```tsx
enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error"
}

let state: Status = Status.Loading
```

**Constant enums**

**When do we use constant enums**

- when performance matters
- enums is small
- enum is internal
- no runtime access needed

**What makes them special**

- They disappear after compilation
- No js object is created
- Values are inlined

```tsx
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move = Direction.Up
let move = 0
```

**Quick Question?**

**What is the difference between enums and type alias**

TypeAlias

```tsx
type Status = "loading" | "success" | "error"
```

Enums

```tsx
enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error"
}
```

**Constraints and When not to use enums?**

- Union types are enough
- you dont need runtime values
- you want simple js output

**Lets see real world cases**

```tsx
enum Role {
  Admin = "ADMIN",
  Student = "STUDENT",
  Teacher = "TEACHER"
} 

type User = {
  name: string
  role: Role
}

now like this
role can only be a valid enum value
no typos or errors
readable everywhere
```