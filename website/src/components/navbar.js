// src/components
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Duncan Everson</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About Me</a></li>
                    <li><a>Soft Skills</a></li>
                    <li><a>Software Projects</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Email</a>
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