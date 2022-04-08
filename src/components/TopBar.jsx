import React from "react";
import { Link } from "react-router-dom";
import ModalLogout from "../components/ModalLogout";

const TopBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
  
              {/* <img
                className="img-profile rounded-circle"
                src=". /img/undraw_profile.svg"
              /> */}
            </Link>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link
                className="dropdown-item"
                to="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Cerrar sesión
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <ModalLogout />
    </React.Fragment>
  );
};

export default TopBar;
