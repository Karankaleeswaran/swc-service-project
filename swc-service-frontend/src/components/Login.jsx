import React, { useState } from "react";
import { loginUser } from "../api";
import "./Login.css";

function Login({ setLoggedIn, setShowRegister }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(user);

      if (res.data && res.data.id) {
        setLoggedIn(true);
        alert("Login successful");
      }
    } catch (err) {
      alert(err.response?.data || "Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        {/* EMAIL */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>

        {/* SWITCH TO REGISTER */}
        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={() => setShowRegister(true)}>Register</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
