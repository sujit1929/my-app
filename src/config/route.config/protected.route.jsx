// src/components/Route/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const token = useSelector((state) => state.auth.token); // from redux

  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
