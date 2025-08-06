import { useContext, useState } from "react";
import { TodoContext } from "../todoContext.js";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({ type: "ADD_TODO", payload: title });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="border p-2 rounded m-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default TodoForm;
