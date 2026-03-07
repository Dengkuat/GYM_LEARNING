import { useState, useEffect } from "react";

export default function SmartAutoCounter() {

  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  const StartTime = () => {
    setRunning(true)
  }

  const resetTimer = () => {
    setRunning(false)
    setCount(0)
  }

  const stopTimer = () => {
    setRunning(false)
  }

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)

  }, [running])
  return (
    <>
      <h1 className="text-4xl">Count: {count> 9?"Goal Reached" : count}</h1>

      <button
        onClick={StartTime}
        className="border p-1 rounded-2xl mr-3"
      >
        Start Count
      </button>

      <button
      onClick={stopTimer}
        className="border p-1 rounded-2xl mr-3"
      >
        Stop Count
      </button>

      <button
      onClick={resetTimer}
        className="border p-1 rounded-2xl mr-3"
      >
        Reset Count
      </button>
    </>
  )
}