import React from "react";

function Export() {
  const exportData = () => {
    const data = `
Passport Application Details

Application ID : APP101
Name : Rahul
Status : Approved

Application ID : APP102
Name : Priya
Status : Pending
`;

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "PassportData.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
      }}
    >
      <h1>Export Data</h1>

      <p>
        Download passport application details for record keeping.
      </p>

      <button
        onClick={exportData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Export Data
      </button>
    </div>
  );
}

export default Export;