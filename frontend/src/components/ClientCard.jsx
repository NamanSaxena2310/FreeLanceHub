import React from "react";

const ClientCard = ({ name, company, email, phone, notes }) => {
  return (
    <div className="w-full max-w-md bg-white border rounded-lg p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

      <div className="text-sm text-gray-700 space-y-1">
        
          <p>
            <span className="font-medium">Company:</span> {company}
          </p>
        
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone || "—"}
        </p>
      </div>

      
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700 mb-1">Notes:</p>
          <p className="text-sm text-gray-600">{notes}</p>
        </div>
      
    </div>
  );
};

export default ClientCard;
