import { useRef, useState } from "react";

export default function CounterRerender(){
  const countRef = useRef(0);
  const [count, setCount] = useState(0)

  function increaseCount(){
  countRef.current++;
  setCount(countRef.current)
  }
  return(
    <button onClick={increaseCount}>Increase :{count}</button>
  )
}