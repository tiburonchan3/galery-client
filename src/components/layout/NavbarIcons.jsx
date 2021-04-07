import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faListAlt,
  faDesktop,
  faUserCircle,
  faSignOutAlt,
  faBars,
  faTimes,
  faTruckMoving,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarIcons = ({ openMenu, setOpenMenu }) => {
  return (
    <ul className="h-screen border-r border-solid">
      <li className="p-4 border-b border-solid">
        {openMenu ? (
          <FontAwesomeIcon
            className="   text-white text-2xl cursor-pointer"
            icon={faTimes}
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <FontAwesomeIcon
            className="   text-white text-2xl cursor-pointer"
            icon={faBars}
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
      </li>
      <Link to="/">
        <li className="p-4 border-b cursor-pointer border-solid">
          <FontAwesomeIcon className="   text-white text-xl" icon={faHome} />
        </li>
      </Link>
      <Link to="/product">
        <li className="p-4 border-b cursor-pointer border-solid">
          <FontAwesomeIcon className="text-white text-xl" icon={faDesktop} />
        </li>
      </Link>
      <Link to="/mark">
        <li className="p-4 border-b cursor-pointer border-solid">
          <FontAwesomeIcon className="   text-white text-xl" icon={faListAlt} />
        </li>
      </Link>
      <Link to="/category">
        <li className="p-4 border-b cursor-pointer  border-solid">
          <FontAwesomeIcon
            className="   text-white text-xl"
            icon={faClipboardList}
          />
        </li>
      </Link>
      <Link to="/provider">
        <li className="p-4 border-b cursor-pointer  border-solid">
          <FontAwesomeIcon
            className="   text-white text-xl"
            icon={faTruckMoving}
          />
        </li>
      </Link>
      <li className="p-4 border-b cursor-pointer border-solid">
        <FontAwesomeIcon
          className="   text-white text-xl"
          icon={faTags}
        />
      </li>
      <li className="p-4 border-b cursor-pointer border-solid">
        <FontAwesomeIcon
          className="   text-white text-xl"
          icon={faUserCircle}
        />
      </li>
      <li className="p-4 border-b cursor-pointer border-solid">
        <FontAwesomeIcon
          className="   text-white text-xl"
          icon={faSignOutAlt}
        />
      </li>
    </ul>
  );
};

export default NavbarIcons;
