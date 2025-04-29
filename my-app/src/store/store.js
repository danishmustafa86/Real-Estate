import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.slice";
import { postsSlice } from "./slices/posts.slice";
import { userSlice } from "./slices/user.slice";
import { objectSlice } from "./slices/object.slice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        userSlice: userSlice.reducer,
        postsSlice: postsSlice.reducer,
        objectSlice: objectSlice.reducer,
    }
});

export default store;