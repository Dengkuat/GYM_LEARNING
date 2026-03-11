
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
import useGettingNames from "./components/GetingNames";



export default function App() {

  const {data, error, loading} = useGettingNames(`https://jsonplaceholder.typicode.com/users`)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
  
  return (
    <>
    <div>
      {data.map(user => (
        <pre key={user.id}>{JSON.stringify(user, null, 3)}</pre>
      ))}
    </div>
    </>
  )
}