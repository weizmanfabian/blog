import { Route, Routes } from "react-router-dom";
import HomeApp from "../pages/HomeApp";
import Navbar from "../components/Navbar.js"

const AplicationRoute = ({ user, setUser }) => {
    return (
        <>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/home" element={<HomeApp user={user} />} />
            </Routes>
        </>
    );
}

export default AplicationRoute;