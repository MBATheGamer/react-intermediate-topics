import { AuthProvider } from "./state-management/auth";
import { Counter } from "./state-management/counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
