import React from 'react';
import AuthProvider  from './no2/AuthProvider.jsx';
import Header from './no2/Header.jsx';
import Login from './no2/Login.jsx';
import TodoForm from './no3/components/TodoForm.jsx'
import TodoList from './no3/components/TodoList.jsx'
import TodoProvider from './no3/TodoProvider.jsx';
function App() {
  return (
    <TodoProvider>
        <TodoForm />
        <TodoList />
    </TodoProvider>
  );
}

export default App;
