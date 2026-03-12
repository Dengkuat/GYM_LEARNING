import { useEffect, useRef } from "react";

export default function InputField(){
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const handleClear= () => {
    inputRef.current.focus()
    inputRef.current.value = ''

  }

  return(
    <div>
      <input 
      ref={inputRef}
      type="text"
      placeholder="Enter Names"
      className="border rounded-2xl text-center"
       />

       <button onClick={handleClear} className="ml-5 border rounded-2xl px-4">
        Clear
       </button>
    </div>
  )
}