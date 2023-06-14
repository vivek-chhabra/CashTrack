import React from "react";
import "../login/Login.css";

export default function Login() {
    return (
        <div className="Login">
            <div className="container">
                <h2>Login</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                            Email address :
                        </label>
                        <input type="email" className="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">
                            Password :
                        </label>
                        <input type="password" className="shadow-none form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
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
            </div>
        </div>
    );
}
