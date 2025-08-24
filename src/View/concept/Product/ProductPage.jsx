import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../ReduxToolkit/Slice/ProductSlice";

export default function ProductPage() {
    const dispatch = useDispatch();
    const { productList, isLoading } = useSelector((state) => state.product);

    useEffect(() => {
        // ✅ Correct way to call the thunk
        dispatch(fetchProduct());
    }, [dispatch]);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

            {/* Show loader */}
            {isLoading ? (
                <p className="text-blue-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {productList.map((product) => (
                        <div
                            key={product.id}
                            className="p-4 border rounded-lg shadow-md bg-white text-black"
                        >
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-600">₹{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
