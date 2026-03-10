
import Counter from "./components/counter";
import FunctionalUpdates from "./components/functionalUpdates";
import Scores from "./components/batching&functionalUpdates&objects";
import Score from "./components/useReducer";
import AutoIncrementer from "./components/autoIncrementer useEffect";
import AutoToggle from "./components/Auto Toggle";
import CountDownTimer from "./components/countDownTimer";
import RandomNumberGenerator from "./components/Random Number Generator";
import APIRolling from "./components/API Polling";
import LoginForm from "./components/LoginForm";
import SmartAutoCounter from "./components/Smart Auto Counter";
import CounterRerender from "./components/clickCounterRender";
import { useRef } from "react";
import FetchDisplayPosts from "./components/fetchAndDisplayPosts";
import CounterApp from "./components/counterApp";
import TaskManager from "./components/TaskManager";
import NumberSum from "./components/numberCalculateSum";
import Posts from "./components/DisplayPosts";
import useUsers from "./components/customHook useUser";
import useDarkMode from "./components/useDarkMode";



export default function App() {
  const { user, loading, error } = useUsers(`https://jsonplaceholder.typicode.com/users`);

  const { darkMode, toggleTheme } = useDarkMode();

  if (loading) return <div>Loading....</div>
  if (error) return <div>Error{error}</div>

  return (
    <div
      className={`min-h-screen p-5 duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >



      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <ul>
        {user.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

    </div>
  );
}