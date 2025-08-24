import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create AsyncThunk for fetching products
export const fetchProduct = createAsyncThunk("product/fetchProduct", async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,      // Better name than isPost
        productList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Pending State
            .addCase(fetchProduct.pending, (state) => {
                // console.log("Fetching products...");
                state.isLoading = true;
                state.productList = [];
            })
            // Fulfilled State
            .addCase(fetchProduct.fulfilled, (state, action) => {
                // console.log("Fetched products:", action.payload);
                state.isLoading = false;
                state.productList = action.payload.products;
            })
            // Rejected State
            .addCase(fetchProduct.rejected, (state, action) => {
                // console.log("Error fetching products:", action.error);
                state.isLoading = false;
                state.productList = [];
            });
    },
});

export default productSlice.reducer;
