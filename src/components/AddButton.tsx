import React from "react";
import { Link } from "react-router-dom";

interface AddButtonProps {
  redirectionUrl: string;
  entityName: string;
}

const AddButton: React.FC<AddButtonProps> = ({ redirectionUrl, entityName }) => {

  return (
    <Link to={redirectionUrl}>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 text-lg"
      >
        Agregar {entityName}
      </button>
    </Link>
  );
};

export default AddButton;
