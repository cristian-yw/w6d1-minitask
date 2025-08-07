import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function TodoPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>

      {showModal && <TodoForm onClose={() => setShowModal(false)} />}
      <TodoList />
    </div>
  );
}
export default TodoPage;