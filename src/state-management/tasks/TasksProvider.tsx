import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export type Task = {
  id: number;
  title: string;
};

type AddTask = {
  type: "ADD";
  task: Task;
};

type DeleteTask = {
  type: "DELETE";
  taskId: number;
};

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter(task => task.id !== action.taskId);
  }
};

type Props = {
  children: ReactNode;
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
