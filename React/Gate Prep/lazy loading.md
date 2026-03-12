- Lazy loading means loading something only when its is needed
- Instead of loading everything at the start of the app, the app wait until the user actually needs a piece of code

**Examples**

- Home page
- Dashboard
- Setting
- Admin panel

**Without lazy loading**

- App loads everything at once
- Home + Dashboard + setting + Admin
- With this even if the user only visits Home, the browser still downloads all pages

**With lazy loading**

```jsx
App loads only Home first
Dashboard loads when user opens it
Settings loads when user opens it
Admin loads when needed
```

- Faster first load
- Smaller bundle
- Better performance

**What does lazy loading exist**

- Modern apps can became very large with very big bundle size meaning
- So if everything loads at once

→ slow startup

→bad mobile performance

→higher bandwidth

Lazy loading solves this by splitting code into smaller chunks(code splitting)

**Lazy loading in React**

```jsx
//React provides a built in API 
React.lazy()

//with a component
<suspense>
```

**Basic Lazy loading example**

```jsx
import Dashboard from "./Dashboard"
```

- This will load immediately

```jsx
import {lazy } from "react"
const Dashboard = lazy(()=>import("./Dashboard"))
```

- so now the Dashboard only loads only when needed

**Using suspense**

```jsx
import { Suspense, lazy } from "react"

const Dashboard = lazy(() => import("./Dashboard"))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  )
}
```

- React sees Dashboard
- It downloads the file
- While downloading it shows loading
- When it finished the Dashboard gets rendered to the UI