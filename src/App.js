import { AuthContext } from "./context/AuthContext";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import NavBar from "./components/NavBar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { ErrorMsg } from "./helpers";
import { useContext } from "react";
import "./App.css";
import Transaction from "./components/Transaction";

function App() {
    const { isAuthReady } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    return (
        <div className="App">
            {isAuthReady && (
                <>
                    <NavBar />
                    <Routes>
                        <Route path="/CashTrack" element={user ? <Navigate to={'/'}/> : <Navigate to={"/login"} />}/>
                        <Route path="/" element={user ? <Home /> : <Navigate to={"/login"} />} />
                        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
                        <Route path="/signup" element={user ? <Navigate to={"/"} /> : <SignUp />} />
                    </Routes>
                </>
            )}
        </div>
    );
}

export default App;
