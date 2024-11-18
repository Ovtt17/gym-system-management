import { useParams } from "react-router-dom";
import useGetClientDetails from "../../hooks/useGetClientDetails";

interface ClientDetailsProps {
  onBack: () => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ onBack }) => {
  const { id } = useParams<{ id: string }>();
  const { client, loading } = useGetClientDetails(id as string);

  if (loading) {
    return <p>Cargando los detalles del cliente...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Detalles de Cliente</h1>
      {client ? (
        <div className="space-y-2">
          <p>
            <strong>Nombre:</strong> {client.nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {client.apellido}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong> {new Date(client.fechaNacimiento).toLocaleDateString()}
          </p>
          <p>
            <strong>Email:</strong> {client.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {client.telefono}
          </p>
          <p>
            <strong>Fecha de Registro:</strong> {new Date(client.fechaRegistro).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p className="text-red-500">No se encontró el cliente.</p>
      )}
      <div className="mt-4">
        <button
          onClick={onBack}
          className="bg-blue-500 text-white px-4 py-1 rounded text-sm shadow hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ClientDetails;