### **Obejct Types**

- Object are collection of key-value pairs
- You can type them explicitly

```tsx
let person : {name :string; age:number; isStudent:boolean}={
name: "Deng",
age:20,
isStudent:true
};
```

**Key:**Always define the type of each property to avoid runtime mistake 

### Interfaces

- Interfaces allow you to define the structure of an object
- Easier to reuse and extend then writing inline types

```tsx
interface Person{
name:string,
age:number,
isStudent:true
};

let student:Person={
name:'Deng',
age:20,
isStudent:true
};
```

**Key:**Interface are like contracts the object follow 

### Optional Properties

- Sometimes, an object may not have all properties but we can use the ? operator to make a property optional

```tsx
interface Person{
name:string;
age:number;
isStudent?:boolean;
}
let teacher:Person = {
name:'John',
age:35
};

So the isStudent is optional
```

### Readonly Properties

- Lock in some Properties so they are never changed
- USe readonly

```tsx
interface Person{
readonly id:number;
name:string;
}
let student:Person = {
id:101, 
name:"Deng"
};
When we try to reassig a readonly property value then we get an error
student.name = 'Alex';
student.id = 102; - Error;
```

### Extending Interfaces

- One interface can inherite properties from another interface
- Great for larger projects instead of rewriting everything again

```tsx
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
employeeId:number;
}
let worker:Employee={
name:'Deng',
age:20,
employeeId:123
};
```

KEY: So we use extentions to avoid repeating types

### Index Signitures

- Sometimes you don’t know all keys beforehand
- We use index signiture [key: string]:type

```tsx
interface Grades {
[subject:string]:number;
}
let studentGrades:Grades = {
math:90,
english:85
};
```