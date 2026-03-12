1. **CSR client side Rendering**
- CSR means the browser(client) render the page using JavaScript
- This is a default way React apps work when you create then with tools like vite and create react app

**How it works**

- Browser request the page from the server
- Servers sends a mostly empty HTML file
- Browser download the JS bundle
- React runs in the browser
- React builds the UI

```jsx
<div id="root"></div>
<script src="main.js"></script>

createRoot(document.getElementById("root")).render(<App />)
```

**The flow** 

Browser → request page
Server → send JS bundle
Browser → React runs
React → builds UI

**Advantages**

- Very interactive
- Smooth navigation
- Less server work
- Good for dashboards and apps

**Disadvantages**

- slow first load
- Requires JS to load UI

1. **SSR - Sever side rendering**
- SSR means the server generates the HML before sending it to the browser
- So the browser receives a fully rendered page immediately

**How SSR works**

- Browser requests page
- Server runs React Code
- Server generates HTML
- Servers send the HTML to the browser
- Browser displays it immediately
- React hydrates the page

**What is hydration**

- This is after SSR sends a HTML, react still needs to attach even listeners

```jsx
<button>Click me</button>

//this wont work untill we add an event listener
<button onClick={handleClick}>
```