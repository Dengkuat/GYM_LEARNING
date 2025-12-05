Introduction to classes

What is a class?

A class is a blueprint to create objects with shared properties and method that was introduced in the es6

So it a cleaner and more readable syntax on top of js existing protype-based inheritance

before es6, they used constructructors function and prototypes, which where more verbus and less intutive

```jsx
class Person {
// constructor runs when creating a new instance
constructor(name, age) {
[this.name](http://this.name/) = name;
this.age = age;
}
```

```jsx
// method shared by all instances
greet() {
console.log(Hello, my name is ${this.name} and I'm ${this.age} years old.);
}
}
```

Creating instances

```jsx
const person1 = new Person('Deng', 20);
person1.greet(); // Hello, my name is Deng and I'm 20 years old.
```

before the es6 this is how they did this

```jsx
function Person(name, age) {
[this.name](http://this.name/) = name;
this.age = age;
}
```

```jsx
Person.prototype.greet = function() {
console.log(Hello, my name is ${this.name} and I'm ${this.age} years old.);
}
```

1.What is the purpose of the constructor method in a class

The constructor is a method that runs automatically when u create a new instance of the class using new method

it is used to initialize the object properties setting it up the instance with the data it needs

[2.How](http://2.How) do u create an object from a class

we can use the new keyword following the class name and parenthesses with any argument needed by the constructor

eg - obj - new ClassName(arg);

[3.How](http://3.How) do class methods differ from the regular methods

Class method are functions defined inside a class that belong to instance of that class

They automatically have access to the instance (this) and are shared across all instance via the class prototype

the regular functions are jsut standalone and dont have the connection to instance unless you bind them autumatically 

Constructor Method

What is a constructor method?

this is a special method inside of a class

it runs automatically when u create a new object with new keyword

its main job is to initalize the intance properties - basically, tos et up your object with the value it need right from the start 

```jsx
class MyClass {
constructor(parameter1, parameter2) {
this.property1 = parameter1;
this.property2 = parameter2;
}
}

an example of this is 
class Student {
  constructor(name, course) {
    this.name = name;   // instance property
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, studying ${this.course}.`);
  }
}

const student1 = new Student('Deng', 'Computer Science');
student1.introduce();  // Hi, I'm Deng, studying Computer Science.
```

What if u dont have a constructor

when u dont define ur constructor in your class, then js adds an empty default constructor that does nothing

this mean u can still create instances, but u wont be able to set any custome properties during the instantiation

```jsx
class EmptyClass {}
```

```jsx
const obj = new EmptyClass();
console.log(obj);  // {}
```

interview questions

1.what happens when u call a new on a class without a constructor

if a class has no construco defined,js provides an emptydefault construcor that allows you to create instances, but u cannot set any custom properties via parameters because there is no construcor code to handle that

2.can u have more than one construcor in a class? why or why not

no, we cannot have more than one constructor in a class, defining more than one constructor will cause a syntax error, so we should use optional parameters, default values or methods overloading patterns inside a single constrctor instead

3.Write a class car with a construcot that takes make and year, and a method getinfo  that prints this info

```jsx
class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

const myCar = new Car('Toyota', 2025);
myCar.getInfo();  // Make: Toyota, Year: 2025
```

Creating instances from classes

What is an instance

An instance is a unique object created from a class blueprint

so every instance has its own copy of instance property this.name

share across to the class methodvia the prototype

How to create an instance

using the new keyword before the class name

passing the required argument by the constructir usually 2 

store the result in a variable optional but usually done so u can use it later

```jsx
class Student {
constructor(name, age) {
[this.name](http://this.name/) = name;
this.age = age;
}
```

```jsx
introduce() {
console.log(Hi, I'm ${this.name} and I'm ${this.age} years old.);
}
}
```

```jsx
const student1 = new Student('Deng', 20);
student1.introduce(); // Hi, I'm Deng and I'm 20 years old.
```

In a cenaio where we have multiple instances from the same class 

each will have its own property values, but all share the same method

```jsx
const student2 = new Student('Asha', 22);
student2.introduce(); // Hi, I'm Asha and I'm 22 years old.
```

Instance vs method storage

properties live on each other

methods live once on each other and are shared

```jsx
console.log(student1.introduce === student2.introduce); // true (shared method)
```

- **Practice Questions**
- What keyword must you use to create an instance from a class?

you must use the new keyword before the class name

just like obj = new className();

this tells js to create a new object and run the class constructor

- What is the main difference between an instance property and a method?

instance properties live on each object separetly. Where each instance has its own values

methods are stored once on the class prototype and are shared accross all instances

- Create a class Book with title and author properties, and a method describe() that logs "Title by Author". Then create **two different book instances**.

```jsx
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log(`This book: "${this.title}" is by ${this.author}`);
  }
}

const book1 = new Book("Adventures", "Deng");
book1.describe(); // This book: "Adventures" is by Deng

