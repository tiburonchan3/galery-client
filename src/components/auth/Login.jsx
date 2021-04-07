import React from 'react';
import './styles/login.styles.scss';

const Login = () => {
    return (
        <div className="login-container grid w-80 p-8 mr-4">
           <div className="grid grid-rows-2">
               <label className="text-xs text-gray-300">E-mail</label>
               <input placeholder="enter your email" className="border-solid border-0 outline-none focus:outline-none border-b-2 bg-transparent text-sm border-gray-300 p-1" />
           </div>
           <div className="grid grid-rows-2 mt-14">
               <label className="text-xs text-gray-300">Password</label>
               <input placeholder="enter your password" className="border-solid outline-none focus:outline-none border-0 border-b-2 bg-transparent text-sm border-gray-300 p-1" />
           </div>
           <button className="mt-10 w-6/12 login-button rounded-md text-md p-1 font-semibold text-white">LOG IN</button>
        </div>
    );
}

export default Login;
