### **What is TypeScript?**

- Supset of JavaScript that allows JS work in TS
- Adds static type checking (catches errors at compile time)
- Makes code more predictable and maintainable
- Great for large projects and teamwork flow

NOTE: so TS just improves JS with types

### **Type Annotaions vs Type Inference**

- Type Annotation

We tell TS the type

```tsx
let age: number = 25;

```

- Type Inference

TS automatically figures out the type

```tsx
let age = 25; inferred as a number

```

**NOTE:** We use annotation to make our code more clear and safe, Inference works for simple cases

### **Basic TS File structure**

```tsx
let name: string = 'Deng';
console.log(name);

```

After the compiler becames normal JS

```tsx
var name = 'Deng';
console.log(name);

```

**NOTE:** Thinking of TS as a safer layer that compiles to JS

### **tsconfig.json(BASIC)**

- ‘target’ → JS version(es5, es6)
- ‘strict’ → enables strict mode type-checking
- ‘rootDir’ → folder where TS files are
- ‘outDir’ → folder where JS files are generated