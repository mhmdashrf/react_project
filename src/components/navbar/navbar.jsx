import React, { Component } from 'react'
import'./navbar.css'
import { Link } from "react-router-dom";


export default class Navbar extends Component {

    render() {
        return <>
  <nav id='navbar' className="navbar navbar-expand-lg navbar-light py-4">
  <div className="container">
    <Link to={'/home'} className="navbarBrand">
    START FRAMEWORK
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/home'} className="navLink  " aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
         <Link to={'/about'}  className="navLink" >
         ABOUT

          </Link>
        </li>
        <li className="nav-item">
         <Link to={'/portfolio'}  className="navLink" >
         PORTFOLIO

          </Link>
        </li>
        <li className="nav-item">
         <Link to={'/contact'}  className="navLink" >
            
            CONTACT

          </Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>

        
        
        </>
            
        
    }
}
