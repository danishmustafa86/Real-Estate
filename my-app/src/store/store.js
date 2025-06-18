// store.js
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.slice";
import { postsSlice } from "./slices/posts.slice";
import { userSlice } from "./slices/user.slice";
import { objectSlice } from "./slices/object.slice";
import { sellingPostSlice } from "./slices/sellingpost.slice";
import { authSlice } from "./slices/auth.slice"; // ✅ imported

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    userSlice: userSlice.reducer,
    postsSlice: postsSlice.reducer,
    objectSlice: objectSlice.reducer,
    sellingPostSlice: sellingPostSlice.reducer,
    auth: authSlice.reducer, // ✅ FIXED: Correct key added
  },
});

export default store;
