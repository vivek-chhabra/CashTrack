import { useInput } from "../../hooks/useInput";
import React, { useState } from "react";
import "../login/Login.css";
import { ErrorMsg } from "../../helpers";
import { useLoginAuth } from "../../hooks/useLoginAuth";
import { useToggle } from "../../hooks/useToggle";

export default function Login() {
    // input hook
    const [email, updateEmail, resetEmail] = useInput("");
    const [password, updatePassword, resetPassword] = useInput("");

    // toggle hook
    const [isHidden, toggleIsHidden] = useToggle(true);

    // login auth hook
    const { error, isPending, login, googleLogin } = useLoginAuth(email, password);

    // handling submit
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <>
            {error && <ErrorMsg error={error} />}
            <div className="Login">
                <div className="container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address :
                            </label>
                            <input type="email" required value={email} onChange={updateEmail} className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password :
                            </label>
                            <input type={isHidden ? "password" : "text"} required value={password} onChange={updatePassword} className="shadow-none form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input shadow-none" onClick={toggleIsHidden} id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                See Password
                            </label>
                        </div>
                        {isPending ? (
                            <button type="submit" disabled className="btn btn-primary">
                                Loading...
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        )}
                    </form>
                    <div className="separate">
                        <div className="line"></div>
                        <div className="or">OR</div>
                        <div className="line"></div>
                    </div>
                    <button type="submit" className="loginWithGoogle" onClick={googleLogin}>
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        <p>Login With Google</p>
                    </button>
                </div>
            </div>
        </>
    );
}
