// src/components
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            </div>

            {/* smaller screen navigation (Hamburger) */}
            <div className="dropdown lg:hidden">
                <button tabIndex={0} className="btn btn-ghost">
                    {/* hamburger icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul
                    tabIndex={0}
                    className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow font-medium bg-white rounded-box"
                >
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/software-projects">Software Projects</Link></li>
                    <li><Link to="/business-projects">Business Projects</Link></li>
                    <li><Link to="/misc-projects">Miscellaneous Projects</Link></li>
                </ul>
            </div>

            {/* Large Screen navigation */}
            <div className="navbar-center font-medium hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to="./about">About Me</Link></li>
                    <li><Link to="./skills">Skills</Link></li>
                    <li><Link to="./software-projects">Software Projects</Link></li>
                    <li><Link to="./business-projects">Business Projects</Link></li>
                    <li><Link to="./misc-projects">Miscellaneous Projects</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="mailto:duncan.everson@icloud.com" role="button" className="btn">Email</a>
            </div>
        </div >
    );
}

export default Navbar;