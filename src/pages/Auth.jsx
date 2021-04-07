import React, { useState } from "react";
import Login from "../components/auth/Login";
import SVGFirts from "../assets/one.svg";
import SVGWave from "../assets/wavev4.svg";
import "./styles/auth.styles.scss";
import Register from "../components/auth/Register";

const Auth = () => {
  const [existUser, setexistUser] = useState(false);
  return (
    <div className="content justify-center content-center grid">
      <div className="cart-box">
        <div className="section-one grid justify-end content-center">
          <h1 className="wellcome text-gray-300 text-lg">Bienvenido!!</h1>
          {existUser ? <Login /> : <Register />}
        </div>
        <div className="section-two">
          <h1 className="absolute log-text top-28 mt-10 ml-10 font-semibold text-2xl">
            SYSTEM PC
          </h1>
          <img className="first-svg" src={SVGFirts} alt="none" />
        </div>
      </div>
      <img src={SVGWave} className="absolute bottom-0 svg-wave" alt="none" />
    </div>
  );
};

export default Auth;
