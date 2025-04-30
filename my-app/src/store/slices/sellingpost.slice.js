import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";

// CREATE POST
export const createSellingPost = createAsyncThunk(
    "sellingPost/createSellingPost",
    async (postData, { rejectWithValue }) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), postData);
            return { id: docRef.id, ...postData };
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// GET POSTS
export const getSellingPosts = createAsyncThunk(
    "sellingPost/getSellingPosts",
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const posts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return posts;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// DELETE POST
export const deleteSellingPost = createAsyncThunk(
    "sellingPost/deleteSellingPost",
    async (postId, { rejectWithValue }) => {
        try {
            await deleteDoc(doc(db, "posts", postId));
            return postId;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// UPDATE POST
export const updateSellingPost = createAsyncThunk(
    "sellingPost/updateSellingPost",
    async ({ sellingPostId, updatedData }, { rejectWithValue }) => {
        try {
            const postRef = doc(db, "posts", sellingPostId);
            await updateDoc(postRef, updatedData);
            return { id: sellingPostId, ...updatedData };
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// REDUCER SLICE
export const sellingPostSlice = createSlice({
    name: "sellingPost",
    initialState: {
        sellingPosts: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSellingPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingPosts.push(action.payload);
            })
            .addCase(createSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getSellingPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSellingPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingPosts = action.payload;
            })
            .addCase(getSellingPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteSellingPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                state.sellingPosts = state.sellingPosts.filter(
                    (post) => post.id !== action.payload
                );
            })
            .addCase(deleteSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateSellingPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.sellingPosts.findIndex(
                    (post) => post.id === action.payload.id
                );
                if (index !== -1) {
                    state.sellingPosts[index] = action.payload;
                }
            })
            .addCase(updateSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default sellingPostSlice.reducer;
