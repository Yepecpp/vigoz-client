import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, Icon, childs }) => {
  const [click, setClick] = useState(false);
  return (
    <li className="item_sidebar" onClick={() => setClick(!click)}>
      <div className="link_sidebar">
        <Icon />
        <p className="container_userSidebar">{title}</p>
      </div>
      {click
        ? childs.map((Child, index) => {
            return (
              <ul className="dropdown" key={index}>
                <li className="dropdown_item">
                  <Child.icon />
                  <Link to={Child.path}>{Child.title}</Link>
                </li>
              </ul>
            );
          })
        : null}
    </li>
  );
};

export default Dropdown;
/*
<ul className="dropdown">
        <li className="dropdown_item">
          <Link to="/Dashboard/Distribucion">Distribucion 1</Link>
        </li>
        <li className="dropdown_item">
          <Link to="/Dashboard/Distribucion">Distribucion 2</Link>
        </li>
      </ul>*/
