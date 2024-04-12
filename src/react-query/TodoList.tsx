import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const TodoList = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.data),
  });

  return (
    <ul className="list-group">
      {todos?.map(todo => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
