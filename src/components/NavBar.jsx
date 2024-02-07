import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../logo.jpg";

const Navbar = () => {

  return (
    <div className="bg-yellow-600">
      <div className="flex flex-row w-8/12 justify-between bg-yellow-600 mx-auto items-center py-3">
        <NavLink to="/">
          <img src={logo} className="h-14" alt="Logo" />
        </NavLink>
        <div className="flex gap-3 justify-center items-center">
          <NavLink to="/" className="text-white hover:text-gray-200">
            <p>HOME</p>  
          </NavLink>
          <NavLink to="/Cart" className="text-white hover:text-gray-200">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
