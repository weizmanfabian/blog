import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import AplicationRoute from "./AplicationRoute";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//router principal
const PrincipalRoute = () => {

    const [user, setUser] = useState(sessionStorage.data ? JSON.parse(sessionStorage.data) : '');

    return (
        <BrowserRouter>
            <Routes>

                {/* página principal */}
                <Route path="/" element={<Index />} />

                {/* rutas públicas */}
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoute isLogged={user}>
                            <AuthRoute setUser={setUser} />
                        </PublicRoute>
                    }
                />

                {/* rutas privadas */}
                <Route
                    path="/app/*"
                    element={
                        <PrivateRoute isLogged={user}>
                            <AplicationRoute user={user} setUser={setUser} />
                        </PrivateRoute>
                    }
                />
            </Routes>

        </BrowserRouter>
    );
}

export default PrincipalRoute;