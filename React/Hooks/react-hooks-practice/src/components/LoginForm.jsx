// ### Exercise 1: Login Form

// - Create a **login form** with:
//     - Email and password fields.
//     - Make it a **controlled component**.
//     - Show an **error message** if the password is less than 6 characters.
//     - Add a button that **toggles between showing and hiding the password**.


import { useState } from "react";


export default function LoginForm(){

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState('')
  return(
    <div className="h-screen flex justify-center items-center">
      <form className="border-2 rounded-2xl p-5 shadow-2xl">
        {/* email section  */}
        <div>
          <label>Email: </label>
          <input 
          type="email" 
          placeholder="domain@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-2xl p-1 text-center focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* password field  */}
        <div>
          <label>Password: </label>
          <input 
          type={showPassword?"Text":"Password"} 
          placeholder="********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-2xl p-1 text-center focus:outline-none focus:ring-2 focus:ring-green-600 mt-4"
          />

          {password.length > 0 && password.length< 6 && (
            <p style={{color:"red"}}>Password must be 6 characters</p>
          )}

          <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword?"Hide":"Show"}
          </button>
        </div>
      </form>
    </div>
  )
}