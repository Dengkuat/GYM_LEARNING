import { useState, useEffect } from "react";

export default function AutoToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button>
        Status: {isOpen ? "ON" : "OFF"}
      </button>
    </div>
  );
}