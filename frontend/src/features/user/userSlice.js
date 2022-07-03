import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersignUp: (state,{payload})=>{
            localStorage.setItem('profile',JSON.stringify(payload))
            state.userDetails = payload
        },
        usersignIn: (state,{payload})=>{
            localStorage.setItem('profile',JSON.stringify(payload))
            state.userDetails = payload
        },
    },
})

export const {usersignUp,usersignIn} = userSlice.actions;
export const getUserDetails = (state) => state.user.userDetails;
export default userSlice.reducer