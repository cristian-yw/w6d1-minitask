import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import ShoppingApp from './no1/ShoppingApp.jsx';
import Header from './no2/Header.jsx'
import Login from './no2/Login.jsx';
import TodoForm from './no3/components/TodoForm.jsx';
import TodoList from './no3/components/TodoList.jsx';
function Router() {
  return (
    <div>
      <Header />
      <Routes path="">
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping" element={<ShoppingApp />} />
        <Route path="/todos" element={<RouteLayout />} />
      </Routes>
    </div>
  )
}
function RouteLayout() {
  return (
    <>
     <TodoForm />
     <TodoList />
    </>
  );
}

export default Router
