import { Route, Routes } from "react-router-dom";
import Clients from "../pages/Clients";
import AddClient from "../components/client/AddClient";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/new" element={<AddClient />} />
    </Routes>
  );
}

export default AppRoutes;