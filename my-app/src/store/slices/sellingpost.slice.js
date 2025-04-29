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

export const createSellingPost = createAsyncThunk(
    "sellingPost/createSellingPost",
    async (postData, { rejectWithValue }) => {
        console.log("Creating post with data:", postData);
        try {
            const docRef = await addDoc(collection(db, "posts"), postData);
            return { id: docRef.id, ...postData };
        } catch (e) {
            console.error("Error adding document:", e);
            return rejectWithValue(e.message);
        }
    }
);

export const getSellingPosts = createAsyncThunk(
    "sellingPost/getSellingPosts",
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            let posts = [];
            querySnapshot.forEach((doc)=> {
                posts.push({id:doc.id,...doc.data()});
            })
            return posts;
        } catch (e) {
            console.error("Error fetching documents:", e);
            return rejectWithValue(e.message);
        }
    }
);

export const deleteSellingPost = createAsyncThunk(
    "sellingPost/deleteSellingPost",
    async (postId) => {
        try {
        await deleteDoc(doc(db, "posts", postId));
        return postId;
        }
        catch (e) {
            console.error("Error deleting document:",e);
            
        }
    }
)

export const updateSellingPost = createAsyncThunk(
    "selllingPost/updateSellingPost",
    async({postId, updatedData}) => {
        try{
            const postRef = doc(db, "posts", postId);
            await updateDoc(postRef, updatedData);
            return {id:postId, ...updatedData};
        }
        catch(e){
            console.error("Error updating document:", e);
        }
        return rejectWithValue(e.message);
    }
)

export const  sellingPostSlice = createSlice({
    name:"sellingPost",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    extraReducers:(builder) => {
        builder
            .addCase(createSellingPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(createSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getSellingPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSellingPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getSellingPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteSellingPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            })
            .addCase(deleteSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateSellingPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateSellingPost.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.posts.findIndex((post) => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(updateSellingPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})