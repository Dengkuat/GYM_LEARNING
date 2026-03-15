import useForm from "./cutomeFormLogin";

function LoginForm() {
  const [values, handleChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />
      </div>
    </form>
  );
}

export default LoginForm;