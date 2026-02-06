import React, { useState } from "react";
import { registerUser } from "../api";
import "./Register.css";

function Register({ setShowRegister }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(user);
      alert("Registration successful!");
      setShowRegister(false); // 🔥 go back to login
    } catch (err) {
      alert("Error during registration");
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="subtitle">Join us today</p>

        {/* USERNAME */}
        <div className="input-group">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <label>Username</label>
        </div>

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

        <button className="register-btn" type="submit">
          Register
        </button>

        {/* SWITCH TO LOGIN */}
        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => setShowRegister(false)}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
