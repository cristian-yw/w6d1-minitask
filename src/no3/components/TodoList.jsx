import { useContext } from "react";
import { TodoContext } from "../todoContext.js";
function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  if (todos.length === 0) return <p>No todos available.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
            {todo.title}
          </span>
          <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
