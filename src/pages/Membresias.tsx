import { useState } from "react";
import useObtenerMembresias from "../hooks/useObtenerMembresias";
import { useNavigate } from "react-router-dom";

const Membresias = () => {
  const navigate = useNavigate();
  const { membresias } = useObtenerMembresias();
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchString("");
  };

  const filteredMemberships = membresias.filter(
    (membership) =>
      membership.tipo.toLowerCase().includes(searchString.toLowerCase()) ||
      membership.descripcion.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        TIPOS DE MEMBRESÍA
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <form className="w-full md:w-2/3 flex space-x-2 mb-4 md:mb-0" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="flex-1 border rounded-l-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Buscar por tipo o descripción..."
            value={searchString}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Buscar
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={handleClearSearch}
          >
            Limpiar
          </button>
        </form>

        <button
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 text-lg"
          onClick={() => navigate("/memberships/create")}
        >
          + Nueva Membresía
        </button>
      </div>

      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Tipo</th>
            <th className="py-3 px-4 text-left">Descripción</th>
            <th className="py-3 px-4 text-left">Precio</th>
            <th className="py-3 px-4 text-left">Duración (días)</th>
            <th className="py-3 px-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredMemberships.map((membership) => (
            <tr
              key={membership.id}
              className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
            >
              <td className="py-3 px-4 text-purple-700">{membership.tipo}</td>
              <td className="py-3 px-4 text-blue-500">{membership.descripcion}</td>
              <td className="py-3 px-4 text-green-500">{membership.precio}</td>
              <td className="py-3 px-4 text-yellow-600">{membership.duracionDias}</td>
              <td className="py-3 px-4 text-center space-x-2">
                <button
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => navigate(`/memberships/edit/${membership.id}`)}
                >
                  Editar
                </button>
                <button
                  className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500"
                  onClick={() => navigate(`/memberships/details/${membership.id}`)}
                >
                  Detalles
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => console.log("Eliminar", membership.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Membresias;
