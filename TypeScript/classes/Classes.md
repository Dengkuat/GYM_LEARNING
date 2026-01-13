### Class

**What is a class?**

- A class is a blueprint for creating objects with shared properties and methods

**Classes and constructors**

- class - blueprint
- object - actual thing we are creating the class for
- constructor - setupe function that runs when the object is created
- A constructor can be defined as a special method that is called when a new object is created used to inialise properties

```tsx
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John", 25);
john.greet(); // Hello, my name is John
```

- Although we can directly declare and intiallize properties in the constructor

```tsx
class Person {
  constructor(public name: string, private age: number) {}
}

const jane = new Person("Jane", 30);
console.log(jane.name); // public works
// console.log(jane.age); // error: private
```

**When do we need constructors**

- when u forget to intialize fields
- objects could be incomplete
- When we want to ensure every student has a name and an age

**Access Modifiers**

- Access modifiers control who can touch or edite the class
- They also reduce on code repeatition becuase we can use access modifiers to directly declare and intialize properties in the constructor

**Types**

- **public** – accessible everywhere (default)
- **private** – accessible only inside the class
- **protected** – accessible inside the class and subclasses

```tsx
class Animal {
  public name: string;
  private species: string;
  protected sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
console.log(dog.name); // OK
// console.log(dog.species); // Error
// console.log(dog.sound); // Error
```

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

- Inheritance lets once class reuse the properties of another class
- We use the extends keyword
- Subclass can access public and protected memebers of parent but not private

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

### **Exercise 1**

1. Create a class Student with name, age, and grade.
2. Make grade **private** and name **readonly**.
3. Add a method to show student info.
4. Extend it with a class HighSchoolStudent and add schoolName.

```tsx
class Student {
    readonly name: string
    age: number
    private grade: number

    constructor(
        name:string,
        age:number,
        grade:number
    ){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    studentInfo(){
        console.log(`${this.name}, ${this.age}, ${this.grade}`)
    }
}

class HighSchoolStudent extends Student{
    schoolName: string;

    constructor(
        name:string,
        age:number,
        grade:number,
        schoolName: string
    ){
        super(name, age, grade);
        this.schoolName = schoolName;
    }
}
```