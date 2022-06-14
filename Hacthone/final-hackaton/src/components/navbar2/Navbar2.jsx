import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";



const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (


    <div className="Navbar">
      <span className="nav-logo">SMIT STUDENT PORTAL</span>
      <div className={`nav-items ${isOpen && "open"}`}>
          <Link to='/home' > Logout </Link>
          <Link to='/courses' >Courses</Link>
        {/* <a href="/login">Login</a>
        <a href="/signup">Signup</a> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar2;
