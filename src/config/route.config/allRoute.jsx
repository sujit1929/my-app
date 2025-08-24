// src/config/route.config/allRoute.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./route.config";
import AppRoute from "./app.route";
import ProtectedRoute from "./protected.route";
import PublicRoute from "./public.route";

export default function AllRoutes() {
    return (
        <Routes>
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                {protectedRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={<AppRoute component={route.component} />}
                    />
                ))}

                {/* ✅ If user hits "/" -> redirect to /tools */}
                <Route path="/" element={<Navigate to="/tools" replace />} />
            </Route>

            {/* Public Routes */}
            <Route element={<PublicRoute />}>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={<AppRoute component={route.component} />}
                    />
                ))}
            </Route>
        </Routes>
    );
}
