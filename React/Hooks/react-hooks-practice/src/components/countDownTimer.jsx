import { useState, useEffect } from "react";

export default function CountDownTimer(){
  const [count, setCount] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if(prev === 0){
          return 0;
        }
        return prev-1;
      })
    }, 1000)

    return () => clearInterval(interval)
  },[])
  return(
    <div>
      Count Decreasing: {count===0?"Time's Up Gang":count}
    </div>
  )
}
