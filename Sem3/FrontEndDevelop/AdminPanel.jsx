import React from "react";
import Applicant from "./Applicant";
import Footer from "./Footer";

function AdminPanel() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1>Admin Panel</h1>

      <Applicant
        name="Rahul"
        id="APP101"
        status="Approved"
      />

      <Applicant
        name="Priya"
        id="APP102"
        status="Pending"
      />

      <Footer />
    </div>
  );
}

export default AdminPanel;