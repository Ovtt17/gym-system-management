import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/clients" className="text-white hover:text-gray-200">Clientes</Link>
        </li>
        <li>
          <Link to="/membership" className="text-white hover:text-gray-200">Membresia</Link>
        </li>
        <li>
          <Link to="/payment" className="text-white hover:text-gray-200">Pago</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;