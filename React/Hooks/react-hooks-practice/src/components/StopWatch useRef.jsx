import { useEffect, useRef, useState } from "react";

export default function StopWatch(){
  const intervalRef = useRef(null)
  const [time, setTime] = useState(0);

  const handleStart  = () => {
    intervalRef.current = setInterval(() => {
      setTime(prev => prev+1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    setTime(0)
  }
  return(
    <>

    <h1>Timer:{time}</h1>
    <button onClick={handleStart} className="border mr-4 px-3 rounded-2xl">
      Start
    </button>

    <button onClick={handleStop} className="border mr-4 px-3 rounded-2xl">
      Stop
    </button>

    <button onClick={handleReset} className="border mr-4 px-3 rounded-2xl">
      Reset
    </button>

    </>
  )
}