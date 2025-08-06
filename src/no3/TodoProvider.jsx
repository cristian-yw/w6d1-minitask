import {useReducer} from 'react'
import { TodoContext } from "./todoContext.js";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos: state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}