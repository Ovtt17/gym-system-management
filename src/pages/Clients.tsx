import React from "react";
import ClientsTable from "../components/ClientsTable";
import AddClientButton from "../components/AddClientButton";
import useGetClients from "../hooks/useGetClients";

const Clients: React.FC = () => {
  const { clients } = useGetClients();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <header className="flex items-center justify-between pb-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
          <AddClientButton />
        </header>
        <ClientsTable clients={clients}/>
      </div>
    </div>
  );
};

export default Clients;
