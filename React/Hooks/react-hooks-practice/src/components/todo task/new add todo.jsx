import { useState, useRef } from "react"

export default function Todos() {
  const [search, setSearch] = useState('');
  const [add, setAdd] = useState([]);
  const [complete, setComplete] = useState([])

  const handleSearchBar = (e) => {
    setSearch(e.target.value)
  }
  const handleAddButton = () => {
    setAdd([...add, search])
    setSearch('')
  }
  const handlDeleteTask = (removeIndex) => {
    setAdd(add.filter((_, index) => index !== removeIndex))
  }

  
  return (
    <>
      <input type="text"
        placeholder="Enter item to add "
        value={search}
        onChange={handleSearchBar}
        className="border rounded-2xl text-center"
      />
      <button
        className="border rounded-2xl ml-4 px-4"
        onClick={handleAddButton}
      >
        Add Task
      </button>

      {/* the container of the todos  */}
      <ul>
        {add.map((add, index) =>
          <li key={index} 
            className={complete.includes(index)?"text-green-600":"text-black"}
          >{add}
            <button className="border rounded-2xl ml-4 px-4 mb-4"
              onClick={() => handlDeleteTask

                (index)}
            >
              Remove Task
            </button>

            <button
              className="ml-5"
              onClick={() => handleCompleteTask(index)}
            >
              compete
            </button>
          </li>
        )}
      </ul>

      <button className="mr-4 underline" onClick={handleAllTasks}>
        All tasks
      </button>
      
      <button className="mr-4 underline"
      onClick={handleActiveTasks}
      >
        Active Tasks
      </button>

      <button className="mr-4 underline">
        Completed Tasks
      </button>

    </>
  )
}