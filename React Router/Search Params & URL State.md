**What is search params?**

- This are values that appear after ? in a url

```jsx
/products?category=shoes&sort=price
```

→ **/products** is the route

→ **?** start of a query string

→**category=shoes** is to filter category

→**sort=price** is the sorting rule

- so the url itself is a holding state

**What is useSearchParams?**

UseSearchParams is a **react router hook** used to

- Read search params
- Update search params

```jsx
import { useSearchParams } from "react-router-dom";
```

```jsx
const [searchParams, setSearchParams] = useSearchParams();
```

searchParams.get() → reads params

setSearchParams() → update params

**Reading Query Params**

```jsx
/products?category=shoes

const [searchParans] = useSearchParams();
const category = searchParams.get("category")

category = "shoes";

So this one is read directly from the url 
```

**Updating Query Params**

```jsx
//button example
<button onClick={() => setSearchParams({catgeroy:"Shoes"})}>
	Shoes
</button>

//so now when the button is clicked then the url become updated to shoes as categroy
```

**Why Refresh still keeps filter**

- Because the state is inside the URL

```jsx
/products?category=shoes

so when a page refreshes
searchParams.get("category")

//results becomes
Shoes

//Making the filter to stay
```

**What are the difference between useState and useSearchParams?**

| **useState** | **useSearchParams** |
| --- | --- |
| Stored in React memory | Stored in URL |
| Lost on refresh | Survives refresh |
| Not shareable | Shareable |
| Local to component | Global in browser |

**Why URL state is powerfull**

Because we can;

- share filters

```jsx
/products?category=shoes
```

Send links to people

- Save state after refresh

filter stays active

- browser history works

back button works correctly

```jsx
?category=shoes
?category=phones
```

we can press back to go back to shoes

**When should state be in URL**

store url when 

| **Good for URL** | **Bad for URL** |
| --- | --- |
| Filters | Form inputs |
| Sorting | Temporary UI state |
| Pagination | Animation states |
| Search queries | Modal open/close |