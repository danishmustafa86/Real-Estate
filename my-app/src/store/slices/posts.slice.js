import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        error: null, // Add error handling
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.error = null; // Clear previous errors
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.error.message; // Store the error message
                console.error("Error fetching posts:", action.error.message);
            });
    },
});

export default postsSlice;