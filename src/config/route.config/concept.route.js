import { lazy } from "react";
import { CONCEPTS_PREFIX_PATH } from "../route.config";

const conceptsRoute = [
    {
        key: "home",
        path: "/home",
        component: lazy(() => import("../../View/concept/HomePage/HomePage")),
    },
    {
        key: "dashboard",
        path: "/dashboard",
        component: lazy(() => import("../../View/concept/Feedback/Dashboard")),
    },
    {
        key: "concepts.tools",
        path: `${CONCEPTS_PREFIX_PATH}/tools/tools-list`,
        component: lazy(() => import("../../View/concept/Tools/Tools")),
    },
    {
        key: "concepts.posts",
        path: `${CONCEPTS_PREFIX_PATH}/posts/post-list`,
        component: lazy(() => import("../../View/concept/Post/PostPage")),
    },
    {
        key: "concepts.products",
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(() => import("../../View/concept/Product/ProductPage")),
    },
    {
        key: "concepts.gadgets",
        path: `${CONCEPTS_PREFIX_PATH}/gadgets/gadget-list`,
        component: lazy(() => import("../../View/concept/Gadgets/Gadgets")),
    },
    {
        key: "concepts.categories",
        path: `${CONCEPTS_PREFIX_PATH}/categories/category-list`,
        component: lazy(() => import("../../View/concept/Category/Category")),
    },
];

export default conceptsRoute;
