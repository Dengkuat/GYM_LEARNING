import { useState, useEffect } from "react";

export default function AutoIncrementer() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button>
        Auto Increment every 1s: {count}
      </button>
    </div>
  );
}