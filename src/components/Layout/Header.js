import React from 'react';
import Logout from '../Logout/index';
import { Link } from "react-router-dom";


const Header = ({ setIsAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="btn btn-success"  to="employee/create" >Add New (+)</Link> 
        </li>
        <li className="nav-item">
          <Logout setIsAuthenticated={setIsAuthenticated} />

        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;



