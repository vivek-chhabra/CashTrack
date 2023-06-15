import { useInput } from "../../hooks/useInput";
import React, { useState } from "react";
import "../login/Login.css";

export default function Login() {
    // input hook
    const [email, updateEmail, resetEmail] = useInput("");
    const [password, updatePassword, resetPassword] = useInput("");

    // state for error
    const [error, setError] = useState("");

    // login with email and password
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // login with google
   

    return (
        <div className="Login">
            <div className="container">
                {error ? (
                    <></>
                ) : (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Email address :
                                </label>
                                <input type="email" required value={email} onChange={updateEmail} className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Password :
                                </label>
                                <input type="password" required value={password} onChange={updatePassword} className="shadow-none form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                        <div className="separate">
                            <div className="line"></div>
                            <div className="or">OR</div>
                            <div className="line"></div>
                        </div>
                        <button type="submit" className="loginWithGoogle">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                            <p>Login With Google</p>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
