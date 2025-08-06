import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import ShoppingApp from './no1/ShoppingApp.jsx'
import Router from './Router.jsx'
import AuthProvider from './no2/AuthProvider';
import TodoProvider from './no3/TodoProvider.jsx'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
    <TodoProvider>
     <Router />
     </TodoProvider>
   </AuthProvider>
  </BrowserRouter>
)
