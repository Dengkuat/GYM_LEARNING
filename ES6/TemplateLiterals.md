Template literals are strings enhanced by bacticks ` instead of single and double quotes.

They allow

1. Multiple strings at the same time
2. interpolating using the ${ }
3. Embedded Expressions inside strings

it can have a basic syntax of

```
const name = 'deng';
const age = 20;
const greeting = `Hello, my name is ${name} and l am ${age} yeaas old.`;
console.log(greeting);
```

Note: u dont need multiple backticks u can use one only and escape each with a slash /

**So we can now move on to the deep features and use cases**

1.Multiline strings without the slash /

```jsx
const message = `Dear deng, 
Welcome to the team
Regards,
Admin.`;
console.log(message);
so here is will create new lines by its own
```

2.Expression evaluation inside ${ }

```jsx
const a = 5;
const b = 10;
console.log( `${a} + ${b} = ${a+b}`)
```

```jsx
const score = 80;
console.log(`result : ${score > 50 ? "Passed" : "Failed"}`)
//we can aswell use the ternamry operator to this
```

3.Calling a function inside a template literal

```jsx
function upper(str){
  return str.toUpperCase();
}
const name = 'deng';
console.log(`Hey ${upper(name)}, welcome back!`);
```

1. Nested template literals

```jsx
const subbject = 'JavaScrit';
const level ='es6';
const message = `you are learning ${`${subbject} - ${level}`} right now`
console.log(message);
//a template literal inside another template literal
```

5.Tagged Template Literals

Advanced, used for custom processing

```jsx
function highlight(strings, ...values){
  return strings.reduce((acc, str, i) => {
    return `${acc}${str} <span> ${values[i] ?? ''}</span>`;
  }, '');
}
const user = 'deng';
const courses ='ES6';
const output = highlight `welcome ${user}, you course is ${courses}`;
console.log(output);
```

in summay

why would we use the template literals 

multiline we can use so much in jsut one template literal at a go

we can have vaiables in strings  even use the ternary operator

we can also have an inline expression

and basically used for cleaner syntax