import React, {useState, useMemo} from "react";

export default function NumberSum(){
  const [numbers, setNumbers] = useState([1, 2, 3])
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log('Calculating sum...')
    return numbers.reduce((a, b) => a+b, 0);
  },numbers)
  return(
    <>
      <p>total {total}</p>
      <button onClick={() => setCount(count+1)}>Increase count: {count}</button>
    </>
  )
}