import React from 'react';

const Navbar = () => (
  <nav className="h-[3.5rem] bg-white shadow-md flex justify-between items-center px-10">
    <div className="text-xl font-bold text-green-600">FreeLanceHub</div>

    <ul className="flex gap-3 text-gray-700 font-medium">
      <li className="cursor-pointer hover:text-green-600 transition  ">Profile</li>
      
      <li className="cursor-pointer hover:text-green-600 transition ">Logout</li>
    </ul>
  </nav>
);

export default Navbar;
