import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Formguide from "./pages/Formguide";
import Appointment from "./pages/Appointment";
import PSKSlots from "./pages/PSKSlots";
import StatusTrack from "./pages/StatusTrack";
import PoliceVerify from "./pages/PoliceVerify";
import DocumentChecklist from "./pages/DocumentChecklist";
import Notifications from "./pages/Notifications";
import AdminPanel from "./pages/AdminPanel";
import Export from "./pages/Export";
import PostmanAPI from "./pages/PostmanAPI";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/guide" element={<Formguide />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/status" element={<StatusTrack />} />
        <Route path="/documents" element={<DocumentChecklist />} /> 
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/export" element={<Export />} />
<Route path="/pskslots" element={<PSKSlots />} />
<Route path="/policeverify" element={<PoliceVerify />} />
<Route path="/postmanapi" element={<PostmanAPI />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;