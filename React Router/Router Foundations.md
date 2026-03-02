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

- This is when JavaScript in the browser controls navigation, instead of the server sending a new HTML page every time

**What is BrowserRouter?**

- It listens to the URL changes, uses browser history API, controls which router renders, so without routing doesn’t work

**Creating pages**

```jsx
//home.jsx
export default function Home() {
  return <h1 className="text-3xl">Home Page</h1>;
}

//about.jsx
export default function About() {
  return <h1 className="text-3xl">About Page</h1>;
}

//contact.jsx
export default function Contact() {
  return <h1 className="text-3xl">Contact Page</h1>;
}

//notFound.jsx
export default function NotFound() {
  return <h1 className="text-3xl text-red-500">404 - Page Not Found</h1>;
}

//app.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
```

**How all this route matching works**

- React Router compares current URL to path
- First match wins meaning match anything that wasn’t matched above

**Navigation bar with active styling**

```jsx
//navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle =
    "px-4 py-2 rounded transition";

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${linkStyle} bg-blue-500`
            : `${linkStyle} hover:bg-gray-600`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? `${linkStyle} bg-blue-500`
            : `${linkStyle} hover:bg-gray-600`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? `${linkStyle} bg-blue-500`
            : `${linkStyle} hover:bg-gray-600`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
```