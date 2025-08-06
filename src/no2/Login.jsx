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
          <p>Selamat datang, {username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
