import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Routes
import Login from "./Views/Login/Login";
import Landing from "./Views/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
