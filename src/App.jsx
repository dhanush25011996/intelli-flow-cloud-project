import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import LoginPage from "./pages/loginPage/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Workflows from "./pages/workflows/Workflows";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workflow" element={<Workflows />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
