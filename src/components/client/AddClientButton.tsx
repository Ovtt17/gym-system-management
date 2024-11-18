import React from "react";
import { Link } from "react-router-dom";

interface AddClientButtonProps {
  redirectionUrl: string;
}

const AddClientButton: React.FC<AddClientButtonProps> = ({ redirectionUrl }) => {

  return (
    <Link to={redirectionUrl}>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Client
      </button>
    </Link>
  );
};

export default AddClientButton;
