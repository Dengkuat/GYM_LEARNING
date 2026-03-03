import { useState } from "react";

export default function Scores() {

  const [scoreA, setScoreA] = useState({ teamA: 0 })
  const [scoreB, setScoreB] = useState({ teamB: 0 });

  const updateScoreA = () => {
    setScoreA({ scoreA, teamA: scoreA.teamA + 1 })
  }

  const updateScoreAx3 = () => {
    setScoreA(prev => ({
      ...prev,
      teamA: prev.teamA + 1
    }))

    setScoreA(prev => ({
      ...prev,
      teamA: prev.teamA + 1
    }))

    setScoreA(prev => ({
      ...prev,
      teamA: prev.teamA + 1
    }))
  }

  const updateScoreB = () => {
    setScoreB({ scoreB, teamB: scoreB.teamB + 1 })
  }

  const resetAllScores = () => {
    setScoreA({scoreA, teamA:scoreA.teamA * 0})
    setScoreB({scoreB, teamB:scoreB.teamB * 0})
  }

  return (
    <div>
      <h1 className="text-3xl">{scoreA.teamA}</h1>
      <h1 className="text-3xl">{scoreB.teamB}</h1>

      <button
        className="border  px-4 py-2 rounded-2xl"
        onClick={updateScoreA}
      >
        One point team A
      </button>

      <button
        className="border  px-4 py-2 rounded-2xl"
        onClick={updateScoreB}
      >
        One point team B
      </button>

      <button
        className="border  px-4 py-2 rounded-2xl"
        onClick={updateScoreAx3}
      >
        Three points to Team A
      </button>

      <button
        className="border  px-4 py-2 rounded-2xl"
        onClick={resetAllScores}
      >
        Reset all scores
      </button>
    </div>
  )
}



//question
// Create a component called ScoreBoard.

// Requirements:
// 	1.	Initial state:
//   {
//     teamA: 0,
//     teamB: 0
//   }

//   2.	There should be:

// 	•	A button to add 1 point to Team A
// 	•	A button to add 1 point to Team B
// 	•	A button called “Add 3 Points to Team A”
// 	•	A button called “Reset Scores”

// ⸻
