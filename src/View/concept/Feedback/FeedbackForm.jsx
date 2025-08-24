// FeedbackForm.js
import React from "react";

export default function FeedbackForm({
    name,
    setName,
    email,
    setEmail,
    feedback,
    setFeedback,
    handleSubmit,
    editMode,
    handleCancelEdit,
}) {
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 rounded border border-gray-600 text-white bg-[#181818]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded border border-gray-600 text-white bg-[#181818]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label className="block text-gray-300 mb-2">Feedback</label>
                <textarea
                    placeholder="Write your feedback"
                    rows="4"
                    className="w-full max-h-40 px-3 py-2 rounded border border-gray-600 text-white bg-[#181818]"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {editMode ? "Update Feedback" : "Submit"}
            </button>

            {editMode && (
                <button
                    type="button"
                    className="w-full mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCancelEdit}
                >
                    Cancel
                </button>
            )}
        </form>
    );
}
