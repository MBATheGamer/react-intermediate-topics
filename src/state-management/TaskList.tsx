import { useState } from "react";

type Task = {
  id: number;
  title: string;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          setTasks([{ id: Date.now(), title: "Task" + Date.now() }, ...tasks])
        }
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map(task => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-item-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
