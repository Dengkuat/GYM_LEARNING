**Dynamic segments (:id)**

- This is a variable inside a url

Example

```jsx
/products/1
/products/2
/products/10
```

So instead of creating many routes we can use the dynamic route

```jsx
<route path="/products/:id" element={<productDetail/>}>
```

So now the :id means react router will capture whatever value that appears there

So meaning then our id becomes the variable now

**Case cinarials for the dynamic segment**

- **E-Commerce product page**, so instead of creating thousands of separate pages for every single product we can use the a dynamic route to create a route or a place holder and only the values inside changes based on what the users are looking for
- **User Profiles**, for social media sites, nearly all user use a profile/:username, then this allows any user to have a unique url that points out the same profile component that is the dynamic router, which loads a specific persons bio or profile

Note: the dynamic segments can be used for;

- code scalability, it allows handle of a large base will not having to add new lines of codes to your router
- cleaner code, with a single component, code looks easy to debug and read instead of having very many identical ones that do almost similar things

**useParams**

- Now we need a way to read the id from a url

```jsx
import {useParams} from "react-router-dom"

function ProducDetails(){
	const {id} = useParams();
	
	return <h1>Product ID:{id}<h1>
}
```

- So now if this url is like this Product ID: 5 then useParams will return the product

**What does useParams() return?**

- useParams returns an object

```jsx
{id: "8"}
```

**useNavigate(Programming navigation)**

- Some times we may not want to use Link to navigate

We want the navigation to happen when something happens an action like

- clicking a button
- submitting a form
- after login
- after payment

So for that then we can useNavigate()

```jsx
import {useNavigate} from "react-router-dom"
function Home(){
	const navigate = useNavigate();
	
	return(
		<button onClick={() => navigate('products')}>
			Go to Product
		</button>
	)
	}
```

So now button takes us to the products

**Back Button using useNavigate**

- You can also go back one page using navigate

```jsx
const navigate = useNavigate();
<button onClick={()=>navigate(-1)}>
	Go back
<button>
```

**Use cases of useNavigate**

- **redirecting after an action,** sending a user to a “success page” after they have submitted a form to finished checkout
- Go back or go forward, we can pass a number to move through the browser history

navigate(-) → takes us back one page

navigate(1) → goes forward one page

**Differences between useNavigate and <Link>?**

- use<Link> form standard navigation where the user decides to click a button or menu item
- useNavigate when you code can decide its time to change the page such as when an action happen, clicking a button, submitting a form