import React, { useContext, useState } from 'react';
import { AuthContext } from './authContext';

function Login() {
  const { isLoggedIn, username, login, logout } = useContext(AuthContext);
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input.trim() !== '') {
      login(input);
      setInput('');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p className='font-bold'>Selamat datang, {username}!</p>
          <button onClick={logout} className='bg-red-500 text-white px-4 py-2 rounded'>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan username"
            className='border p-2 rounded m-2'
          />
          <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
