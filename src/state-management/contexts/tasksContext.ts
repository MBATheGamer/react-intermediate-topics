import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

type TaskContextType = {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
};

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default TasksContext;
