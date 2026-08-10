import React from "react";
import Footer from "./Footer";

function PSKSlots() {
  const slots = [
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
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
      <h1>Available PSK Slots</h1>

      {slots.map((slot, index) => (
        <div
          key={index}
          style={{
            background: "white",
            color: "black",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          {slot}
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default PSKSlots;