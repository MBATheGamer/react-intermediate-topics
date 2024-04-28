import { useReducer } from "react";

type Action = {
  type: "INCREMENT" | "RESET";
};

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;

  if (action.type === "RESET") return 0;

  return state;
};

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
