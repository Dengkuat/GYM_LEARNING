React is a js library for building user interface, but what makes it more powerfull is its component-based approach 

**Component based thinking** 

- Think of UI user interface as a tree made of small reusable building blocks called components

**Each component**  

- has its own structure, styling and   behavior
- Can re reused in multiple places
- Can be nested inside other components

This is different from traditional HTML/JS where you often manipulate the DOM directly and repeat a lot of code

**Why components matter**

Components help us think in this way

- Break the UI into logical pieces(buttons, forms, headers, cards)
- Each piece manages its own state(data it controls) and props (data it receives from outside)
- The UI becomes predictable, easier to debug and easier to maintain

**Examples**

- Header components → knows how to render navigation and logo
- Button components → knows how to render itself and respond to clicks
- Form components → knows how to manage inputs and submit data

And later they be composed in this way

```jsx
<app>
<header/>
<form/>
<button/>
</app>
```

**Examples of thinking in react**

- Break the UI into components
- Decide what state each component needs
- Determine how components communicate(via props)
- Render the UI based on state

git clean -fd