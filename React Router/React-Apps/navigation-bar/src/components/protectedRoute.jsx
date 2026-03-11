import { Navigate } from "react-router-dom"
import { fakeAuth } from "../auth/fakeAuth"

export default function ProtectedRoute({ children }){

  if(!fakeAuth.isAuthenticated){
    return <Navigate to="/login" />
  }

  return children
}