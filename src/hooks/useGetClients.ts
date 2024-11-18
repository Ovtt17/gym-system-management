import { useEffect, useState } from "react";
import { Cliente } from "../models/clients";
import { getClients } from "../api/client";

const useGetClients = () => {
  const [clients, setClients] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const clients = await getClients();
      setClients(clients);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients, loading };
};

export default useGetClients;