import React from "react";
import{Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      <li className="nav-item">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        
        {/*<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lab Reports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/add">X-Ray</a>
          <a class="dropdown-item" href="/addBlood">Blood Reports</a>
        </div>
    </li>*/}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Lab Reports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">X-Ray</a>
          <a class="dropdown-item" href="/blood">Blood Reports</a>
        </div>
    </li>
      
       
        <li className="nav-item">
          <a className="nav-link" href="/get">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/main">Main</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;