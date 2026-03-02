import { useState } from "react"

export default function FunctionalUpdates() {
  const [count, setCount] = useState(0);

  const handleClickWrong = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  const handleClickCorrect = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <div className="space-x-5">
      <p>{count}</p>
      <button className="border px-6 py-2 rounded-2xl bg-red-600 text-white" onClick={handleClickWrong}>Double</button>
      <button className="border px-6 py-2 rounded-2xl bg-blue-600 text-white" onClick={handleClickCorrect}>Double (Functional Update)</button>
    </div>
  )
}

//here the button will keep incemenenting by one only and not 2
//why? React batches state udates

//functionall updates give us the lates state value

//react states updates asynchronous 
// setCount(count + 1);
// setCount(count + 1);
//here we expect the count to double by 2 but it wont it only goes up by one

// Why?
// React does not immediatly update states
//it schedules the state updates
// so if we use count varibale then it still holds the old value inside the render

//what is batching?
//React groups multiple state updates together in a single re-render to improve performance instead of re-rendering alot and every time something changes


//so we use Functional Upates to solve this
//This is where we passs afunction that takes the previous element or value and does an action to it 
//so prev is always the latest state at the time the update run
//multiple functional updates stack correctly even inside a btach
//so when we use the functional updates then each update uses teh updated value from the previosu one