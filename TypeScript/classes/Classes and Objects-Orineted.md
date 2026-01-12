### Class

**What is a class?**

- A class is a blueprint for creating objects with shared properties and methods

**Classes and constructors**

class - blueprint

object - actual thing we are creating the class for

constructor - setupe function that runs when the object is created 

```tsx
class Student {
	name: string
	age:age
	
	constructor(name: string, age:number){
		this.name = name
		this.age = age
	}
}

then when we acctually creating the project
const s1 = new Student('Deng', 20)
```

**When do we need constructors**

- when u forget to intialize fields
- objects could be incomplete
- When we want to ensure every student has a name and an age

**Access Modifiers**

Access modifiers control who can touch or edite the class

The three modifiers

- public
- private
- protected

**Public (default)**

```tsx
class Student {
  public name: string
}

so this is accessible by everyone 
even if we dont write it as public it is default so we good
```

Where it can be accessible 

- everywhere

**Private** 

```tsx
class BankAccount {
  private balance: number

  constructor(balance: number) {
    this.balance = balance
  }
}
```

- Meaning this cannot be touch or modified by unautherised personael
- Again it cannot be accessed outside the class

**Protected**

```tsx
class Person {
  protected age: number

  constructor(age: number) {
    this.age = age
  }
}
```

This can be accessed 

- inside the class
- inside the subclasses
- Not accessible from outside

**Readonly Fields**

**What does this mean?**

- This a value that can be set once and never changed again

```tsx
class User {
  readonly id: string

  constructor(id: string) {
    this.id = id
  }
}
```

### Inheritance

Inheritance lets once class reuse the properties of another class

```tsx
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Student extends Person {
  course: string

  constructor(name: string, course: string) {
    super(name)      // call parent constructor
    this.course = course
  }
}

const st = new Student("Deng", "Computer Science")
```

**Keywords**

extents → students is a person

super() → runs parent setup first or constructors to be reused aswell before creating any new one

### Shorthands or shortcuts

```tsx
class Student {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

we can easily do this 
class Student {
  constructor(
    public name: string,
    public age: number
  ) {}
}
```

**Quick question** 

**What is the difference between the classes and interface** 

- Interface just creates the structure the object must follow
- Class create structure behavior and implementation

**How to use both together**

```tsx
interface Person {
  name: string
}

class Student implements Person {
  name: string
}
```