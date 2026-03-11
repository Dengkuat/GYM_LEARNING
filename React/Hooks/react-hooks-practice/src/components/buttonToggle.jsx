import { useState } from "react"


export default function ToggleButton(){
  const [show, setShow] = useState(false)
  function toggle(){
    setShow(!show)
  }
  return(
    <div>
      <button className="border p-1 shadow-2xl" onClick={toggle}>Toggle</button>
      {show ? <p>Great</p> : <p>Hello Deng</p>}
    </div>
  )
}