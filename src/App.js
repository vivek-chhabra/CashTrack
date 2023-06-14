import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import NavBar from "./components/NavBar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
