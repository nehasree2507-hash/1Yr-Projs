import React, { useState } from "react";
import Footer from "./Footer";

function PoliceVerify() {
  const [id, setId] = useState("");

  const verification = {
    APP101: "Verification Completed",
    APP102: "Verification Pending",
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
      <h1>Police Verification Status</h1>

      <input
        type="text"
        placeholder="Application ID"
        value={id}
        onChange={(e) =>
          setId(e.target.value.toUpperCase())
        }
      />

      <h2>
        {verification[id]
          ? verification[id]
          : "Application Not Found"}
      </h2>

      <Footer />
    </div>
  );
}

export default PoliceVerify;