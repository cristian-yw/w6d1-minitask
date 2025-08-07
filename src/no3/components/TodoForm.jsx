// components/TodoForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/todoSlice.js";

export default function TodoForm({ onClose }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(title));
    onClose(); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <input
        className="border px-2 py-1 w-full"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task name"
        required
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Add Task
      </button>
    </form>
  );
}
