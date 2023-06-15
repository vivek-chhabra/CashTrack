import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function useSignUpAuth(firstName, lastName, email, password) {
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);

    // consuming auth context
    const { user, dispatch } = useContext(AuthContext);

    // sign up with email and password
    const signUp = async () => {
        try {
            setIsPending(true);
            let res = await createUserWithEmailAndPassword(auth, email, password);
            setError(null);
            if (!res) {
                throw new Error("Could not complete signup");
            }

            dispatch({ type: "ADD_USER_INFO", userInfo: res.user });

            //updating user's name
            updateProfile(auth.currentUser, { displayName: `${firstName} ${lastName}` });
            setIsPending(false);
        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    };

    // sign up with google
    const googleSignUp = async () => {
        try {
            setIsPending(true);
            await signInWithPopup(googleProvider);
            setError(null);
            setIsPending(false);
        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    };

    return { error, isPending, signUp, googleSignUp };
}

export { useSignUpAuth };
