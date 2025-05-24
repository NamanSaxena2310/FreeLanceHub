import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="h-screen w-[15%] bg-white  shadow-md p-4 flex flex-col gap-4">
    

    <div className="flex flex-col gap-2 text-gray-700">
      <NavLink to={'/client'} className="w-full text-left px-4 py-2 rounded-md hover:bg-green-50 hover:text-green-600 transition font-medium">👥 Clients</NavLink>
      <NavLink to={'/project'} className="w-full text-left px-4 py-2 rounded-md hover:bg-green-50 hover:text-green-600 transition font-medium">📁 Projects</NavLink>
      <NavLink to={'/settings'} className="w-full text-left px-4 py-2 rounded-md hover:bg-green-50 hover:text-green-600 transition font-medium">💰 Invoices</NavLink>
      <NavLink to={'/invoices'} className="w-full text-left px-4 py-2 rounded-md hover:bg-green-50 hover:text-green-600 transition font-medium">⚙️ Settings</NavLink>
    </div>
  </aside>
);

export default Sidebar;
