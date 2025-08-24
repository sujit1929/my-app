import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        token: localStorage.getItem("token"),
    },
    reducers: {
        storeAuthToken: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.token = action.payload.token
            localStorage.setItem("token", action.payload.token)
        },
        removeStoreToken: (state) => {
            state.isAuth = false
            state.token = ""
            localStorage.removeItem("token")
        }
    }
})
export const { storeAuthToken, removeStoreToken } = AuthSlice.actions
export default AuthSlice.reducer