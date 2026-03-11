import { createBrowserRouter, redirect } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import { fakeAuth } from "./auth/fakeAuth"

async function loginAction({ request }) {
  const formData = await request.formData()
  const username = formData.get("username")

  if (username) {
    fakeAuth.isAuthenticated = true
    return redirect("/dashboard")
  }

  return null
}

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login")
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  }
])