**Partial <Types>**

- This makes all properties optional

```tsx
interface User {
  name: string;
  age: number;
}

const updateUser: Partial<User> = {
  age: 30
}; //  valid, name can be missing
```

**Required<Type>**

- Makes all properties required.

```tsx
interface User {
  name?: string;
  age?: number;
}

const user: Required<User> = { name: "Deng", age: 20 }; //  must include both

```

**Readonly<Type>**

- Makes all properties readonly

```tsx
const user: Readonly<User> = { name: "Deng", age: 20 };
user.age = 25; //  Error
```

**Pick<Type, Keys>**

- Creates a new types by selecting specific properties

```tsx
type NameOnly = Pick<User, "name">;
const n: NameOnly = { name: "Deng" }; //  ok
```

**Omit<Type, Keys>**

- Removed specified properties

```tsx
type WithoutAge = Omit<User, "age">;
const u: WithoutAge = { name: "Deng" }; //  ok
```

**Record<Keys, Type>**

- Creates a type with keys of a specific union and all value of a specific type

```tsx
type Roles = "admin" | "user" | "guest";
const roleMap: Record<Roles, number> = {
  admin: 1,
  user: 2,
  guest: 3
};

```

**ReturnType<Type>**

- Extracts the return type of a function type

```tsx
function getUser() {
  return { name: "Deng", age: 20 };
}

type UserType = ReturnType<typeof getUser>; 
// { name: string; age: number }

```

**Parameters<Type>**

- Extracts the parameters of a function as a tuple

```tsx
function login(username: string, password: string) {}

type LoginParams = Parameters<typeof login>; 
// [string, string]
```

KeyNote

Think of **3 groups**:

1. **Modify properties** → Partial, Required, Readonly
2. **Select / remove properties** → Pick, Omit
3. **Function / mapping utilities** → Record, ReturnType, Parameters