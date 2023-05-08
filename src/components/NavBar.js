        //type rcep or rce
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar=()=> {
 
    return (
      <div>
        {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"> //fixed-top is used to stick nav bar at top  */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
<li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
<li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
<li className="nav-item"><Link className="nav-link" to="/health">Sealth</Link></li>
<li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
<li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
<li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

       
      </ul>
    
    </div>
  </div>
</nav>
      </div>
    )
  }


export default NavBar