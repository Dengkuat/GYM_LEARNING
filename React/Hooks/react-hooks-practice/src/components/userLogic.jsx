import { useState } from "react";

export default function TypeNumber(){
  const Names=  ["Deng", "David", "John", "Daniel", "Mary", "Diana"]

  const [userName, setUserName] = useState('')

  const handleNames = (e) => {
    setUserName(e.target.value)
  }

  const oneUser = Names.filter(namess => 
     namess.length === Number(userName)
  )


  
  return(
    <>
      <input 
      type="text"
      placeholder="Enter number here"
      className="border rounded-2xl text-center"
      value={userName}
      onChange={handleNames}
      />

      <h1>Names: {Names.join(' , ')}</h1>

      <ul>
        {
          oneUser.map((name, index) => 
            <li key={index}>{name}</li>
          )
        }
      </ul>
    </>
  )
}