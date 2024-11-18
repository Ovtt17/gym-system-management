import { useEffect, useState } from "react";
import { Membresia } from "../models/membresia";
import { getMembresias } from "../api/membresia";

const useObtenerMembresias = () => {
  const [membresias, setMembresias] = useState<Membresia[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMembresias = async () => {
    try {
      const membresias = await getMembresias();
      setMembresias(membresias);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMembresias();
  }, []);

  return { membresias, loading };
};

export default useObtenerMembresias;