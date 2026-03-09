import { useState } from "react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;



    setTaskList(prev => [...prev, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTaskList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center flex-col gap-4">

      <form onSubmit={addTask} className="flex gap-4">
        <input
          type="text"
          className="border rounded-xl bg-blue-700 text-white px-3 py-1"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="border rounded-xl bg-blue-700 px-3 py-1">
          Add Task
        </button>
      </form>


      <ul>
        {taskList.map((item, index) => (
          <li key={index} className="flex gap-3">
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}