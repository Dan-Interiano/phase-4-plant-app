import React, { useState } from "react";
import './Login.css';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="login-username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="login-password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;