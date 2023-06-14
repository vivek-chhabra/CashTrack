import React from "react";
import "../login/Login.css";
import { useInput } from "../../hooks/useInput";
import { useSignUpAuth } from "../../hooks/useSignUpAuth";

export default function SignUp() {
    // input hook
    const [firstName, updateFirstName, resetFName] = useInput("");
    const [lastName, updateLastName, resetLName] = useInput("");
    const [email, updateEmail, resetEmail] = useInput("");
    const [password, updatePassword, resetPassword] = useInput("");

    // sign up using hook
    const { error, signUp } = useSignUpAuth(firstName, lastName, email, password);

    // handling submit
    const handleSubmit = (e) => {
        e.preventDefault();
        signUp();
        console.log(error)
        // resetEmail();
        // resetFName();
        // resetLName();
        // resetPassword();
    };

    return (
        <div className="SignUp Login">
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">
                            First Name :
                        </label>
                        <input type="text" required value={firstName} onChange={updateFirstName} className="shadow-none form-control" id="firstName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">
                            Last Name :
                        </label>
                        <input type="text" required value={lastName} onChange={updateLastName} className="shadow-none form-control" id="lastName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">
                            Email address :
                        </label>
                        <input type="email" required value={email} onChange={updateEmail} className="shadow-none form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">
                            Create Password :
                        </label>
                        <input type="password" required value={password} onChange={updatePassword} className="shadow-none form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}
