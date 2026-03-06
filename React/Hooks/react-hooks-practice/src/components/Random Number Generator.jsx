import { useState, useEffect } from "react";

export default function RandomNumberGenerator(){
  const [number, setNumber] = useState(0);
  const [isRunning, setIsRunning] = useState(true); 

  useEffect(() => {
    if(!isRunning) return
    const interval = setInterval(() => {
      setNumber(Math.floor(Math.random() * 101))
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])
  return(
    <div>
      <p>Random Number: {number}</p>
      <button className="border py-2 px-4 rounded-2xl"
      onClick={() => setIsRunning(false)}
      >
        stop Random Generation
      </button>

      <button className="border py-2 px-4 rounded-2xl"
      onClick={() => setIsRunning(true)}
      >
        Continue Random Generation
      </button>
    </div>
  )
}