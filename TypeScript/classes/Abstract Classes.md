- Abstract class cannot be instantiated directly
- Can contain abstract methods and normal methods
- Subclass must implement abstract methods

```tsx
abstract class Shape {
  constructor(public color: string) {}

  abstract area(): number; // must be implemented in subclass

  describe() {
    console.log(`This shape is ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
const circle = new Circle("red", 5);
circle.describe();
console.log(circle.area());
```

**Interface Implementation with classes** 

- Interface contact for a class which defined the method and properties before the class is created or implemented
- Class must implement all interface members
- Use implements keyword