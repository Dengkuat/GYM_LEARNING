import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(prev => prev + 1)
  }

  function decreaseCount() {
    setCount(prev => prev - 1)
  }

  function resetCount() {
    setCount(0);
  }
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center flex-col space-y-4">
      <h1>
        Count: {count > 10 ? "Too high!" : count < 0 ? "Negative number!" : count}
      </h1>
      <button
        className="border py-2 px-4 rounded-2xl"
        onClick={increaseCount}
      >
        Increase
      </button>

      <button
        className="border py-2 px-4 rounded-2xl"
        onClick={decreaseCount}
      >
        Decrease
      </button>

      <button
        className="border py-2 px-4 rounded-2xl"
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  )
}