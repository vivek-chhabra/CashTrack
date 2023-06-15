import React, { createContext, useReducer } from "react";

// auth context
export const AuthContext = createContext();

// reducer function
const authReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER_INFO":
            return { ...state, user: action.userInfo };
        default:
            return state;
    }
};

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
}
