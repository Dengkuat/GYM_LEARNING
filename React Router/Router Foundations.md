**SPA vs MPA**

**Multiple page applications**

- Every link requires a new HTML page from the server
- Browser reloads completely
- State resets
- Slower navigation

```jsx
<a href="/about">About</a>
```

- So this tell the browser to go and ask the server about /about.html

**Single page applications**

- Only one HTML file
- JS changes the user interface
- No full page reload
- Faster navigations
- State stays alive

**NB: React apps are single page applications**

So instead os asking server for a new separate page then react does this

- Changes the URL
- Check which component matches
- Render that component

**What is client side Routing?**

This is when JavaScript in the browser controls navigation, instead of the server sending a new HTML page everytime