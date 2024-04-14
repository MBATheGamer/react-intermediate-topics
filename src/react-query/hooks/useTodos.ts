import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

export type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.data),
    staleTime: 10 * 1000,
  });

export default useTodos;