const book2 = new Book("Culture", "Kuat");
book2.describe(); // This book: "Culture" is by Kuat
```

4.Inheritance with extends

What is an inheritance

inheritance allow one class/child to take properties and methods from another class/parent

this helps in reuse of code instead of rewritting the same logic

```jsx
class Parent {
constructor(name) {
[this.name](http://this.name/) = name;
}
```

```jsx
greet() {
console.log(Hi, I am ${this.name});
}
}
```

```jsx
class Child extends Parent {
play() {
console.log(${this.name} is playing.);
}
}
```

```jsx
const kid = new Child('Deng');
kid.greet(); // from Parent
kid.play();  // from Child
```

we can just use the extended keyword to make one class inherit from another class

in this case the child gets all the methods and properties from the parent

u can add new methods or overide the exiting ones in the child

```jsx
class Animal {
speak() {
console.log('The animal makes a sound.');
}
}
```

```jsx
class Dog extends Animal {
speak() {
console.log('The dog barks.');
}
}
```

```jsx
const pet = new Dog();
pet.speak(); // The dog barks.
```

- **Practice Questions**
- What keyword is used for inheritance in ES6 classes?

n ES6, we use the extends keyword to make a child class inherit properties and methods from a parent class.

- Can a child class use the parent class’s methods without redefining them?

Yes — a child class automatically inherits all methods from its parent and can use them without redefining them. If the child **redefines** a method, it will **override** the parent version.

- Write a class Vehicle with a move() method that logs "Vehicle is moving".
    
    Then create a Car class that extends Vehicle and adds a honk() method that logs "Car is honking".
    
    Create a Car instance and call both methods.
    
    ```jsx
    class Vehicle {
      move() {
        console.log("Vehicle is moving");
      }
    }
    
    class Car extends Vehicle {
      honk() {
        console.log("Car is honking");
      }
    }
    
    const car1 = new Car();
    car1.move(); // inherited from Vehicle
    car1.honk(); // defined in Car
    ```
    

Using super

What is super

this is a keyword used inside of a child class to

call the parent classes constrcutor

class parent methods

1.class the parent constructor

when a child has its own constructor

you must class super() before using this inside that construcor

this ensures the parent’s properties setup before the child adds its own

```jsx
class Vehicle {
constructor(type) {
this.type = type;
}
}
```

```jsx
class Car extends Vehicle {
constructor(type, brand) {
super(type); // calls Vehicle constructor
this.brand = brand;
}
}
```

```jsx
const myCar = new Car("Car", "Toyota");
console.log(myCar.type);  // Car
console.log(myCar.brand); // Toyota
```

2.calling parent methods

A child class can still use a aprent method even if it overrides it by calling with the super keyword

```jsx
class Animal {
speak() {
console.log("Animal makes a sound");
}
}
```

```jsx
class Dog extends Animal {
speak() {
super.speak(); // call parent version
console.log("Dog barks");
}
}
```

```jsx
const pet = new Dog();
pet.speak();
// Animal makes a sound
// Dog barks
```

keyrules of super

must be called before this in a child construcotr

you dont need super() if ur child does not have a constructor it will autmoatically use the 

super methodName() lets you use the parent’s version of a method inside of the child

- **Practice**
- Why do we have to call super() before using this in a subclass constructor?

we use it when we font of the this when we want to add new properties to the child class so we do not get a referenc error coz this will think u are trying to create more than one constuctor

- Write a class Person with name and age properties, and a introduce() method that logs "My name is X and I am Y years old".
    
    Then create a Student class that extends Person, adds a grade property, and overrides introduce() to also include "I am in grade Z".
    
    Make sure to use super.introduce() in the override.
    
    ```jsx
    class Person{
    	constructor(name, age){
    		this.name = name
    		this.age = age 
    	}
    	introduce(){
    			console.log(`My name is ${this.name} and i am ${age} yeas old`);
    	}
    }
    class Student extends Person{
    	constructor(name, age, grade){
    	super(name, age)
    	this.grade = grade
    	}
    	introduce(){
    	super.introduce
    		console.log(`i am in grade ${this.grade}`);
    	}
    }
    const student1 = new Student("Deng", 20, "A");
    student1.introduce();
    //output
    My name is Deng and I am 20 years old
    I am in grade A
    ```
    

Static Method overview

a static method is a function attached to the class itself, not instance of the class

you call it on the class and not on the object/instance created by the class

they are helper function that don’t depend on instance data

```jsx
class MathHelper {
static add(a, b) {
return a + b;
}
}
```

```jsx
console.log(MathHelper.add(5, 3)); // ✅ Works
const helper = new MathHelper();
// helper.add(5, 3); ❌ Error — static method is not available on instance
```

key. they belong to the class and not the instance

they are used when a method dosn’t need this from an instance

they can still be inherited by class(child)

```jsx
class Animal {
static category() {
return "Living thing";
}
}
```

```jsx
class Dog extends Animal {}
```

```jsx
console.log(Dog.category()); // "Living thing"
```

intervirew questions

**1. What keyword is used to define a static method in a class?**

static and this is placed before the method name

**2. True or False: You can call a static method on an instance of a class.**

this is false because the static method is called on the class itself and they dont depend on the instance of the class values

**3. Create a class MathUtil with a static method square(n) that returns the square of n.**

```jsx
class MathUtil {
static square(n) {
return n * n;
}
}
```

```jsx
console.log(MathUtil.square(5)); // 25
```

Method Overriding in es6 classes

what does it mean

Method overriding happens when a child class defines a method with the same name as a method in the parent class, repacing/overiding the parent’s version

How does this work

the child class method that takes priority

you can still access  the parent class’s version using the super keyword

```jsx
class Parent {
greet() {
console.log("Hello from Parent");
}
}
```

```jsx
class Child extends Parent {
greet() {
console.log("Hello from Child");
}
}
```

```jsx
const c = new Child();
c.greet(); // "Hello from Child"
```

using super to call parent method

```jsx
class Parent {
greet() {
console.log("Hello from Parent");
}
}
```

```jsx
class Child extends Parent {
greet() {
super.greet(); // Call parent version
console.log("...and Hello from Child");
}
}
```

```jsx
const c = new Child();
c.greet();
// Hello from Parent
// ...and Hello from Child
```

so what is its purpose 

it customizes or extends the parent’s behavior

when using the super keyword, used inside overidden method to call the parent’s implementation

common use case, when you want to keep some of the parent’s logic but also add new logic in teh child