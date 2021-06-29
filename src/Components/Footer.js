import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {


  return (

    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <p className="navbar-brand">© 2021 ENno. - All Rights Reserved.</p>
      
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Twitter</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Linked in</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pintrest</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Footer;
