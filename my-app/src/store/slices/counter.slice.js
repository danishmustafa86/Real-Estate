import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchposts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
})

export const fetchproducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
} )



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        posts: [],
        products : [
            {
                id: 1,
                pName: "Product 1",
                price: 100,
            },
            {
                id: 2,
                pName: "Product 2",
                price: 200,
            },
        ],
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;    
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
       

        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchposts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(fetchposts.rejected, (state, action) => {
                console.error("Error fetching posts:", action.error.message);
            })
            .addCase(fetchproducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchproducts.rejected, (state, action) => {
                console.error("Error fetching products:", action.error.message);
            })
    },

});


export const { increment, decrement,reset, incrementByAmount, addProduct, removeProduct } = counterSlice.actions;