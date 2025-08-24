// Dashboard.js
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import FeedbackListItem from "./FeedbackItemList";
import { addFeedback, editFeedback, removeFeedback } from "../../../ReduxToolkit/Slice/FeedbackSlice";
import { removeStoreToken } from "../../../ReduxToolkit/Slice/AuthSlice";

export default function Dashboard() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [editId, setEditId] = useState(null);

    const FeedbackList = useSelector((state) => state.feedback.feedBackList);

    const handleEditFeedback = useCallback((item) => {
        setEditId(item.id);
        setName(item.name);
        setEmail(item.email);
        setFeedback(item.feedback);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch(editFeedback({ id: editId, name, email, feedback }));
            setEditId(null);
        } else {
            dispatch(addFeedback({ name, email, feedback }));
        }
        setName("");
        setEmail("");
        setFeedback("");
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setName("");
        setEmail("");
        setFeedback("");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-center p-6 gap-6">
            {/* Feedback Form */}
            <div className="w-full max-w-lg p-6 rounded-lg shadow-lg bg-[#181818]">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    {editId ? "Edit Feedback" : "Feedback Form"}
                </h2>

                <FeedbackForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    feedback={feedback}
                    setFeedback={setFeedback}
                    handleSubmit={handleSubmit}
                    editMode={!!editId}
                    handleCancelEdit={handleCancelEdit}
                />

                <button
                    className="mt-6 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch(removeStoreToken())}
                >
                    Logout
                </button>
            </div>

            {/* Feedback List */}
            <div className="w-full max-w-lg p-6 rounded-lg shadow-lg bg-[#181818] text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">Feedback List</h2>
                <ul>
                    {FeedbackList.map((item) => (
                        <FeedbackListItem
                            key={item.id}
                            item={item}
                            onEdit={handleEditFeedback}
                            onDelete={(id) => dispatch(removeFeedback(id))}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
