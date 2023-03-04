import React from "react";
import { Link } from "react-router-dom";
 function Header(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/getstudent">Stdents Details</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addstudent">Register Student</Link>
            </li>
            
            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               SubjectDetails
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="#">Math</Link></li>
                                <li><Link class="dropdown-item" to="#">Science</Link></li>
                                <li><Link class="dropdown-item" to="#">General</Link></li>
                                </ul>
                        </li>
          </ul>
        </div>
      </nav>
    )
 }
 export default Header;