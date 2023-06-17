import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../components/NavBar.css";
import { useLogOut } from "../hooks/useLogOut";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { capitalize } from "../helpers";

export default function NavBar() {
    // using log out hook
    const { error, isPending, logOut } = useLogOut();

    // consuming auth context
    const { user } = useContext(AuthContext);


    return (
        <div className="NavBar">
            <nav className="container">
                <NavLink to={"/"} className={"brand"}>
                    cashTrack
                </NavLink>
                <div className="links">
                    {!user ? (
                        <>
                            <NavLink to={"/login"} className={"link"}>
                                Login
                            </NavLink>
                            <NavLink to={"/signup"} className={"link"}>
                                SignUp
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <p className="username">Hello, {user.displayName.split(" ")[0]}</p>
                            <NavLink to={"/login"} className={"link btn btn-success sign-out"} onClick={logOut}>
                                Sign Out
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
}
