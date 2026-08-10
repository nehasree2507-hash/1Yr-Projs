import React from "react";
import Footer from "./Footer";

function Aboutus() {
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
          marginBottom: "20px",
        }}
      >
        About Us
      </h1>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        Passport Application Assistance Portal is designed to simplify
        the passport application process and provide users with an easy
        and efficient way to apply for passports.
      </p>

      <h2
        style={{
          fontSize: "26px",
          marginBottom: "15px",
        }}
      >
        Our Services
      </h2>

      <ul
        style={{
          fontSize: "18px",
          lineHeight: "2",
        }}
      >
        <li>Passport Guidance</li>
        <li>Document Verification</li>
        <li>Appointment Booking</li>
        <li>Status Tracking</li>
      </ul>

      <div style={{ marginTop: "80px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;