- In React, you cannot render arrays directly but you can render and array of react elements
- React uses .map() to turn data into UI

```jsx
<ul>
{
	numbers.map((n) => {
		<li>{n}</li>
	})
}
</ul>
```

**Why .map()?**

- .map() returns a new array
- That array contains the React elements
- React then knows how to render elements

**Basic list rendering example**

```jsx
const fruits = ['Apple', 'Banana', 'Mango'];
const FruitList = () => {
	return <ul>
						{
							fruits.map((fruit) => {
								<li>{fruit}</li>
							})
						}
					</ul>
}
```

**Keys**

- React needs a key for each list item

**Why?**

- Tract the items
- Know what to change
- Update efficiently

**What is a key?**

Is a unique identifier, stable between renders and used internally by React

```jsx
<li key="apple">Apple</li>
```

**Using IDs**

```jsx
const users = [
  { id: 1, name: "Deng" },
  { id: 2, name: "John" },
];

const UserList = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

**Using Index as key**

```jsx
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```