import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Routes
import Login from "./Views/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
