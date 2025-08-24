import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeAuthToken } from "../../../ReduxToolkit/Slice/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const staticEmail = "sujit@123.com";
    const staticPassword = "sujit@123";
    const staticToken = "785999999";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === staticEmail && password === staticPassword) {
            dispatch(storeAuthToken({ isAuth: true, token: staticToken }));
            console.log("Login successful for user:", email);
            navigate("/");
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#181818]">
            <div className="w-full max-w-md bg-[#1f1f1f] p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
