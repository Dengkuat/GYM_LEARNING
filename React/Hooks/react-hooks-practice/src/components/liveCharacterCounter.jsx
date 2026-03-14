import { useState } from "react";

export default function 
LiveCounterCharacter(){

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [color, setColor] = useState("text-green-800");

  const handleText = (e) => {
    const value = e.target.value;
    setText(value);

    setCount(value.length)
  }
  return(
    <>
      <input 
      type="text"
      placeholder="Write something"
      value={text}
      onChange={handleText}
      className={color}
      />

      <p className={count<20?"text-green-700":"text-red-600"}>
        Text Number {count}
      </p>
    </>
  )
}