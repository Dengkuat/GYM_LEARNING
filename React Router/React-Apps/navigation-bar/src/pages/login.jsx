import { Form, useNavigation } from "react-router-dom"

export default function Login(){

  const navigation = useNavigation()

  const isSubmitting = navigation.state === "submitting"

  return(
    <div>

      <h1>Login</h1>

      <Form method="post">

        <input
          type="text"
          name="username"
          placeholder="Enter username"
        />

        <button type="submit">
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

      </Form>

    </div>
  )
}