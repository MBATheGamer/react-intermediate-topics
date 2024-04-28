import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
};

export default App;
