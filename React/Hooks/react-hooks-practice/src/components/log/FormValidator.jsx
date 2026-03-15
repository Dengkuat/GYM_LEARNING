import useLoginForm from "./customHooks";

export default function FormValidator (){
  const {handleValue, values} = useLoginForm({
    email:'',
    password:'',
  });

  return(
    <>
      <form>
        <label>Email</label>
        <input 
        type="text"
        name="email"
        value={values.email}
        placeholder="Enter email"
        className="border rounded-2xl"
        onChange={handleValue}
        />
      </form>
    </>
  )
}