import React from "react";
import "../login/Login.css";

export default function SignUp() {
    return (
        <div className="SignUp Login">
            <div className="container">
                <h2>Sign Up</h2>
                <form>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">
                            First Name :
                        </label>
                        <input type="email" className="shadow-none form-control" id="firstName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">
                            Last Name :
                        </label>
                        <input type="email" className="shadow-none form-control" id="lastName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">
                            Email address :
                        </label>
                        <input type="email" className="shadow-none form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">
                            Create Password :
                        </label>
                        <input type="password" className="shadow-none form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
