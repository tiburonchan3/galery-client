import React from "react";

const Register = () => {
  return (
    <div className="login-container grid w-80 p-2 mr-4">
      <div className="grid grid-rows-2">
        <label className="text-xs text-gray-300">Nombre</label>
        <input
          placeholder="enter your name"
          className="border-solid border-0 outline-none focus:outline-none border-b-2 bg-transparent text-xs border-gray-300 p-1"
        />
      </div>
      <div className="grid grid-rows-2 p-1">
        <label className="text-xs text-gray-300">Apellido</label>
        <input
          placeholder="enter your lastname"
          className="border-solid border-0 outline-none focus:outline-none border-b-2 bg-transparent text-xs border-gray-300 p-1"
        />
      </div>
      <div className="grid grid-rows-2 p-1">
        <label className="text-xs text-gray-300">E-mail</label>
        <input
          placeholder="enter your email"
          className="border-solid border-0 outline-none focus:outline-none border-b-2 bg-transparent text-xs border-gray-300 p-1"
        />
      </div>
      <div className="grid grid-rows-2 p-1">
        <label className="text-xs text-gray-300">Password</label>
        <input
          placeholder="enter your password"
          className="border-solid outline-none focus:outline-none border-0 border-b-2 bg-transparent text-xs border-gray-300 p-1"
        />
      </div>
      <div className="grid grid-rows-2 p-1">
        <label className="text-xs text-gray-300">Repeat Password</label>
        <input
          placeholder="repeat your password"
          className="border-solid outline-none focus:outline-none border-0 border-b-2 bg-transparent text-xs border-gray-300 p-1"
        />
      </div>
      <button className="mt-6 w-6/12 login-button rounded-md text-md p-1 font-semibold text-white">
        REGISTER
      </button>
    </div>
  );
};

export default Register;
