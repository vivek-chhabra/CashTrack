import React, { useContext } from "react";
import "../login/Login.css";
import { useInput } from "../../hooks/useInput";
import { useSignUpAuth } from "../../hooks/useSignUpAuth";
import { ErrorMsg } from "../../helpers";
import { AuthContext } from "../../context/AuthContext";
import { useToggle } from "../../hooks/useToggle";
import { NavLink } from "react-router-dom";

export default function SignUp() {
    // input hook
    const [firstName, updateFirstName, resetFName] = useInput("");
    const [lastName, updateLastName, resetLName] = useInput("");
    const [email, updateEmail, resetEmail] = useInput("");
    const [password, updatePassword, resetPassword] = useInput("");

    // toggle hook
    const [isHidden, toggleIsHidden] = useToggle(true);

    // consuming the auth context
    const { user } = useContext(AuthContext);

    // sign up using hook
    const { error, signUp, isPending } = useSignUpAuth(firstName, lastName, email, password);

    // handling submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp();
        if (error === null) {
            resetEmail();
            resetFName();
            resetLName();
            resetPassword();
        }
    };
    if (error === null) {
        resetEmail();
        resetFName();
        resetLName();
        resetPassword();
    }

    return (
        <>
            {error && <ErrorMsg error={error} />}
            <div className="SignUp Login">
                <div className="container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 name-section">
                            <label for="firstName" className="form-label">
                                Name :
                            </label>
                            <div className="name-input">
                                <input type="text" placeholder="First Name" required value={firstName} onChange={updateFirstName} className="shadow-none form-control" id="firstName" aria-describedby="emailHelp" />
                                <input type="text" placeholder="Last Name" required value={lastName} onChange={updateLastName} className="shadow-none form-control" id="lastName" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email address :
                            </label>
                            <input type="email" placeholder="Your Email" required value={email} onChange={updateEmail} className="shadow-none form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">
                                Create Password :
                            </label>
                            <input type={isHidden ? "password" : "text"} placeholder="Make a Strong Password" required value={password} onChange={updatePassword} className="shadow-none form-control" id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input shadow-none" onClick={toggleIsHidden} id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">
                                See Password
                            </label>
                        </div>
                        <div className="sepr"></div>
                        <div className="have-an-acc">
                            <p>
                                Already have an account ?{" "}
                                <NavLink to={"/login"} className={"loginEither"}>
                                    Log in
                                </NavLink>
                            </p>
                        </div>
                        <div className="sepr"></div>
                        {isPending ? (
                            <button type="submit" disabled className="mt-3 btn btn-primary">
                                Loading...
                            </button>
                        ) : (
                            <button type="submit" className="mt-3 btn btn-primary">
                                Create Account
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
