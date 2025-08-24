import { CONCEPTS_PREFIX_PATH } from "../route.config";

const navigationConfig = [
    {
        key: "home",
        path: "/home",
        title: "Home",
        icon: "home",
        type: "item",
        subMenu: [],
    },
    {
        key: "dashboard",
        path: "/dashboard",
        title: "Dashboard",
        icon: "dashboard",
        type: "item",
        subMenu: [],
    },
    {
        key: "concepts",
        path: "",
        title: "Concepts",
        icon: "concepts",
        type: "collapse",
        subMenu: [
            {
                key: "concepts.tools",
                path: `${CONCEPTS_PREFIX_PATH}/tools/tools-list`,
                title: "Tools",
                icon: "tools",
                type: "item",
                subMenu: [],
            },
            {
                key: "concepts.posts",
                path: `${CONCEPTS_PREFIX_PATH}/posts/post-list`,
                title: "Post",
                icon: "posts",
                type: "item",
                subMenu: [],
            },
            {
                key: "concepts.products",
                path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
                title: "Product",
                icon: "ecommerce",
                type: "item",
                subMenu: [],
            },
            {
                key: "concepts.gadgets",
                path: `${CONCEPTS_PREFIX_PATH}/gadgets/gadget-list`,
                title: "Gadget",
                icon: "gadgets",
                type: "item",
                subMenu: [],
            },
            {
                key: "concepts.categories",
                path: `${CONCEPTS_PREFIX_PATH}/categories/category-list`,
                title: "Category",
                icon: "category",
                type: "item",
                subMenu: [],
            },
        ],
    },
];

export default navigationConfig;
