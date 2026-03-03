**Why does nested routes matter?**

- When apps grow, you don’t want to repeat ui

```jsx
/dashboard/overview
/dashboard/profile
/dashboard/settings
```

So all of this needs sidebars, same layout, header so without the nested routes, you duplicate the layout in every page, which is messy and not scalable 

**So in definition?**

- ****Nested layout is a way to define the **hierarchy** of routes, where children components are rendered inside parent component based on there url’s
- Instead of replace the whole entire page then we could use the nested routes to swap specific fragments while keeping the common layouts