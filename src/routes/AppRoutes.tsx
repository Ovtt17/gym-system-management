import { Route, Routes, useNavigate } from "react-router-dom";
import Clients from "../pages/Clients";
import AddClient from "../components/client/AddClient";
import ClientDetails from "../components/client/ClientDetails";

const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/new" element={<AddClient />} />
      <Route path="/clients/details/:id" element={<ClientDetails onBack={() => navigate('/')} />} />
    </Routes>
  );
}

export default AppRoutes;