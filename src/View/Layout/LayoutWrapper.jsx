// src/components/Layout/LayoutWrapper.jsx
import navigationConfig from "../../config/navigation.config/navigation.config";
import AccordionNav from "./AccordionNav";

export default function LayoutWrapper({ children }) {
    return (
        <div className="flex bg-[#1f1f1f] text-gray-200">
            {/* Sidebar */}
            <AccordionNav navConfig={navigationConfig} />

            {/* Main Content */}
            <div
                className="flex-1 flex flex-col"
                style={{
                    marginLeft: "289px", // ✅ Same width as sidebar
                    minHeight: "100vh",
                }}
            >
                {/* Topbar */}
                <header className="flex bg-[#262626] sticky top-0 z-50 items-center justify-between px-6 py-3 border-b border-gray-700 shadow-md">
                    <h2 className="text-lg font-semibold text-white">Dashboard</h2>
                    <div className="flex items-center gap-4">
                        <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                            🌐
                        </button>
                        <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                            🔔
                        </button>
                        <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                            👤
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 m-8 ">
                    {children}
                </main>
            </div>
        </div>
    );
}
