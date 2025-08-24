// src/components/Layout/AccordionNav.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    ChevronDown,
    ChevronUp,
    LayoutDashboard,
    ShoppingCart,
    FolderKanban,
    LineChart,
    Users,
    Cpu,
    BookOpen,
    Smartphone,
    CalendarDays,
    FileText,
} from "lucide-react";

export default function AccordionNav({ navConfig }) {
    const location = useLocation();
    const [openKeys, setOpenKeys] = useState([]);

    const toggleCollapse = (key) => {
        setOpenKeys((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
        );
    };

    const icons = {
        dashboard: <LayoutDashboard size={18} />,
        ecommerce: <ShoppingCart size={18} />,
        project: <FolderKanban size={18} />,
        marketing: <LineChart size={18} />,
        users: <Users size={18} />,
        tools: <Cpu size={18} />,
        tutorials: <BookOpen size={18} />,
        gadgets: <Smartphone size={18} />,
        events: <CalendarDays size={18} />,
        posts: <FileText size={18} />,
    };

    const renderMenu = (menu) => {
        const isActive = location.pathname === menu.path;

        if (menu.type === "collapse") {
            const isOpen = openKeys.includes(menu.key);
            return (
                <div key={menu.key} className="mb-1">
                    <button
                        onClick={() => toggleCollapse(menu.key)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm rounded-md hover:bg-[#1f1f1f] transition"
                    >
                        <div className="flex items-center gap-3 text-gray-300">
                            {icons[menu.icon] || null}
                            <span>{menu.title}</span>
                        </div>
                        {isOpen ? (
                            <ChevronUp className="text-gray-400" size={16} />
                        ) : (
                            <ChevronDown className="text-gray-400" size={16} />
                        )}
                    </button>
                    {isOpen && (
                        <div className="ml-5 mt-2 pl-3 space-y-1">
                            {menu.subMenu.map(renderMenu)}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <NavLink
                key={menu.key}
                to={menu.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md transition ${
                    isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-[#1f1f1f]"
                }`}
            >
                {icons[menu.icon] || null}
                {menu.title}
            </NavLink>
        );
    };

    return (
        <aside className="w-[289px] fixed left-0 top-0 bottom-0 bg-[#262626] border-r border-gray-700 shadow-lg p-6 overflow-y-auto z-50">
            <div className="mb-6">
                <h1 className="text-xl font-bold text-white">Toolsbazaar</h1>
            </div>
            <nav className="space-y-1">{navConfig.map(renderMenu)}</nav>
        </aside>
    );
}
