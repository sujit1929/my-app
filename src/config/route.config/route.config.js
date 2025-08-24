// src/config/route.config/route.config.js
import authRoutes from "./auth.route";
import conceptsRoute from "./concept.route";


export const publicRoutes = [...authRoutes];
export const protectedRoutes = [...conceptsRoute];
