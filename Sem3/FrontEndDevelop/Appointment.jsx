import React, { useState } from "react";
import Footer from "./Footer";

function Appointment() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const bookAppointment = () => {
    setMessage(
      `Appointment Booked Successfully for ${name} on ${date}`
    );
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1>Appointment Booking</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button onClick={bookAppointment}>
        Book Appointment
      </button>

      <h3>{message}</h3>

      <Footer />
    </div>
  );
}

export default Appointment;