import { useState } from "react";

function useDarkMode(){
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme(){
    setDarkMode(prev => !prev)
  }
  return{darkMode, toggleTheme}
}
export default useDarkMode;