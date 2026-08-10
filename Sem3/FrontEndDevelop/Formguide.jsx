import React from "react";
import Footer from "./Footer";

function FormGuide() {
  const steps = [
    "Register on Passport Portal",
    "Fill Application Form",
    "Upload Documents",
    "Book Appointment",
    "Attend Verification",
    "Track Passport Status",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1>Passport Form Guide</h1>

      <h2>Application Steps</h2>

      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default FormGuide;