import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [reload, setreload] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home setreload={setreload} reload={reload} />
          </Route>
          <Route path="/add" exact={true}>
            <Add setreload={setreload} reload={reload} />
          </Route>
        </Switch>
      </Router>
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
    </>
  );
};

export default App;
