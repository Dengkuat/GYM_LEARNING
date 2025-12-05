**Q1:** *What is object destructuring in JavaScript?*

**A:** It’s a syntax that allows you to unpack properties from objects into variables, making code shorter and cleaner.

```jsx
const { name, age } = { name: "Deng", age: 20 };
```

**Q2:** *How do you rename variables while destructuring?*

**A:**

```jsx
const person = { name: "Deng", age: 20 };
const { name: fullName, age: years } = person;
```

Here, name is stored in fullName, and age is stored in years.

**Q3:** *How do you set default values while destructuring?*

**A:**

```jsx
const { score = 100 } = { name: "Deng" };
console.log(score); // 100
```

**Q4:** *How do you destructure nested objects?*

**A:**

```jsx
const user = { name: "Deng", address: { city: "Juba", country: "South Sudan" } };
const { address: { city, country } } = user;
```

**Q5:** *What happens if you destructure a property from null or undefined? How do you avoid errors?*