import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/DYELOG.png"

const Layout = (props) => {
  return (
    <>
      <div className="header">
      <img src={Logo} className="w-40 absolute mt-10" alt="no_image"/>
        <div className="icons">
          <Link to="/">
            <p className=" ml-40">Inicio</p>
          </Link>
          <Link to="/add">
            <p className="ml-8">Agregar</p>
          </Link>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
