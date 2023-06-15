import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export function useSignOut() {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useContext(AuthContext);

    const signOut = async () => {
        setError(null);
        setIsPending(true);

        // sign the user out
        try {
            await signOut(auth);
            setIsPending(false);

            // dispatch logout action
            dispatch({ type: "LOGOUT" });

            setIsPending(false);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            isPending(false);
        }
    };
    return { error, isPending, signOut };
}
