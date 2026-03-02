import { useState } from "react"


export default function Counter() {
  console.log("component Render anytime anything happens")

  const [count, setCount] = useState(0);
  return (
    <div className="space-x-7 h-screen flex justify-center items-center">
      <h1 className="text-2xl font-bold text-center">{count}</h1>


      <button
        onClick={() => setCount(count - 1)}
        className="border px-6 py-2 rounded-2xl bg-red-600 text-white "   
      >Decrement</button>

      <button
        className="px-6 py-2 bg-white border rounded-2xl text-black"
        onClick={() => setCount(0)}>Reset</button>

      <button
        className="px-6 py-2 bg-blue-600 border rounded-2xl text-white"
        onClick={() => setCount(count + 1)}>Incremenet</button>
    </div>
  )
}