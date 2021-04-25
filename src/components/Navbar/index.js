import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>About Me</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="https://my.indeed.com/p/matthewd-i1ttmid">Indeed</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="https://github.com/duffieldml">Github</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Assets\Matthew Duffield Resume.pdf" download><i
                            className="fa fa-download"></i>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;