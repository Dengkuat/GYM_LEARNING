import { useState } from "react";

export default function useLoginForm(intialValue){
  const [values, setValues] = useState(intialValue)

  const handleValue = (e) => {

    const {value, name} = e.target

    setValues({
      ...values, 
      [name]: value,
    })


  }
  return {handleValue, values}
}