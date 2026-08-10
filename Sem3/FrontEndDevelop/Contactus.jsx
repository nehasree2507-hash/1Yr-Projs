import React from "react";
import Footer from "./Footer";

function Contactus() {
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
        }}
      >
        Contact Us
      </h1>

      <div
        
      >
        <p>📧 Email : support@passportportal.com</p>

        <p>📞 Phone : +91 9876543210</p>

        <p>📍 Address : Passport Assistance Center, India</p>
      </div>

      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Contactus;