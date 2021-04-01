import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper pink darken-3 ">
      <div className="container">
        <a href="#/" className="brand-logo left ">
          CAMPUSES/STUDENTS
        </a>
        <ul className="right">
          <li>
            <a href="#/">HOME</a>
          </li>
          <li>
            <a href="#/students">STUDENTS</a>
          </li>
          <li>
            <a href="#/campuses">CAMPUSES</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
