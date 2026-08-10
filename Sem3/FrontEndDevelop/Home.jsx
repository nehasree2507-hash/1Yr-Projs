import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import pass from "../assets/pass.png";
function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right,#0A3D62,#3C91E6)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "40px",
            borderRadius: "20px",
            width: "500px",
          }}
        >
          <p
style={{
 color:"#FFD166",
 letterSpacing:"2px",
 fontWeight:"bold"
}}
>
SMART PASSPORT SERVICES
</p>
          <h1>
            Passport Application Assistance Portal
          </h1>

          <h3>
            Your Passport Journey Starts Here
          </h3>

          <p>
            Apply for passports, upload
            documents, book appointments
            and track application status.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
            }}
          >
            <Link to="/signup">
              <button className="hero-btn start-btn">
  Start Application
</button>
            </Link>

            <Link to="/status">
             <button className="hero-btn">
                Track Status
              </button>
            </Link>

            <Link to="/appointment">
             <button className="hero-btn">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        <img
  src={pass}
  alt="Passport"
  style={{
    width: "350px",
    height: "350px",
    objectFit: "contain",
    borderRadius: "20px",
  }}
/>
      </div>

      <div
  style={{
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "20px",
    width: "80%",
    margin: "50px auto",
  }}
>
  <h1
    style={{
      textAlign: "center",
      color: "white",
      marginBottom: "40px",
    }}
  >
    Our Services
  </h1>
  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "30px",
    textAlign: "center",
  }}
>
  <Link to="/guide" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>📄</h1>
      <h3>Form Guide</h3>
    </div>
  </Link>

  <Link to="/documents" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>📁</h1>
      <h3>Documents</h3>
    </div>
  </Link>

  <Link to="/pskslots" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>🏢</h1>
      <h3>PSK Slots</h3>
    </div>
  </Link>

  <Link to="/policeverify" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>👮</h1>
      <h3>Police Verification</h3>
    </div>
  </Link>

  <Link to="/notifications" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>🔔</h1>
      <h3>Notifications</h3>
    </div>
  </Link>

  <Link to="/admin" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>⚙️</h1>
      <h3>Admin Panel</h3>
    </div>
  </Link>

  <Link to="/export" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>📤</h1>
      <h3>Export</h3>
    </div>
  </Link>

  <Link to="/postmanapi" style={{ textDecoration: "none" }}>
    <div className="service-card">
      <h1>📎</h1>
      <h3>File Upload</h3>
    </div>
  </Link>
</div>

      <Footer />
    </div>
    </div>
  );
}

export default Home;