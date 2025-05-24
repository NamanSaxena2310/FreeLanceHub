import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Authentication from "./pages/Authentication";

import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import ClientManagement from "./pages/ClientManagement";
import ProjectManagement from "./pages/ProjectManagement";
import Settings from "./pages/Settings";
import Invoices from "./pages/Invoices";

function App() {
  const { token } = useContext(AppContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Authentication />
      ) : (
        <>
          <Navbar />
          
          <div className="flex w-full ">
            <Sidebar />
            <div className="w-[100%]    text-gray-600 text-base">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/client" element={<ClientManagement />} />
                <Route path="/project" element={<ProjectManagement />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/invoices" element={<Invoices />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
