import { createBrowserRouter } from "react-router-dom"
import Profile, { loader } from "./Practice/deferData"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
    loader: loader
  }
])