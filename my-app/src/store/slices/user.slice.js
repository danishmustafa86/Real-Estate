import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogin: false,
        user: {
            name: "",
            age: 0,
            email: "",
            phone: "",
        },
    },
    reducers: {
        setUserName: (state, action) => {
            state.user.name = action.payload;
        },
        setUserAge: (state, action) => {
            state.user.age = action.payload;
        },
        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setUserPhone: (state, action) => {
            state.user.phone = action.payload;
        },
        setUserLogin: (state, action) => {
            state.isLogin = action.payload;
        },
    },
    
});

export const {setUserName, setUserAge, setUserEmail, setUserPhone, setUserLogin} = userSlice.actions;
