In normal HTML form element can control there self

```jsx
<input type='text'/>
```

- The browser stores the value
- Your type → the input changes
- JavaScript doesn’t own the value unless you ask for it

**In React, the control is flipped**

- A Controlled component means, react single state is the single source of truth
- So instead of input storing it value, the state store store the value and the input just displays the state
- So here React actually controls the state

**The core idea**

A controlled input has two things

- Value → come from state
- onCharge → update state

**Example**

```jsx
import {useState} from 'react';

function Form(){
	const [name, setName] = useState('')
	return (
		<input 
		type='text'
		value ={name}
		onChange={(e) => setName(e.target.value)}
		/>
	)
}
```

**Why is onChange not optional**

- Input becomes read-only
- You can’t type

**Mental Model**

User types → event

Event → updates state

State → updates the UI

**Difference between the controlled vs uncontrolled components**

controlled

- value in react state
- predictable
- easy validation
- easy to reset
- Preferred in React

Uncontrolled

- value stored in DOM
- Harder to manage
- user ref
- Less common in React app