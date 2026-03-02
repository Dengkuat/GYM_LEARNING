1. **What is the `children` prop?**
- Children props are a special props that represent whatever we put inside the opening and closing tags of a component

1. **what is a normal prop?**
- This are any custom read only data passed on from parent to child components.
- We use normal props when we want to pass specific data or configuration values

1. **When do we use the children props?**
- When we are building reusable wrapper components
- When we want flexible content
****
1. **What is `useState` and where and how is used?**
- useState is a react hook that allows a functional component to store and manage or manipulate state or data that can change over time
- So it gives the components a state variable(the current value) and the setter function (used to update the value)

1. **When do we useState?**
- When the data needs to change overtime
- When the UI must update when values change

So when we useState then react stores the initial value and when we call the setter function then react updates the state variable or current value then react re-renders the components and the new state is displaced or used

1. **What is useReducer?**
- useReducer is a react hook that is used to manage state with more complex logic
- This instead of updating directly like useState then it dispatches an action, a reducer function decides how state should change

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- state - current state
- dispatch - function to send action
- reducer - function that updates state
- initialState - starting value

```jsx
const intialState = {count:0};
```

```jsx
function reducer(state, action){
	switch(action.type){
		case"incerment":
		return{count: state.count+1};
		case"decrement":
		return{count:state.count-1};
		default:
		return state;
	}
}
```

- So it receives the state
- It receives the action
- Then it must return a new state

1. When would you choose to use `useReducer` over `useState` for state management?
- When the state logic is complex (multiple conditions, multiple actions, difference ways to update the same state)
- When state updates depending on the previous state

So all this make the useReducer component more predictable and scalable

1. What is a side effect in React?
    - Provide examples of common side effects
    - Why can't we perform side effects directly in the component body?
2. Explain the `useEffect` hook.
    - What are its three parts (effect, dependencies, cleanup)?
    - When does useEffect run?
3. What is the dependency array in `useEffect` 
    1. What happens when you don’t pass it?
    2. What happens when you pass in an empty array?
    3. What happens when you pass it with a state variable?
4. How do  you clean up side effects in `useEffect` 
    1. Why is it important to clean up side effects?
5. What is the difference between `useMemo` and `useCallback` ?
6. What are custom hooks, and when would you need to use them?
7. Why is it often better to conditionally render components rather than toggling their visibility with CSS in React?
8. Differentiate between controlled and uncontrolled components in React
9. What are Pure Components?
    - How do they optimize performance?
    - When should you use them?
10. What are Higher-Order Components (HOCs)?
11. What is the difference between client-side and server-side rendering?
    1. What are the pros and cons of each?
    2. Which one does React use?
12. How do you handle form submission in React?
    - Why do we need to prevent default behavior?
    - How do you collect form data in React?
13. What is lazy loading and code splitting?
    - How do `React.lazy` and `Suspense` work together?
    - Why is code splitting important for performance?

### **Questions from Trainees:**

1. What problem does `useState` solve in React?
2. Why do we use `useLayoutEffect` and when do we use it instead of `useEffect`?
3. What is `useRef` and how does it work?