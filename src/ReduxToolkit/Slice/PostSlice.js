import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data;
});

const PostSlice = createSlice({
    name: "post",
    initialState: {
        isPost: false,
        postList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isPost = false;
            state.postList = [];
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isPost = true;
            state.postList = action.payload.posts;
        });
        builder.addCase(fetchPost.rejected, (state) => {
            state.isPost = false;
            state.postList = [];
        });
    },

});
export default PostSlice.reducer