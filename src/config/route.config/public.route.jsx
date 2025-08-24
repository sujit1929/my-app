// src/components/Route/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  // Redux state se token lo (assume auth slice me store hai)
  const token = useSelector((state) => state.auth?.token);

  // Agar token hai -> Dashboard pe bhejo
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  // Agar token nahi hai -> Public page render karo (jaise login/register)
  return <Outlet />;
};

export default PublicRoute;
