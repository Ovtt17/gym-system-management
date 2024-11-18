import React from "react";
import { Cliente } from "../models/clients";

interface ClientsTableProps {
  clients: Cliente[];
}

const ClientsTable: React.FC<ClientsTableProps> = ({ clients }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Registro</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="even:bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 text-sm text-gray-700">{client.nombre}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{client.apellido}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{client.email}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{client.fechaNacimiento.toString()}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{client.fechaRegistro.toString()}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{client.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
