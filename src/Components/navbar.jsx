import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badget badge-pill badge-primary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
