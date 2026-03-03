import { useReducer } from "react";

const initialState = {
  teamA:0,
  teamB:0
}

function reducer(state, action){
  switch(action.type){
    case "ADD_ONE_A":
    return{
      ...state, teamA:state.teamA+1
    };

    case "ADD_ONE_B":
    return{
      ...state, teamB:state.teamB+1
    }

    case "ADD_THREE_A":
    return{
      ...state, teamA:state.teamA+3
    }

    case "RESET":
      return initialState;

      default:
        return state
  }
  
}

export default function Score(){
  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    <div>
      <h1>{state.teamA}</h1>
      <h1>{state.teamB}</h1>

      <button
      onClick={() => dispatch({type:"ADD_ONE_A"})}
      className="border px-4 py-2 rounded-2xl"
      >
        One Point Team A
      </button>

      <button
      onClick={() => dispatch({type:"ADD_ONE_B"})}
      className="border px-4 py-2 rounded-2xl"
      >
        One Point Team B
      </button>

      <button
      onClick={() => dispatch({type:"ADD_THREE_A"})}
      className="border px-4 py-2 rounded-2xl"
      >
        Three Points Team A
      </button>

      <button
      onClick={() => dispatch({type:"RESET"})}
      className="border px-4 py-2 rounded-2xl"
      >
        RESET
      </button>
    </div>
  )
}