// src/components
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link to="/Home" className="btn btn-ghost text-xl">Home</Link>
            </div>
            <div className="navbar-center font-medium">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/soft-skills">Soft Skills</Link></li>
                    <li><Link to="/software-projects">Software Projects</Link></li>
                    <li><Link to="/business-projects">Business Projects</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="mailto:duncan.everson@icloud.com" className="btn">Email</a>
            </div>
        </div>
    );
}

/**
 *                         <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Character</a></li>
                                <li><a>Software Projects</a></li>
                            </ul>
                        </details>
 */

export default Navbar;