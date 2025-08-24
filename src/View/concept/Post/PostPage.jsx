// PostPage.js
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../ReduxToolkit/Slice/PostSlice";
import { useEffect } from "react";

export default function PostPage() {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    console.log("postList", postList);
    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {postList.length > 0 ? (
                    postList.map(post => (
                        <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">{post.body}</p>
                            </div>
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <div className="flex space-x-4">
                                        <span className="flex items-center">
                                            👍 <span className="ml-1">{post.reactions.likes}</span>
                                        </span>
                                        <span className="flex items-center">
                                            👎 <span className="ml-1">{post.reactions.dislikes}</span>
                                        </span>
                                    </div>
                                    <span>Views: {post.views}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-lg text-gray-500">Loading posts...</p>
                )}
            </div>
        </div>
    );
}