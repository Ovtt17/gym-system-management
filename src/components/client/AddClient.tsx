import { useState } from "react";
import { Cliente } from "../../models/clients";
import { createClient } from "../../api/client";

const AddClient = () => {
  const [formData, setFormData] = useState<Omit<Cliente, "id">>({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    email: "",
    telefono: "",
    fechaRegistro: new Date(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "fechaRegistro" ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createClient(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Create Client</h1>
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
            value={formData.fechaRegistro.toISOString().slice(0, 16)}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full bg-blue-500 text-white rounded-md py-2">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClient;