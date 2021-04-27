import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <h1>Matt Duffield</h1>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="https://my.indeed.com/p/matthewd-i1ttmid">Indeed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="https://github.com/duffieldml">Github</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./Matthew Duffield Resume.pdf" download><i
                            className="fa fa-download"></i>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;