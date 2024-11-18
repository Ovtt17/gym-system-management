import React from "react";
import { Cliente } from "../../models/clients";
import { Link } from "react-router-dom";

interface ClientCardProps {
  client: Cliente;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white border-l-4 border-blue-500 shadow-sm rounded-md p-4">
      <h5 className="text-xl font-bold text-blue-600">
        {client.nombre} {client.apellido}
      </h5>
      <p className="text-sm text-gray-600 mt-2">
        <strong className="text-red-500">Fecha de Nacimiento:</strong>{" "}
        {client.fechaNacimiento.toString()}
        <br />
        <strong className="text-yellow-500">Email:</strong> {client.email}
        <br />
        <strong className="text-green-500">Teléfono:</strong> {client.telefono}
        <br />
        <strong className="text-purple-500">Fecha de Registro:</strong>{" "}
        {client.fechaRegistro.toString()}
      </p>
      <div className="mt-4 flex space-x-3">
        <Link
          to={`/clients/edit/${client.id}`}
          className="bg-yellow-500 text-white px-4 py-1 rounded text-sm shadow hover:bg-yellow-600"
        >
          Editar
        </Link>
        <Link
          to={`/clients/details/${client.id}`}
          className="bg-blue-500 text-white px-4 py-1 rounded text-sm shadow hover:bg-blue-600"
        >
          Detalles
        </Link>
        <a
          href="#"
          className="bg-red-500 text-white px-4 py-1 rounded text-sm shadow hover:bg-red-600"
        >
          Eliminar
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
