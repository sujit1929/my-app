export default function FeedbackListItem({ item, onEdit, onDelete }) {
    return (
        <li className="mb-4">
            <div className="p-4 rounded-lg bg-[#1f1f1f] shadow-md space-y-2">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-bold">ID:</p>
                    <p>{item.id}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Name:</p>
                    <p>{item.name}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Email:</p>
                    <p>{item.email}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Feedback:</p>
                    <p>{item.feedback}</p>
                </div>
                <div className="flex gap-2 mt-4">
                    <button
                        className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onEdit(item)}
                    >
                        Edit
                    </button>
                    <button
                        className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}