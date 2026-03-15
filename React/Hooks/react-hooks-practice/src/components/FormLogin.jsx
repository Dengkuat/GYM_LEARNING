import { useState } from "react";
import useForm from "./cutomeFormLogin";

function LoginForm4() {
  const [values, handleChange, resetForm] = useForm({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />

        <label>Password </label>
        <input 
        type={show?'text':"password"}
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="********"
        />

        <button className="underline"onClick={handleShow}>show/hide</button>
      </div>
    </form>
  );
}

export default LoginForm4;