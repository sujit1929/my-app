import { PlusCircle } from 'lucide-react';
import React from 'react'

function AddCategory({ name, setName, count, setCount, description, setDescription, handleSubmit, editId }) {
    return (
        <div className="w-full max-w-md bg-gradient-to-b from-[#1f1f1f] to-[#151515] rounded-2xl shadow-lg p-8 border border-zinc-800 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

            <header className="mb-6 text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Create New Category
                </h1>
                <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                    Add your categories and manage them effortlessly.
                </p>
            </header>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-zinc-300"
                    >
                        Category Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter category name"
                        className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Count */}
                <div className="space-y-2">
                    <label
                        htmlFor="count"
                        className="block text-sm font-medium text-zinc-300"
                    >
                        Count
                    </label>
                    <input
                        id="count"
                        type="number"
                        placeholder="Enter count"
                        className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        required
                    />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-zinc-300"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Write a short description..."
                        rows={4}
                        className="w-full rounded-xl bg-zinc-900/60 border border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-500 transition resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        {editId ? "Update" : "Create"}
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setName("");
                            setCount("");
                            setDescription("");
                        }}
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800/70 active:scale-95 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddCategory
