import React, { useState } from "react";
import AddClientButton from "../components/client/AddClientButton";
import useGetClients from "../hooks/useGetClients";
import SearchBar from "../components/SearchBar";
import ClientCard from "../components/client/ClientCard";
import { deleteClient } from "../api/client";

const Clients: React.FC = () => {
  const { clients } = useGetClients();
  const [searchString, setSearchString] = useState("");

  const filteredClients = clients.filter((client) =>
    `${client.nombre} ${client.apellido}`
      .toLowerCase()
      .includes(searchString.toLowerCase())
  );

  const handleClientDelete = (id: string) => {
    deleteClient(id).then(() => {
      alert("Cliente eliminado exitosamente");
      window.location.reload();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-800 mt-4">
          CLIENTES
        </h1>

        <div className="flex flex-wrap justify-between items-center my-5 gap-4">
          <SearchBar
            searchString={searchString}
            onSearchChange={(value) => setSearchString(value)}
            onClear={() => setSearchString("")}
          />
          <AddClientButton redirectionUrl="/clients/new" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredClients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onDelete={handleClientDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
