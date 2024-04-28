import { useContext } from "react";
import TasksContext from "./tasksContext";

const useAuth = () => useContext(TasksContext);

export default useAuth;
