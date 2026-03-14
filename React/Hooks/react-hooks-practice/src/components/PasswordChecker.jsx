import { useState } from "react"

export default function PasswordChecker(){

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Weak')

  const handlePassword = (e) => {
    const passwordValue = e.target.value
    setPassword(passwordValue);

    if(passwordValue.length < 6){
      setMessage('Weak')
    } else {
      setMessage('Good')
    }
  }

  return(
    <>
      <input 
        type="text" 
        placeholder="enter password"
        value={password}
        onChange={handlePassword}
        className="border py-1 px-5 text-center rounded-2xl"
      />

      <p className={message === 'Weak' ? "text-red-700" : "text-green-700"} >
        {message}
      </p>
    </>
  )
}