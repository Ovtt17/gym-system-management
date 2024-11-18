import { useEffect, useState } from "react";
import { Cliente } from "../../models/clients";
import { updateClient, getClientById } from "../../api/client";
import { useNavigate, useParams } from "react-router-dom";

const EditClient = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClient = async () => {
      if (!id) return;
      try {
        const client = await getClientById(id);
        setFormData({
          id: client.id,
          nombre: client.nombre,
          apellido: client.apellido,
          fechaNacimiento: new Date(client.fechaNacimiento).toISOString().slice(0, 10),
          email: client.email,
          telefono: client.telefono,
          fechaRegistro: client.fechaRegistro,
        });
      } catch (error) {
        console.error("Error fetching client data:", error);
        alert("Error fetching client data.");
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev
        ? {
          ...prev,
          [name]: name === "fechaRegistro" ? new Date(value).toISOString() : value,
        }
        : null
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData || !id) return;

    updateClient(id, formData)
      .then(() => {
        alert("Cliente actualizado exitosamente");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating client:", error);
        alert("Error updating client.");
      });
  };

  if (loading) {
    return <p>Loading client data...</p>;
  }

  if (!formData) {
    return <p>Client not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Editar Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="apellido">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="fechaNacimiento">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="telefono">
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="fechaRegistro">
            Fecha de Registro
          </label>
          <input
            type="datetime-local"
            id="fechaRegistro"
            name="fechaRegistro"
            className="form-control w-full border border-gray-400 rounded-md p-2"
            value={new Date(formData.fechaRegistro).toISOString().slice(0, 16)}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full bg-blue-500 text-white rounded-md py-2">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClient;
