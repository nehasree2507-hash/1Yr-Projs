import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login Successful!");

    navigate("/appointment");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
        padding: "50px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Login
      </h1>

      <div
        style={{
          width: "350px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleLogin}>
          <input
            type="email"
            required
            placeholder="Email Address"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "none",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            required
            minLength="6"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#082C4A",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              cursor: "pointer",
              display: "block",
              margin: "0 auto",
            }}
          >
            Login
          </button>
        </form>
      </div>

      <div style={{ marginTop: "80px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Login;