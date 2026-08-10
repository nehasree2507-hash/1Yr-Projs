import React, { useState } from "react";
import Footer from "./Footer";

function DocumentChecklist() {
  const [status, setStatus] = useState({
    aadhar: false,
    pan: false,
    address: false,
    birth: false,
    photo: false,
  });

  const uploadDocument = async (event, docType) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

console.log(data);

setStatus((prev) => ({
  ...prev,
  [docType]: true,
}));
    } catch (error) {
      alert("Upload Failed");
    }
  };

  const allUploaded =
    status.aadhar &&
    status.pan &&
    status.address &&
    status.birth &&
    status.photo;

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
      <h1>Document Checklist</h1>

      <br />

      <h3>
        {status.aadhar
          ? "✓ Aadhar Card Uploaded"
          : "⏳ Aadhar Card Pending"}
      </h3>

      <input
        type="file"
        onChange={(e) =>
          uploadDocument(e, "aadhar")
        }
      />

      <br /><br />

      <h3>
        {status.pan
          ? "✓ PAN Card Uploaded"
          : "⏳ PAN Card Pending"}
      </h3>

      <input
        type="file"
        onChange={(e) =>
          uploadDocument(e, "pan")
        }
      />

      <br /><br />

      <h3>
        {status.address
          ? "✓ Address Proof Uploaded"
          : "⏳ Address Proof Pending"}
      </h3>

      <input
        type="file"
        onChange={(e) =>
          uploadDocument(e, "address")
        }
      />

      <br /><br />

      <h3>
        {status.birth
          ? "✓ Birth Certificate Uploaded"
          : "⏳ Birth Certificate Pending"}
      </h3>

      <input
        type="file"
        onChange={(e) =>
          uploadDocument(e, "birth")
        }
      />

      <br /><br />

      <h3>
        {status.photo
          ? "✓ Passport Photo Uploaded"
          : "⏳ Passport Photo Pending"}
      </h3>

      <input
        type="file"
        onChange={(e) =>
          uploadDocument(e, "photo")
        }
      />

      <br /><br />

      {allUploaded && (
        <h2>
          ✅ Status : All Documents Submitted
        </h2>
      )}

      <Footer />
    </div>
  );
}

export default DocumentChecklist;