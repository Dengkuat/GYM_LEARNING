import { Outlet } from "react-router-dom"

export default function App(){
  return (
    <div>
      <h1>My App</h1>
      <Outlet />
    </div>
  )
}