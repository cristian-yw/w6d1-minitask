import { useDispatch, useSelector } from "react-redux";
import { toggleTask, removeTask, editTask } from "../../redux/slices/todoSlice.js";


function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTask(todo.id))}
          />
          {todo.title}
          <button onClick={() => dispatch(editTask({ id: todo.id, title: prompt("Edit task", todo.title) }))}>Edit</button>
          <button onClick={() => dispatch(removeTask(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}
export default TodoList;