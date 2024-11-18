import { useEffect, useState } from "react";
import { Cliente } from "../models/clients";
import { getClientById } from "../api/client";

const useGetClientDetails = (id: string) => {
  const [client, setClient] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const clientResponse = await getClientById(id);
      setClient(clientResponse);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return { client, loading };
};

export default useGetClientDetails;