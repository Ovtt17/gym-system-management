import React from "react";

const AddClientButton: React.FC = () => {
  const handleClick = () => {
    alert("Add client functionality goes here!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Add Client
    </button>
  );
};

export default AddClientButton;
