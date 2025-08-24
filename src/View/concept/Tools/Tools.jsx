import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTools, removeTools } from "../../../ReduxToolkit/Slice/ToolsSlice";
import { PlusCircle, Trash2, Edit3 } from "lucide-react";

export default function Tools() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const ToolsList = useSelector((state) => state.tools.toolsList);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !category.trim() || !description.trim()) {
            alert("Please fill in all fields!");
            return;
        }
        dispatch(addTools({ name, category, description }));
        setName("");
        setCategory("");
        setDescription("");
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-zinc-100 p-6 flex flex-col lg:flex-row gap-8">
            {/* Left - Create Form */}
            <div className="w-full max-w-lg bg-gradient-to-b from-[#1f1f1f] to-[#151515] rounded-2xl shadow-lg p-8 border border-zinc-800 relative overflow-hidden group transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                <header className="mb-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Create New Tool
                    </h1>
                    <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                        Add your tools and manage them effortlessly.
                    </p>
                </header>

                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                            Tool Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter tool name"
                            className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label htmlFor="category" className="block text-sm font-medium text-zinc-300">
                            Category
                        </label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Enter category"
                            className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium text-zinc-300">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Write a short description..."
                            rows={4}
                            className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-3">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium bg-purple-600 text-white hover:bg-purple-700 active:scale-95 transition shadow-md"
                        >
                            <PlusCircle size={18} />
                            Save Tool
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setName("");
                                setCategory("");
                                setDescription("");
                            }}
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800/70 active:scale-95 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* Right - Tools List */}
            <div className="w-full flex-1 bg-gradient-to-b from-[#1f1f1f] to-[#151515] rounded-2xl shadow-lg p-8 border border-zinc-800">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    📂 Tools List
                </h2>

                {ToolsList.length === 0 ? (
                    <p className="text-zinc-400 text-sm">No tools added yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {ToolsList.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#1c1c1c] p-5 rounded-2xl border border-zinc-700 shadow-md hover:shadow-xl hover:border-purple-500/40 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
                                <p className="text-purple-400 text-sm font-medium mt-1">{item.category}</p>
                                <p className="text-zinc-400 text-sm mt-2 line-clamp-3 truncate">{item.description}</p>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg shadow transition"
                                    >
                                        <Edit3 size={16} /> Update
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTools(item.id))}
                                        className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-lg shadow transition"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
