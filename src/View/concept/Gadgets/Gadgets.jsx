import React, { useState } from "react";
import { PlusCircle, Edit3, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addGadgets, removeGadgets, updateGadgets } from "../../../ReduxToolkit/Slice/GadgetsSlice";

export default function Gadgets() {
    const [name, setname] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [editId, seteditId] = useState(null)
    const dispatch = useDispatch()
    const gadgetsList = useSelector((state) => state.gadget.gadgetList)

    const handleEdit = (item) => {
        setname(item.name)
        setdescription(item.description)
        setcategory(item.category)
        seteditId(item.id)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (editId) {
            // Update existing gadget
            dispatch(updateGadgets({ id: editId, name, category, description }));
            seteditId(null); // Reset edit mode
        } else {
            // Add new gadget
            dispatch(addGadgets({ name, category, description }));
        }

        // Reset form fields
        setname("");
        setcategory("");
        setdescription("");
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-zinc-100 p-6 flex flex-col lg:flex-row gap-8">
            {/* Left - Create Form */}
            <div className="w-full max-w-lg bg-gradient-to-b from-[#1f1f1f] to-[#151515] rounded-2xl shadow-lg p-8 border border-zinc-800 relative overflow-hidden group transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                <header className="mb-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Create New Gadget
                    </h1>
                    <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                        Add your tools and manage them effortlessly.
                    </p>
                </header>

                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                            Gadget Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter tool name"
                            className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
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
                            onChange={(e) => setcategory(e.target.value)}
                            required
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
                            onChange={(e) => setdescription(e.target.value)}
                            required
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-3">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium bg-purple-600 text-white hover:bg-purple-700 active:scale-95 transition shadow-md"
                        >
                            <PlusCircle size={18} />
                            {editId ? "Update Gadget" : "Save Gadget"}
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800/70 active:scale-95 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* Right - Gadgets List */}
            <div className="w-full flex-1 bg-gradient-to-b from-[#1f1f1f] to-[#151515] rounded-2xl shadow-lg p-8 border border-zinc-800">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    📂 Gadgets List
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {/* Example Gadget Card */}
                    {gadgetsList && gadgetsList.map((item) => (
                        <div className="group relative bg-[#1c1c1c] p-5 rounded-2xl border border-zinc-700 shadow-md hover:shadow-xl hover:border-purple-500/40 transition-all duration-300" >
                            <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
                            <p className="text-purple-400 text-sm font-medium mt-1">{item.category}</p>
                            <p className="text-zinc-400 text-sm mt-2 line-clamp-3 truncate">
                                {item.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg shadow transition" onClick={() => { handleEdit(item) }}>
                                    <Edit3 size={16} /> Update
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-lg shadow transition"
                                    onClick={() => dispatch(removeGadgets(item.id))}
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    );
}
