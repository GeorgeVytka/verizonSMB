import { useState } from "react";
import Dashboard from "./components/ui/dashboard/dashboard";
import CostDashboard from "./components/ui/dashboard/costDashboard";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NumberInputs from "./components/ui/numberInputs/numberInputs";
import "./App.css";
import VerizonNavbar from "./components/ui/navbar/verizonNavbar";

function App() {
  return (
    <>
      <VerizonNavbar />

      <div className="container">
        <Dashboard />
        <CostDashboard />
      </div>
    </>
  );
}

export default App;
