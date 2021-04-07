import React from "react";
import { Link } from "react-router-dom";

const NavbarOptions = () => {
  return (
    <ul>
      <Link to="/">
        <li className="text-white text-md font-bold p-4 cursor-pointer">
          SYSTEM PC
        </li>
      </Link>
      <Link to="/">
        <li className="   text-white text-sm font-semibold p-4 mt-2 cursor-pointer">
          HOME
        </li>
      </Link>
      <Link to="/product">
        <li className="text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
          PRODUCTOS
        </li>
      </Link>
      <Link to="/mark">
        <li className="   text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
          MARCAS
        </li>
      </Link>
      <Link to="/category">
        <li className="text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
          CATEGORIAS
        </li>
      </Link>
      <Link to="/provider">
        <li className="text-white text-sm font-semibold p-4 mt-2 cursor-pointer">
          PROVEEDORES
        </li>
      </Link>
      <li className="text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
        CUPONES
      </li>
      <li className="text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
        MI CUENTA
      </li>
      <li className="text-white text-sm font-semibold p-4 mt-1 cursor-pointer">
        CERRAR SESION
      </li>
    </ul>
  );
};

export default NavbarOptions;
