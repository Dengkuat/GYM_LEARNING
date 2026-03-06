import { useEffect, useState } from "react";

export default function APIRolling() {
  const userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];  const [name, setName] = useState(() => userNames[Math.floor(Math.random() * userNames.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = userNames[Math.floor(Math.random() * userNames.length)];
      setName(randomName);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Current User: {name}</p>
    </div>
  );
}