// src/config/route.config/auth.route.js
import { lazy } from "react";

const authRoutes = [
    {
        key: "auth.login",
        path: "/auth/login",
        component: lazy(() => import("../../View/concept/Login/LoginForm")),
    },
];

export default authRoutes