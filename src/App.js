import React, { useState } from "react";
import Auth from "./pages/Auth";
import Routing from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "./App.scss";
const App = () => {
  const [auth, setAuth] = useState({ name: "daniel" });
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {auth ? (
        <Routing showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Auth />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
