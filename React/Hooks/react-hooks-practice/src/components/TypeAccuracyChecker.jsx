import { useState } from "react"

export default function TypeAccuracyChecker() {

  const text = "React hooks make state management easier";

  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState('black')

  const handleChange = (e) => {

    const value = e.target.value;
    setInputText(value)

    const lastTyped = value[value.length - 1]
    const correctChar = text[value.length - 1]

    if (lastTyped === correctChar) {
      setColor("green")
    } else {
      setColor("red")
    }
  }

  return (
    <>
      <p>{text}</p>

      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        style={{ color: color }}
        className="rounded-2xl text-center p-2"
        placeholder="[user typing here]"
      />

    </>
  )
}