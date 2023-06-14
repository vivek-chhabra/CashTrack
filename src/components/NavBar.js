import React from "react";
import { NavLink } from "react-router-dom";
import '../components/NavBar.css'

export default function NavBar() {
    return (
        <div className="NavBar">
            <nav className="container">
                <NavLink to={"/"} className={"brand"}>
                    cashTrack
                </NavLink>
                <div className="links">
                    <NavLink to={"/login"}  className={'link'}>Login</NavLink>
                    <NavLink to={"/signup"}  className={'link'}>SignUp</NavLink>
                </div>
            </nav>
        </div>
    );
}
