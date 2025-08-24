import React, { useState } from "react";
import { PlusCircle, Edit3, Trash2, Eye, MoreVertical } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, removeCategory, updateCategory } from "../../../ReduxToolkit/Slice/CategorySlice";
import CategoryView from "./Components/CategoryView";
import AddCategory from "./Components/AddCategory";

export default function Category() {
    const [name, setName] = useState("");
    const [count, setCount] = useState("");
    const [description, setDescription] = useState("");
    const [editId, setEditId] = useState(null);
    const CategoryList = useSelector((state) => state.category.categoryList);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    // console.log("CategoryList", CategoryList);
    const handleEdit = (item) => {
        // console.log(item)
        setName(item.name);
        setCount(item.count);
        setDescription(item.description);
        setEditId(item.id);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch(updateCategory({ id: editId, name, count, description }));
            setEditId(null);
        } else {
            dispatch(addCategory({ name, count, description }));
        }
        setName("");
        setCount("");
        setDescription("");
    };
    const handleView = (item) => {
        setOpen(true);
        setName(item.name);
        setCount(item.count);
        setDescription(item.description);
        setEditId(item.id);
    }

    return (
        <div className="text-white flex flex-col lg:flex-row gap-8">
            {/* Left - Create Category Form */}
            {/* <AddCategory name={name} setName={setName} count={count} setCount={setCount} description={description} setDescription={setDescription} handleSubmit={handleSubmit} /> */}
            {/* Right - Static Category List */}
            <div className="">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    📂 Category List
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {/* Static Category Card */}
                    {CategoryList.map((category) => (
                        <div className="group relative bg-[#1c1c1c] p-5 rounded-2xl border border-zinc-700 shadow-md hover:shadow-xl hover:border-purple-500/40 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white truncate">
                                    {category.name}
                                </h3>
                                <button className="text-zinc-400 hover:text-zinc-300 transition" onClick={() => handleView(category)}>
                                    <Eye size={20} />
                                </button>
                            </div>
                            <p className="text-purple-400 text-sm font-medium mt-1">
                                Count: {category.count}
                            </p>
                            <p className="text-zinc-400 text-sm mt-2 line-clamp-3 truncate">
                                {category.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg shadow transition " onClick={() => handleEdit(category)}>
                                    <Edit3 size={16} /> Update
                                </button>
                                <button onClick={() => dispatch(removeCategory(category.id))} className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-lg shadow transition">
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {
                open && <CategoryView
                    open={open}
                    onClose={() => setOpen(false)}
                    name={name}
                    count={count}
                    description={description}
                />

            }
        </div>
    );
}
