import React, { useState } from "react";
import Footer from "./Footer";

function Notifications() {
  const [id, setId] = useState("");

  const notifications = {
    APP101: [
      "✓ Appointment Confirmed",
      "✓ Police Verification Completed",
      "✓ Passport Printed",
      "✓ Passport Dispatched",
    ],

    APP102: [
      "✓ Appointment Confirmed",
      "✓ Police Verification Scheduled",
      "⏳ Passport Printing Pending",
      "⏳ Passport Dispatch Pending",
    ],
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1>Notifications</h1>

      <input
        type="text"
        placeholder="Application ID"
        value={id}
        onChange={(e) =>
          setId(e.target.value.toUpperCase())
        }
      />

      <br />
      <br />

      {notifications[id] ? (
        notifications[id].map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      ) : (
        <h3>Enter Valid Application ID</h3>
      )}

      <Footer />
    </div>
  );
}

export default Notifications;