import React, { useState } from "react";
import Footer from "./Footer";

function PostmanAPI() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setMessage("Select a File First");
      return;
    }

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

      setMessage(data.message);
    } catch (error) {
      setMessage("Upload Failed");
    }
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
      <h1>Postman API Upload</h1>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <br />
      <br />

      <button onClick={uploadFile}>
        Upload
      </button>

      <h3>{message}</h3>

      <Footer />
    </div>
  );
}

export default PostmanAPI;