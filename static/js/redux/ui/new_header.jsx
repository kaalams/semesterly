import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../img/semesterly_logo.svg";
//import "antd/dist/antd.css"; Loaders dont work
//import FontAwesome from "fortawesome/fontawesome-free/css/all.css";

const Header = () => {
  return (
    <React.Fragment>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img src={Logo} alt="semesterly-logo" width="75" height="75" />
          <span className="fs-4">Course Evaluations</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item" style={{ marginRight: 15 }}>
            <a href="#" aria-current="page">
              <i className="fas fa-user-circle fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" aria-current="page">
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </a>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
};

export default Header;
