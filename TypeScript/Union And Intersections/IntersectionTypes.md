**Definition**

- Intersection type represents a value that must satisfy all of several types at once
- Formally A and B means a value has all properties or method of both A and B

```tsx
type person = {name: string}
type employee = {id: number}

type worker = person & employee;
//so worker must have both the naem and id
```

**Why does it exist?**

- sometimes a value need multiple contracts at the same time
- union → this or that → optional behavior
- Intersection → this and that → combined behavior
- Union choses one path while intersectin combines the paths

**How TypeScript treats intersection internally?**

- TS merges the type members, all properties from all intersections are required
- Conflicts (same property name, different types) → TS creates a types that must statisfy both

```tsx
type A = {x: number};
type B = {x:string, y:boolean}
x must be a number and string 

So here the intersections are strict
```

**Example**

```tsx
type Address = {street: string}
type Contact = {email: string}

type ContactInfo = Address&Contact;

const person : contactInfo = {
	steet: "123 st",
	email: "abc@example.com",
}
```

**Real Word use cases** 

- combining interface for reusable types
- mixins/ multiple behavior in objects
- Complex API response where an object must satisfy multiple contracts
- React props mergining types: PropsA & PropsB