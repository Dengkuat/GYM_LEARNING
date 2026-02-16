1. **What is the `children` prop?**
Children props are special props that allows you to pass elements or components nested inside another component

```jsx
function Container({children}){
	return(
		<div className="container">{Children}</div>
	)
}

<container>
	<p>Inside the container</p>
<container>

->Here <p> is inside the container and passed as a child prop to the container

```

- How is it different from other props?
**Regular props** are explicitly named and passed
- Provide a use case where the children prop is particularly useful
1. What is `useState` and where and how is used?
    1. When would you choose to use `useReducer` over `useState` for state management?
2. What is a side effect in React?
    - Provide examples of common side effects
    - Why can't we perform side effects directly in the component body?
3. Explain the `useEffect` hook.
    - What are its three parts (effect, dependencies, cleanup)?
    - When does useEffect run?
4. What is the dependency array in `useEffect` 
    1. What happens when you don’t pass it?
    2. What happens when you pass in an empty array?
    3. What happens when you pass it with a state variable?
5. How do  you clean up side effects in `useEffect` 
    1. Why is it important to clean up side effects?
6. What is the difference between `useMemo` and `useCallback` ?
7. What are custom hooks, and when would you need to use them?
8. Why is it often better to conditionally render components rather than toggling their visibility with CSS in React?
9. Differentiate between controlled and uncontrolled components in React
10. What are Pure Components?
    - How do they optimize performance?
    - When should you use them?
11. What are Higher-Order Components (HOCs)?
12. What is the difference between client-side and server-side rendering?
    1. What are the pros and cons of each?
    2. Which one does React use?
13. How do you handle form submission in React?
    - Why do we need to prevent default behavior?
    - How do you collect form data in React?
14. What is lazy loading and code splitting?
    - How do `React.lazy` and `Suspense` work together?
    - Why is code splitting important for performance?

### **Questions from Trainees:**

1. What problem does `useState` solve in React?
2. Why do we use `useLayoutEffect` and when do we use it instead of `useEffect`?
3. What is `useRef` and how does it work?