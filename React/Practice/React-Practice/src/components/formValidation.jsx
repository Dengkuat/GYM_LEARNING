import { useState } from "react";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmite(e){
    e.preventDefault();
    console.log(email, password);  
  }
  return (
    <form onSubmit={handleSubmite}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
        </form>
  )
}

export default Login;
