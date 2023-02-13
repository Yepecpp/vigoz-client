import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';

const Dropdown = () => {
  return (
      <li className="item_sidebar">
        <div className="link_sidebar">
          <FaTruck />
          <p className="container_userSidebar">Distribución</p>
        </div>
        <ul className="dropdown">
          <li className="dropdown_item">
            <Link to="/Dashboard/Distribucion">Distribucion 1</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Dashboard/Distribucion">Distribucion 2</Link>
          </li>
        </ul>
      </li>
  );
};

export default Dropdown;
