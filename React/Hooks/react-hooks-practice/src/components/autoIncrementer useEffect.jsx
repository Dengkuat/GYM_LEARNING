import { useState, useEffect } from "react";

export default function AutoIncrementer(){
  console.log(`compoenet mounted`)

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count+1);
    }, 1000)

    return() => {
      clearInterval(interval)
    }
  }, [count])

  return(
    <div>
      <button>
       autoIncrementer after every 1s: {count}
      </button>
    </div>
  )
}

// Auto Counter

// Requirements:
// 	•	start at 0
// 	•	increase every 1 second
// 	•	stop when component unmounts