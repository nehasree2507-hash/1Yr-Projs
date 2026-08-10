import React, { useState } from "react";
import Footer from "./Footer";

function StatusTrack() {
  const [id, setId] = useState("");

  const applications = {
    APP101: "Passport Approved",
    APP102: "Application Under Process",
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
      <h1>Status Tracking</h1>

      <input
        type="text"
        placeholder="Application ID"
        value={id}
        onChange={(e) =>
          setId(e.target.value.toUpperCase())
        }
      />

      <h2>
        {applications[id]
          ? applications[id]
          : "Application Not Found"}
      </h2>

      <Footer />
    </div>
  );
}

export default StatusTrack;