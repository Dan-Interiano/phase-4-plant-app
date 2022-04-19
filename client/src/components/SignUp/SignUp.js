import React, { useState } from "react";
import "./Signup.css";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    });
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-title">Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="signup-username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
