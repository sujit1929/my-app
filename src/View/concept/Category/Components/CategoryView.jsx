import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CategoryView({ open, onClose, name, count, description }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    {/* Modal Box */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative w-full max-w-md bg-gradient-to-b from-[#1f1f1f] to-[#151515] text-zinc-100 rounded-2xl shadow-2xl border border-zinc-800 p-6"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-2 rounded-full hover:bg-zinc-800 transition"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                        <p className="text-purple-400 font-medium mb-2">
                            Count: {count}
                        </p>
                        <p className="text-zinc-300 leading-relaxed">{description}</p>

                        {/* Footer */}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
