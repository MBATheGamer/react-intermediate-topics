import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.data),
    staleTime: 10 * 1000,
  });

export default useTodos;