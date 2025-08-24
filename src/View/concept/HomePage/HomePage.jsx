import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  space-y-6">
      <h1 className="text-3xl font-bold text-white">Welcome to Home Page</h1>

      <div className="space-x-4">
        {/* Go to Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </button>

        {/* Go to Tools */}
        <button
          onClick={() => navigate("/tools")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Go to Tools
        </button>
        <button
          onClick={() => navigate("/post")}
          className="px-6 py-3  text-white rounded-lg shadow-md bg-purple-600 hover:bg-purple-700 transition"
        >
          Go to Post
        </button> <button
          onClick={() => navigate("/gadget")}
          className="px-6 py-3  text-white rounded-lg shadow-md bg-yellow-600 hover:bg-yellow-700 transition"
        >
          Go to Gadgets
        </button>
      </div>
    </div>
  );
}
