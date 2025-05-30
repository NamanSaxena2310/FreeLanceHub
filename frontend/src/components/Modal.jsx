import React from 'react';
import ClientForm from './ClientForm';

const Modal = ({ onClose }) => {


 
  return (
    <div onClick={onClose} className="fixed inset-0 backdrop-blur-xs  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add Client</h2>

        <ClientForm/>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
